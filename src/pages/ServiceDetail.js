import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, Zap, Code, Globe, CheckCircle, ArrowRight, Clock } from 'lucide-react';

const SERVICE_MAP = {
  consultoria: {
    icon: <TrendingUp className="w-12 h-12" />,
    title: 'Consultoría de Negocios',
    summary:
      'Diseñamos estrategias de crecimiento, optimizamos tu modelo de negocio y definimos métricas para escalar con confianza.',
    features: [
      'Análisis de mercado y competencia',
      'Definición de propuesta de valor',
      'Plan de crecimiento y go-to-market',
      'OKRs y KPIs del negocio',
      'Gestión del cambio organizacional',
    ],
    duration: '3-6 meses',
    priceHint: 'Planes mensuales flexibles',
  },
  automatizacion: {
    icon: <Zap className="w-12 h-12" />,
    title: 'Automatización de Procesos',
    summary:
      'Implementamos flujos automatizados y RPA para reducir costos, errores y tiempos de ciclo en tus operaciones.',
    features: [
      'Mapeo de procesos y cuellos de botella',
      'RPA con mejores prácticas',
      'Integración con sistemas existentes',
      'Tablero de métricas operativas',
      'Optimización continua',
    ],
    duration: '4-8 semanas',
    priceHint: 'Proyectos por alcance',
  },
  software: {
    icon: <Code className="w-12 h-12" />,
    title: 'Software a Medida',
    summary:
      'Construimos aplicaciones web y móviles a la medida, APIs e integraciones robustas y seguras.',
    features: [
      'Arquitectura y diseño técnico',
      'Desarrollo full‑stack',
      'Pruebas y aseguramiento de calidad',
      'DevOps e infraestructura en la nube',
      'Mantenimiento y soporte',
    ],
    duration: '8-16 semanas',
    priceHint: 'Proyectos por iteraciones',
  },
  'transformacion-digital': {
    icon: <Globe className="w-12 h-12" />,
    title: 'Transformación Digital',
    summary:
      'Aceleramos la modernización tecnológica de tu empresa con una hoja de ruta clara y foco en el valor.',
    features: [
      'Evaluación del stack tecnológico',
      'Migración a la nube',
      'Adopción de nuevas herramientas',
      'Gestión del cambio y capacitación',
      'Gobernanza y seguridad',
    ],
    duration: '6-12 meses',
    priceHint: 'Programas por fases',
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = SERVICE_MAP[slug];

  if (!service) {
    return (
      <div className="section-padding container-custom">
        <h1 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">Servicio no encontrado</h1>
        <p className="text-secondary-600 mb-6">El servicio solicitado no existe o fue movido.</p>
        <Link to="/services" className="btn-primary">Ver todos los servicios</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-start space-x-5"
          >
            <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
              {service.icon}
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">{service.title}</h1>
              <p className="text-xl text-secondary-600 max-w-3xl">{service.summary}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">¿Qué incluye?</h2>
              <div className="space-y-3">
                {service.features.map((f, i) => (
                  <div key={i} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-secondary-700">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card">
              <div className="flex items-center space-x-2 mb-3 text-secondary-700">
                <Clock className="w-4 h-4" />
                <span>Duración estimada: {service.duration}</span>
              </div>
              <div className="text-secondary-700 mb-6">{service.priceHint}</div>
              <Link to="/contact" className="btn-primary w-full inline-flex items-center justify-center">
                Solicitar propuesta
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary-900">
        <div className="container-custom text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">¿Listo para comenzar?</h3>
          <p className="text-secondary-300 mb-6 max-w-2xl mx-auto">Agenda una llamada con nuestro equipo para evaluar el encaje y próximos pasos.</p>
          <Link to="/contact" className="btn-primary">Agendar consulta</Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
