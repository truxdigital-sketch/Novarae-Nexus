/**
 * Vercel Serverless Function: Secure Enquiry Proxy Handler
 * Synchronizes enquiries securely to the external CRM API without exposing keys on the frontend.
 */

// Simple in-memory rate-limiting map (limited by serverless instance lifetimes, but provides basic transient shield)
const requestSpamTracker = new Map();
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;  // Max 5 submissions per IP per minute

export default async function handler(req, res) {
  // Security Headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight options request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Identify Client IP for rate limiting and spam prevention
  const clientIp = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown-ip';

  // Rate Limiting Check
  const now = Date.now();
  const clientHistory = requestSpamTracker.get(clientIp) || [];
  const activeHistory = clientHistory.filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW_MS);
  
  if (activeHistory.length >= MAX_REQUESTS_PER_WINDOW) {
    console.warn(`[Spam Prevention] Rate limit triggered for IP: ${clientIp}`);
    return res.status(429).json({ 
      error: 'Too many requests. Please wait a moment before trying again, or reach us directly via WhatsApp.' 
    });
  }

  activeHistory.push(now);
  requestSpamTracker.set(clientIp, activeHistory);

  try {
    const {
      name,
      company,
      email,
      phone,
      whatsapp,
      businessType,
      service,
      budget,
      contactMethod,
      message,
      source = 'Official Website'
    } = req.body;

    // Strict validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return res.status(400).json({ error: 'Full Name is required.' });
    }
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'A valid email address is required.' });
    }
    if (!phone || typeof phone !== 'string' || phone.trim().length === 0) {
      return res.status(400).json({ error: 'Phone Number is required.' });
    }
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({ error: 'Message content is required.' });
    }

    // Server-side Sanitization
    const sanitize = (val) => {
      if (typeof val !== 'string') return '';
      return val
        .replace(/[<>]/g, '') // strip HTML tag brackets
        .trim();
    };

    const sanitizedData = {
      fullName: sanitize(name),
      companyName: sanitize(company),
      emailAddress: sanitize(email),
      phoneNumber: sanitize(phone),
      whatsappNumber: sanitize(whatsapp),
      businessType: sanitize(businessType),
      serviceInterestedIn: sanitize(service),
      budget: sanitize(budget),
      preferredContactMethod: sanitize(contactMethod),
      message: sanitize(message),
      source: sanitize(source),
      submissionDateTime: new Date().toISOString()
    };

    // Store API configuration using Vercel Environment Variables
    const crmApiUrl = process.env.CRM_API_URL || 'https://api.novaraenexus-crm.com/v1/enquiries';
    const crmApiKey = process.env.CRM_API_KEY || 'default-mock-key-for-local-dev';

    console.log(`[CRM Sync] Synchronizing enquiry for ${sanitizedData.emailAddress} [IP: ${clientIp}]`);

    // Submit to CRM API over HTTPS
    const response = await fetch(crmApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${crmApiKey}`,
        'X-Client-IP': clientIp
      },
      body: JSON.stringify(sanitizedData)
    });

    if (!response.ok) {
      const errorResponse = await response.text();
      console.error(`[CRM Sync Error] CRM API status ${response.status}:`, errorResponse);
      throw new Error(`CRM endpoint returned status code ${response.status}`);
    }

    console.log(`[CRM Sync Success] Enquiry for ${sanitizedData.emailAddress} synced successfully.`);
    return res.status(200).json({ 
      success: true, 
      message: 'Enquiry synchronized successfully to Invoice & CRM System.' 
    });

  } catch (error) {
    console.error('[CRM Sync Exception] Failed to transmit data payload:', error.message);
    return res.status(502).json({ 
      error: "We couldn't submit your enquiry at the moment. Please try again in a few minutes or contact us directly via WhatsApp." 
    });
  }
}
