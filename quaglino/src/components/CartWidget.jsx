import React from 'react';
import { ShoppingCart } from 'lucide-react'; 

// Componente CartWidget
// Este componente representa el widget del carrito de compras.
const CartWidget = () => {
  return (
    <div className="relative p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300">
      <ShoppingCart className="w-6 h-6" />
      {/* Simula un contador de ítems en el carrito */}
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white">
        3
      </span>
    </div>
  );
};

export default CartWidget; 
