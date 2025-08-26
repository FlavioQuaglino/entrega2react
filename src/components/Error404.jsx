
import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-gray-100 p-8">
      <h1 className="text-9xl font-extrabold text-red-600 mb-4">404</h1>
      <p className="text-4xl font-bold text-gray-800 mb-6">¡Página no encontrada!</p>
      <p className="text-lg text-gray-600 mb-8">
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>
      <Link
        to="/"
        className="px-8 py-4 bg-blue-600 text-white text-xl font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-lg"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default Error404;
