import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Zap, 
  Users, 
  Shield, 
  ArrowRight,
  CheckCircle,
  Star,
  Search,
  Play,
  FileText
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Consultoría Estratégica",
      description: "Estrategia de negocio y planes de crecimiento adaptados a tu industria."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automatización de Procesos",
      description: "Optimiza operaciones con soluciones de automatización inteligentes."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Capacitación de Equipos",
      description: "Programas de formación para maximizar el potencial de tu equipo."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Gestión de Riesgos",
      description: "Identificamos y mitigamos riesgos para proteger tu negocio."
    }
  ];

  // Quality pillars (replace experience-based stats)
  const qualityPillars = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Calidad Garantizada",
      description: "Entregables revisados, pruebas y documentación clara en cada hito."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Transparencia y Confianza",
      description: "Plan de trabajo visible, avances semanales y comunicación directa."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Soluciones a Medida",
      description: "Diseñadas según tus objetivos, no plantillas genéricas."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Mejores Prácticas",
      description: "Arquitectura sólida, seguridad y estándares de la industria."
    }
  ];

  const methodology = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Descubrimiento y Diseño",
      description: "Entendemos tu contexto y definimos objetivos claros con una propuesta de valor medible."
    },
    {
      icon: <Play className="w-8 h-8" />,
      title: "Ejecución Iterativa",
      description: "Entregas cortas con feedback continuo para asegurar alineación y calidad."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Validación y Soporte",
      description: "Pruebas, documentación y acompañamiento post‑entrega para garantizar resultados."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-900 to-secondary-800 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                Llevamos tu negocio al siguiente nivel
                <span className="block brand-accent break-words inline-block pr-1 leading-[1.2]">LevelUp Consulting</span>
              </h1>
              <p className="text-xl text-secondary-300 mb-8">
                Somos especialistas en consultoría de negocios y software de automatización que impulsa
                el crecimiento, la eficiencia y la innovación. Te ayudamos a navegar el futuro digital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary text-center">
                  Solicita una Consulta Gratis
                </Link>
                <Link to="/services" className="btn-secondary text-center">
                  Explorar Servicios
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                      Horas Ahorradas con Automatizaciones
                    </h3>
                    <p className="text-secondary-600 text-sm">
                      Nuestras soluciones han permitido a nuestros clientes ahorrar tiempo valioso
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-primary-50 rounded-lg">
                      <span className="text-sm text-secondary-700">Procesamiento de Datos</span>
                      <span className="text-lg font-bold text-primary-600">1,000+ hrs</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg">
                      <span className="text-sm text-secondary-700">Tareas Administrativas</span>
                      <span className="text-lg font-bold text-secondary-600">750+ hrs</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-accent-50 rounded-lg">
                      <span className="text-sm text-secondary-700">Reportes y Análisis</span>
                      <span className="text-lg font-bold text-accent-600">500+ hrs</span>
                    </div>
                  </div>
                  
                  <div className="text-center pt-2">
                    <span className="text-xs text-secondary-500">Mensuales ahorradas</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              ¿Por qué elegir LevelUp Consulting?
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Combinamos experiencia en la industria con tecnología de vanguardia para entregar
              soluciones que generan resultados reales de negocio.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center group hover:border-primary-200"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                  <div className="text-primary-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-secondary-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section (replaces numeric stats) */}
      <section className="section-padding bg-secondary-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nuestro Compromiso con la Calidad</h2>
            <p className="text-secondary-300 max-w-3xl mx-auto">Nos enfocamos en construir confianza y valor desde el primer día.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityPillars.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-secondary-800 rounded-xl p-6 border border-secondary-700"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-accent-500 to-primary-600 text-white flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-secondary-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology/Quality details (replaces testimonials) */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">Cómo Garantizamos la Calidad</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">Un proceso claro con validaciones en cada etapa para asegurar resultados.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {methodology.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-accent-500 to-primary-600 text-white flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">{step.title}</h3>
                <p className="text-secondary-600">{step.description}</p>
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
              ¿Listos para llevar tu negocio al siguiente nivel?
            </h2>
            <p className="text-xl text-secondary-300 mb-8 max-w-2xl mx-auto">
              Conversemos sobre cómo nuestra consultoría y soluciones de automatización pueden ayudarte
              a alcanzar tus metas y mantenerte a la vanguardia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary flex items-center justify-center">
                Comienza tu Camino
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/services" className="btn-secondary">
                Saber Más
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
