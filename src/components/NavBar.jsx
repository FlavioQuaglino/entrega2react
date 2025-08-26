import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  const categories = ['ropa', 'calzado', 'accesorios'];

  return (
    <nav className="bg-gray-800 p-4 shadow-xl">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <Link to="/" className="text-white text-3xl font-extrabold hover:text-gray-300 transition-colors">
          Mi Tienda
        </Link>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-yellow-400 border-b-2 border-yellow-400 pb-1 text-lg font-semibold transition-all'
                : 'text-gray-300 hover:text-white transition-colors text-lg font-medium'
            }
          >
            Todos los Productos
          </NavLink>
          {categories.map((category) => (
            <NavLink
              key={category}
              to={`/category/${category}`}
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-400 border-b-2 border-yellow-400 pb-1 text-lg font-semibold transition-all capitalize'
                  : 'text-gray-300 hover:text-white transition-colors text-lg font-medium capitalize'
              }
            >
              {category}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
