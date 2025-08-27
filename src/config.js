// Frontend Configuration
const config = {
  // API Configuration
  apiUrl: process.env.REACT_APP_API_URL || '/api',
  
  // Contact Form Configuration
  contactEndpoint: '/contact',
  
  // Environment
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  
  // Social Media Links
  instagram: 'https://instagram.com/leveluptechconsulting',
  whatsapp: 'https://wa.me/message/KULVVBGSUY47A1',
  
  // Contact Information
  email: 'levelupconsultinges@gmail.com',
  phone: '+34 694 25 03 79',
  address: 'Calle Hortensia 9, Getafe, 28903'
};

// Debug logging
console.log('🔧 Config loaded:', config);
console.log('🌍 NODE_ENV:', process.env.NODE_ENV);
console.log('🔗 API URL:', config.apiUrl);
console.log('📧 Contact endpoint:', config.contactEndpoint);

export default config; 