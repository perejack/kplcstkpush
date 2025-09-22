// Netlify function to handle payment callback from PayHero - KPLC Refund Registration
exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Process POST request only
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ status: 'error', message: 'Method not allowed' })
    };
  }
  
  try {
    // Parse the callback data
    const callbackData = JSON.parse(event.body);
    
    // Log the callback for debugging
    console.log('Payment callback received:', JSON.stringify(callbackData, null, 2));
    
    // In a production environment, you would:
    // 1. Verify the payment status
    // 2. Update user account status in your database
    // 3. Log the transaction
    
    // Acknowledge receipt of callback
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ status: 'success', message: 'Callback received successfully' })
    };
  } catch (error) {
    console.error('Callback processing error:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ status: 'error', message: 'Failed to process callback' })
    };
  }
};
