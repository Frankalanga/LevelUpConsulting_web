import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const servicesTimeoutRef = useRef(null);

  const isActive = (path) => location.pathname === path;

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300); // 300ms delay before closing
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (servicesTimeoutRef.current) {
        clearTimeout(servicesTimeoutRef.current);
      }
    };
  }, []);

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Proyectos', path: '/projects' },
    { name: 'Contacto', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/levelup-logo.png" alt="LevelUp Consulting" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold text-secondary-900">LevelUp Consulting</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-primary-600'
                    : 'text-secondary-600 hover:text-primary-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                className="flex items-center space-x-1 text-sm font-medium text-secondary-600 hover:text-primary-600 transition-colors duration-200"
              >
                <span>Servicios</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  <Link
                    to="/services/consultoria"
                    className="block px-4 py-2 text-sm text-secondary-600 hover:bg-primary-50 hover:text-primary-600"
                  >
                    Consultoría de Negocios
                  </Link>
                  <Link
                    to="/services/automatizacion"
                    className="block px-4 py-2 text-sm text-secondary-600 hover:bg-primary-50 hover:text-primary-600"
                  >
                    Automatización de Procesos
                  </Link>
                  <Link
                    to="/services/software"
                    className="block px-4 py-2 text-sm text-secondary-600 hover:bg-primary-50 hover:text-primary-600"
                  >
                    Software a Medida
                  </Link>
                  <Link
                    to="/services/transformacion-digital"
                    className="block px-4 py-2 text-sm text-secondary-600 hover:bg-primary-50 hover:text-primary-600"
                  >
                    Transformación Digital
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="btn-primary"
            >
              Comenzar
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-2 text-sm font-medium ${
                  isActive(item.path)
                    ? 'text-primary-600'
                    : 'text-secondary-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/services"
              className="block py-2 text-sm font-medium text-secondary-600"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-sm font-medium text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              Comenzar
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
