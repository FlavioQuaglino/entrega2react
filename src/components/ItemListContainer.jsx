
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getProducts } from '../api/mockProducts';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProducts(categoryId)
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error('Error fetching products:', error))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
        {categoryId ? `Productos de ${categoryId.toUpperCase()}` : 'Todos nuestros productos'}
      </h2>
      {loading ? (
        <div className="text-center text-blue-600 text-2xl animate-pulse">Cargando productos...</div>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;