/**
 * Novarae Nexus CRM & Enquiry API Sync Service
 */

/**
 * Submits enquiry details securely to the Invoice & CRM proxy serverless handler.
 * Sanitizes and validates the request body client-side first.
 * 
 * @param {Object} data - Form field values.
 * @returns {Promise<Object>} API response status.
 */
export async function submitEnquiry(data) {
  // Client-side Sanitization
  const sanitizeValue = (val) => {
    if (typeof val !== 'string') return val;
    return val.replace(/[<>]/g, '').trim(); // Remove basic HTML tag indicators to avoid XSS
  };

  const payload = {
    name: sanitizeValue(data.name),
    company: sanitizeValue(data.company || ''),
    email: sanitizeValue(data.email),
    phone: sanitizeValue(data.phone),
    whatsapp: sanitizeValue(data.whatsapp || ''),
    businessType: sanitizeValue(data.businessType || ''),
    service: sanitizeValue(data.service || ''),
    budget: sanitizeValue(data.budget || ''),
    contactMethod: sanitizeValue(data.contactMethod || ''),
    message: sanitizeValue(data.message),
    source: sanitizeValue(data.source || 'Official Website'),
    submissionDate: new Date().toISOString()
  };

  // Client-side validation checks
  if (!payload.name) throw new Error('Full Name is required.');
  if (!payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    throw new Error('Please enter a valid email address.');
  }
  if (!payload.phone) throw new Error('Phone Number is required.');
  if (!payload.message) throw new Error('Message content is required.');

  try {
    const response = await fetch('/api/enquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(result.error || `Server responded with status ${response.status}`);
    }

    return result;
  } catch (error) {
    console.error('[API Sync Error] Failed to transmit enquiry payload:', error.message);
    throw error;
  }
}
