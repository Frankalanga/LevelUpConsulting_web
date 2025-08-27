import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/levelup-logo.png" alt="LevelUp Consulting" className="w-10 h-10 object-contain" />
              <span className="text-xl font-bold">LevelUp Consulting</span>
            </div>
            <p className="text-secondary-300 mb-6 max-w-md">
              Impulsamos a las empresas con soluciones de consultoría e innovación tecnológica. 
              Convertimos desafíos en oportunidades.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-300 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-300 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-secondary-300 hover:text-white transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-300 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/consultoria" className="text-secondary-300 hover:text-white transition-colors">
                  Consultoría de Negocios
                </Link>
              </li>
              <li>
                <Link to="/services/automatizacion" className="text-secondary-300 hover:text-white transition-colors">
                  Automatización de Procesos
                </Link>
              </li>
              <li>
                <Link to="/services/software" className="text-secondary-300 hover:text-white transition-colors">
                  Software a Medida
                </Link>
              </li>
              <li>
                <Link to="/services/transformacion-digital" className="text-secondary-300 hover:text-white transition-colors">
                  Transformación Digital
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-secondary-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-primary-400" />
              <span className="text-secondary-300">LevelUpConsulting@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-primary-400" />
              <span className="text-secondary-300">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-primary-400" />
              <span className="text-secondary-300">Calle Hortensia 9, Getafe, 28903</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-700 mt-8 pt-8 text-center">
          <p className="text-secondary-400">
            © 2024 LevelUp Consulting. Todos los derechos reservados. | 
            <Link to="/privacy" className="ml-2 text-secondary-300 hover:text-white transition-colors">
              Política de Privacidad
            </Link> | 
            <Link to="/terms" className="ml-2 text-secondary-300 hover:text-white transition-colors">
              Términos del Servicio
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
