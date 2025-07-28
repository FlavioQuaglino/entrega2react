import React from 'react';
import { Store, Home, Package, Info, Contact } from 'lucide-react';

import CartWidget from './CartWidget';

// Componente NavBar
// Esta es la barra de navegación principal de la tienda.
const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-700 to-blue-900 p-4 shadow-lg rounded-b-lg">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        {}
        <div className="flex items-center text-white text-2xl font-bold font-inter mb-2 md:mb-0">
        <Store className="w-8 h-8 mr-2" />
        Mi Tienda Online REACT JS
        </div>

        {}
        <div className="flex-grow flex justify-center md:justify-start">
        <ul className="flex flex-wrap space-x-4 text-white text-lg font-medium">
            <li>
            <a href="#" className="hover:text-blue-200 transition duration-300 flex items-center">
                <Home className="w-5 h-5 mr-1" />Inicio
            </a>
            </li>
            <li>
            <a href="#" className="hover:text-blue-200 transition duration-300 flex items-center">
                <Package className="w-5 h-5 mr-1" />Productos
            </a>
            </li>
            <li>
            <a href="#" className="hover:text-blue-200 transition duration-300 flex items-center">
                <Info className="w-5 h-5 mr-1" />Acerca de
            </a>
            </li>
            <li>
            <a href="#" className="hover:text-blue-200 transition duration-300 flex items-center">
                <Contact className="w-5 h-5 mr-1" />Contacto
            </a>
            </li>
        </ul>
        </div>

        {}
        <div className="ml-auto">
        <CartWidget />
        </div>
    </div>
    </nav>
);
};

export default NavBar; 
