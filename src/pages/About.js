import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Heart, 
  Lightbulb, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Cliente Primero",
      description: "Priorizamos tu éxito por encima de todo, construyendo relaciones de largo plazo basadas en confianza y resultados."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovación Constante",
      description: "Nos mantenemos a la vanguardia y aprovechamos tecnología de punta para entregar soluciones excepcionales."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Calidad y Confiabilidad",
      description: "Cada proyecto se entrega con los más altos estándares, asegurando éxito y satisfacción a largo plazo."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Enfoque en Resultados",
      description: "Nos enfocamos en resultados medibles y mejoras tangibles que aportan valor real."
    }
  ];

  const team = [
    {
      name: "David Chen",
      role: "Fundador y CEO",
      bio: "Más de 15 años en consultoría de negocios y tecnología. Experto en transformación digital.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Sarah Rodriguez",
      role: "Directora de Consultoría",
      bio: "Asesora estratégica con amplia experiencia en optimización de procesos y desarrollo organizacional.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Michael Thompson",
      role: "CTO",
      bio: "Líder tecnológico con 12+ años construyendo soluciones escalables y liderando equipos de ingeniería.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Emily Watson",
      role: "Directora de Operaciones",
      bio: "Especialista en operaciones enfocada en agilizar procesos e implementar soluciones de automatización.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const achievements = [
    {
      year: "2023",
      title: "Mejor Firma de Consultoría",
      description: "Reconocidos por resultados sobresalientes e innovación."
    },
    {
      year: "2022",
      title: "500+ Proyectos Completados",
      description: "Hito alcanzado con 95% de satisfacción de clientes."
    },
    {
      year: "2021",
      title: "Expansión Global",
      description: "Ahora servimos a clientes en más de 15 países."
    },
    {
      year: "2020",
      title: "Premio a la Innovación Digital",
      description: "Reconocimiento por soluciones de automatización de alto impacto."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 mb-6">
                Sobre
                <span className="text-primary-600 block">LevelUp Consulting</span>
              </h1>
              <p className="text-xl text-secondary-600 mb-8">
                Somos un equipo apasionado de consultores y tecnólogos dedicados a transformar negocios 
                mediante estrategias inteligentes y soluciones innovadoras. Desde nuestros inicios, 
                hemos ayudado a cientos de compañías a alcanzar sus metas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary">
                  Contáctanos
                </Link>
                <Link to="/projects" className="btn-secondary">
                  Ver Nuestro Trabajo
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
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-12 h-12 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-900 mb-2">150+</h3>
                  <p className="text-secondary-600">Clientes Felices</p>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-secondary-600">Tasa de Éxito</span>
                    <span className="font-semibold text-secondary-900">95%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-secondary-600">Años de Experiencia</span>
                    <span className="font-semibold text-secondary-900">8+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-secondary-600">Integrantes del Equipo</span>
                    <span className="font-semibold text-secondary-900">25+</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Nuestra Historia
            </h2>
            <div className="space-y-6 text-lg text-secondary-600 leading-relaxed">
              <p>
                Fundada en 2015, LevelUp Consulting nació con una misión: ayudar a las empresas a navegar 
                el cambiante panorama digital y alcanzar su máximo potencial. Lo que comenzó como un 
                pequeño equipo se convirtió en un socio integral de transformación.
              </p>
              <p>
                A lo largo de los años evolucionamos de la consultoría tradicional a una firma de estrategia 
                y tecnología. Nuestro enfoque combina expertise sectorial con soluciones tecnológicas de 
                vanguardia para entregar resultados que otros no pueden igualar.
              </p>
              <p>
                Hoy trabajamos con clientes de múltiples industrias, desde startups hasta compañías Fortune 
                500, ayudándolos a lograr crecimiento sostenible y ventaja competitiva.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Estos principios guían nuestro trabajo y definen cómo colaboramos con nuestros clientes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center group hover:border-primary-200"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                  <div className="text-primary-600">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-secondary-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Un equipo multidisciplinario de consultores, tecnólogos y expertos en operaciones 
              enfocado en entregar resultados excepcionales.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center group hover:border-primary-200"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-secondary-600 text-sm">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nuestros Logros
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Hitos y reconocimientos que reflejan nuestro compromiso con la excelencia.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">
                  {achievement.year}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-primary-100 text-sm">
                  {achievement.description}
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
              ¿Trabajamos juntos?
            </h2>
            <p className="text-xl text-secondary-300 mb-8 max-w-2xl mx-auto">
              Conversemos sobre cómo nuestro equipo puede ayudarte a transformar tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Empezar una Conversación
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/services" className="btn-secondary bg-white text-secondary-900 hover:bg-secondary-100">
                Explorar Servicios
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
