import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Zap, 
  Code, 
  Globe, 
  ExternalLink, 
  ArrowRight,
  Search
} from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'Todos', count: 10 },
    { id: 'consulting', name: 'Consultoría', count: 3 },
    { id: 'automation', name: 'Automatización', count: 3 },
    { id: 'software', name: 'Software a Medida', count: 3 },
    { id: 'digital', name: 'Transformación Digital', count: 1 }
  ];

  // Capability examples (no cost/team/time claims)
  const projects = [
    {
      id: 1,
      title: "Tablero de Operaciones en Tiempo Real",
      category: "automation",
      industry: "Manufactura",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      description: "Automatizamos la recolección de datos de planta y creamos un dashboard con KPIs clave para toma de decisiones.",
      value: [
        "Visibilidad de producción en tiempo real",
        "Alertas tempranas y reducción de errores",
        "Mejora continua basada en datos"
      ],
      technologies: ["Node.js", "Python", "Timeseries DB", "React"]
    },
    {
      id: 2,
      title: "CRM Integrado con Automatización Comercial",
      category: "digital",
      industry: "Tecnología",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      description: "Implementamos un CRM con flujos automatizados de seguimiento y calificación de leads.",
      value: [
        "Procesos comerciales estandarizados",
        "Mejor trazabilidad del cliente",
        "Reportes y embudos listos para el equipo"
      ],
      technologies: ["Salesforce o HubSpot", "React", "Serverless", "APIs"]
    },
    {
      id: 3,
      title: "Plataforma de Analítica para Salud",
      category: "software",
      industry: "Salud",
      image: "https://images.unsplash.com/photo-1580281657527-47e6b2b1a17c?w=600&h=400&fit=crop",
      description: "Diseñamos un data mart clínico y vistas analíticas para indicadores de atención.",
      value: [
        "Paneles de calidad de atención",
        "Seguimiento de pacientes y capacidad",
        "Interoperabilidad con sistemas existentes"
      ],
      technologies: ["Python", "React", "PostgreSQL", "Docker", "Cloud"]
    },
    {
      id: 4,
      title: "Estrategia de Expansión y Modelo de Negocio",
      category: "consulting",
      industry: "Retail",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      description: "Definimos propuesta de valor, segmentos objetivo y plan de expansión con KPIs.",
      value: [
        "Hoja de ruta clara de crecimiento",
        "KPI y OKR para seguimiento",
        "Modelo financiero base para decisiones"
      ],
      technologies: ["BI", "Frameworks de Estrategia", "Herramientas de Visualización"]
    },
    {
      id: 5,
      title: "Automatización de Finanzas (Facturas y Gastos)",
      category: "automation",
      industry: "Finanzas",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      description: "Flujos automáticos para recepción, aprobación y conciliación de facturas y gastos.",
      value: [
        "Menos tareas manuales repetitivas",
        "Trazabilidad y control",
        "Reportes en un clic"
      ],
      technologies: ["RPA", "OCR", "Integraciones ERP", "APIs"]
    },
    {
      id: 6,
      title: "Plataforma E‑Learning Personalizada",
      category: "software",
      industry: "Educación",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      description: "Portal de aprendizaje con contenidos dinámicos y analítica de progreso.",
      value: [
        "Experiencia de aprendizaje adaptativa",
        "Paneles para instructores",
        "Arquitectura escalable"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Cloud"]
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.industry.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-900 to-secondary-800 section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Casos y Capacidades
            </h1>
            <p className="text-xl text-secondary-300 mb-8">
              Ejemplos de lo que podemos construir e implementar para tu organización.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Inicia tu Proyecto
              </button>
              <button className="btn-secondary">
                Solicitar Propuesta
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="section-padding bg-white border-b border-secondary-200">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
              <input
                type="text"
                placeholder="Buscar ejemplos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <h3 className="text-xl font-semibold text-secondary-600 mb-2">
                No se encontraron ejemplos
              </h3>
              <p className="text-secondary-500">
                Ajusta la búsqueda o la categoría.
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card hover:border-primary-200 group"
                >
                  {/* Project Image */}
                  <div className="relative mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-secondary-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Value bullets */}
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-3">Valor para tu organización</h4>
                      <ul className="space-y-2">
                        {project.value.map((result, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-secondary-600">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-3">Tecnologías y Herramientas</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 6).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-secondary-100 text-secondary-700 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-4 border-t border-secondary-200">
                      <button className="w-full btn-primary flex items-center justify-center space-x-2">
                        <span>Explorar esta solución</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
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
              ¿Listo para diseñar tu caso?
            </h2>
            <p className="text-xl text-secondary-300 mb-8 max-w-2xl mx-auto">
              Hablemos sobre tus objetivos y te proponemos la mejor ruta para implementarlo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Inicia tu Proyecto
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-secondary bg-white text-secondary-900 hover:bg-secondary-100">
                Agendar Consulta
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
