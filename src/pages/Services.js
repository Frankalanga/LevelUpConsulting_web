import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Zap, 
  Code,
  Globe,
  BarChart3,
  Clock,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'consulting',
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Consultoría de Negocios",
      description: "Planificación estratégica, análisis de mercado y estrategias de crecimiento adaptadas a tu industria.",
      features: [
        "Investigación de mercado y análisis competitivo",
        "Optimización del modelo de negocio",
        "Desarrollo de estrategias de crecimiento",
        "Métricas de desempeño y KPIs",
        "Gestión del cambio organizacional"
      ],
      price: "Desde $2,500/mes",
      duration: "3-6 meses"
    },
    {
      id: 'automation',
      icon: <Zap className="w-12 h-12" />,
      title: "Automatización de Procesos",
      description: "Optimiza operaciones con soluciones de automatización inteligentes que ahorran tiempo y reducen costos.",
      features: [
        "Diseño de flujos de trabajo",
        "Implementación de RPA",
        "Integración con sistemas existentes",
        "Monitoreo de desempeño",
        "Mejora continua"
      ],
      price: "Desde $5,000/proyecto",
      duration: "4-8 semanas"
    },
    {
      id: 'software',
      icon: <Code className="w-12 h-12" />,
      title: "Desarrollo de Software a Medida",
      description: "Soluciones de software personalizadas para resolver los desafíos específicos de tu negocio.",
      features: [
        "Aplicaciones web a medida",
        "Desarrollo de apps móviles",
        "APIs e integraciones",
        "Diseño y optimización de bases de datos",
        "Mantenimiento y soporte continuo"
      ],
      price: "Desde $15,000/proyecto",
      duration: "8-16 semanas"
    },
    {
      id: 'digital',
      icon: <Globe className="w-12 h-12" />,
      title: "Transformación Digital",
      description: "Moderniza tus operaciones y la experiencia de tus clientes con un plan digital integral.",
      features: [
        "Evaluación de stack tecnológico",
        "Plan de estrategia digital",
        "Migración de sistemas legados",
        "Implementación de infraestructura en la nube",
        "Capacitación y adopción del equipo"
      ],
      price: "Desde $25,000/proyecto",
      duration: "6-12 meses"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Descubrimiento y Análisis",
      description: "Analizamos tus procesos actuales e identificamos oportunidades de mejora.",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      step: "02",
      title: "Estrategia y Planeación",
      description: "Creamos una hoja de ruta con hitos claros y métricas de éxito.",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      step: "03",
      title: "Implementación",
      description: "Ejecutamos el plan con nuestro equipo experto, minimizando el impacto en la operación.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      step: "04",
      title: "Optimización",
      description: "Monitoreamos y mejoramos continuamente con base en resultados reales.",
      icon: <CheckCircle className="w-8 h-8" />
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
              Nuestros Servicios
            </h1>
            <p className="text-xl text-secondary-600 mb-8">
              Ofrecemos consultoría integral y soluciones tecnológicas diseñadas para 
              transformar tus operaciones y generar crecimiento sostenible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Solicita una Consulta Gratis
              </Link>
              <Link to="/projects" className="btn-secondary">
                Ver Nuestro Trabajo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              ¿Qué Ofrecemos?
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Nuestros servicios se complementan para ofrecer una solución integral a los desafíos
              del negocio moderno.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card hover:border-primary-200 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                    <div className="text-primary-600">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-secondary-600 mb-4">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-secondary-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-secondary-500">
                        <div className="font-semibold">{service.price}</div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{service.duration}</span>
                        </div>
                      </div>
                      <Link 
                        to="/contact" 
                        className="btn-primary text-sm py-2 px-4"
                      >
                        Comenzar
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Nuestro Proceso
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Seguimos una metodología probada que asegura la entrega exitosa del proyecto
              y resultados medibles de negocio.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">{step.step}</span>
                </div>
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary-600">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-secondary-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
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
              ¿Listo para comenzar?
            </h2>
            <p className="text-xl text-secondary-300 mb-8 max-w-2xl mx-auto">
              Conversemos sobre tus necesidades y cómo nuestros servicios pueden ayudarte
              a alcanzar tus objetivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Agendar Consulta
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/projects" className="btn-secondary bg-white text-secondary-900 hover:bg-secondary-100">
                Ver Casos de Éxito
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
