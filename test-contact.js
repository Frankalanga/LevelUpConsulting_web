// Test script for contact form API
const testContactAPI = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        company: 'Test Company',
        phone: '+1234567890',
        service: 'Consultoría de Negocios',
        message: 'This is a test message from the contact form.'
      })
    });

    const data = await response.json();
    console.log('Response status:', response.status);
    console.log('Response data:', data);
    
    if (response.ok && data.ok) {
      console.log('✅ Contact form API is working!');
    } else {
      console.log('❌ Contact form API error:', data.error);
    }
  } catch (error) {
    console.error('❌ Network error:', error.message);
  }
};

// Run the test
testContactAPI(); 