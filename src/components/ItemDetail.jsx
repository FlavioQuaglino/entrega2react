import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ product }) => {
  const onAdd = (quantity) => {
    console.log(`Agregado ${quantity} unidad(es) de ${product.name} al carrito.`);
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto my-10 space-y-8 md:space-y-0 md:space-x-8">
      <div className="md:w-1/2">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto rounded-lg shadow-md border border-gray-200"
        />
      </div>
      <div className="md:w-1/2 flex flex-col justify-between">
        <div>
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">{product.name}</h2>
          <p className="text-2xl text-blue-700 font-semibold mb-3 capitalize">{product.category}</p>
          <p className="text-3xl font-bold text-green-600 mb-6">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 leading-relaxed text-lg mb-8">{product.description}</p>
        </div>
        <ItemCount stock={10} initial={1} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;