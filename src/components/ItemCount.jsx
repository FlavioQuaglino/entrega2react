import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    if (onAdd) onAdd(count);
  };

  return (
    <div className="flex items-center space-x-2 border border-gray-300 rounded-lg p-2 max-w-xs mx-auto">
      <button
        onClick={decrement}
        className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        disabled={count <= 1}
      >
        -
      </button>
      <span className="text-xl font-semibold w-8 text-center">{count}</span>
      <button
        onClick={increment}
        className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
        disabled={count >= stock}
      >
        +
      </button>
      <button
        onClick={handleAdd}
        className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors shadow-md"
        disabled={stock === 0}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
