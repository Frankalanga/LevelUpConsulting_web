import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  CheckCircle,
  Instagram,
  MessageCircle
} from 'lucide-react';
import config from '../config';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Debug logging
      console.log('🚀 Form submission started');
      console.log('📝 Form data:', formData);
      console.log('🔗 API URL:', `${config.apiUrl}${config.contactEndpoint}`);
      console.log('⚙️ Config:', config);
      
      // Use relative URL for development (will work with proxy)
      // For production, this will be the same domain
      const res = await fetch(`${config.apiUrl}${config.contactEndpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      console.log('📡 Response status:', res.status);
      console.log('📡 Response headers:', res.headers);
      
      const data = await res.json();
      console.log('📄 Response data:', data);
      
      if (!res.ok || !data.ok) throw new Error(data.error || 'Error');
      setIsSubmitted(true);
    } catch (err) {
      console.error('❌ Contact form error:', err);
      setError('No se pudo enviar el mensaje. Intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' });
        setError('');
      }, 3000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: [config.email],
      action: null
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Dirección",
      details: [config.address],
      action: null
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 mb-6">
              Contáctanos
            </h1>
            <p className="text-xl text-secondary-600 mb-8">
              ¿Listo para transformar tu negocio? Conversemos sobre cómo nuestras soluciones pueden ayudarte a lograr tus objetivos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                Envíanos un Mensaje
              </h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-green-700">
                    Gracias por escribirnos. Te responderemos dentro de 24 horas.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {!!error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded">
                      {error}
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="Ingresa tu nombre"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="Ingresa tu correo"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="Nombre de la empresa"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="Número de teléfono"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-secondary-700 mb-2">
                      Servicio de Interés
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Selecciona un servicio</option>
                      {['Consultoría de Negocios','Automatización de Procesos','Software a Medida','Transformación Digital','Otro'].map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Cuéntanos sobre tu proyecto o necesidades..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-5 h-5" />
                        <span>Enviar Mensaje</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                Información de Contacto
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-secondary-50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-primary-600">
                        {info.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-secondary-600 mb-1">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-8 p-6 bg-secondary-50 rounded-lg">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                  Acciones Rápidas
                </h3>
                <div className="space-y-3">
                  <a href={config.instagram} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center space-x-2 bg-secondary-100 hover:bg-secondary-200 text-secondary-700 font-medium py-3 px-4 rounded-lg transition-colors">
                    <Instagram className="w-5 h-5" />
                    <span>Escríbenos en Instagram @leveluptechconsulting</span>
                  </a>
                  <a href={config.whatsapp} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center space-x-2 bg-secondary-100 hover:bg-secondary-200 text-secondary-700 font-medium py-3 px-4 rounded-lg transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span>Escríbenos por WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Respuestas rápidas a dudas comunes sobre nuestros servicios y proceso.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card"
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                ¿Cuándo pueden iniciar un proyecto?
              </h3>
              <p className="text-secondary-600">
                La mayoría puede comenzar en 1-2 semanas tras la consulta inicial. Podemos iniciar descubrimiento y planeación de inmediato.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card"
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                ¿En qué industrias trabajan?
              </h3>
              <p className="text-secondary-600">
                Tecnología, salud, finanzas, manufactura y retail, entre otras. Adaptamos las soluciones a tu industria.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card"
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                ¿Ofrecen soporte continuo?
              </h3>
              <p className="text-secondary-600">
                Sí, contamos con planes de soporte, mantenimiento y optimización continua.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card"
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                ¿Cómo miden el éxito?
              </h3>
              <p className="text-secondary-600">
                Definimos KPIs y metas claras al inicio del proyecto y reportamos avances periódicamente.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary-900">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para empezar?
            </h2>
            <p className="text-xl text-secondary-300 mb-8 max-w-2xl mx-auto">
              No esperes para transformar tu negocio. Contáctanos hoy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Agendar Consulta Gratuita
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
