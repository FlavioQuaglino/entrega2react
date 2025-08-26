import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getProductById } from '../api/mockProducts';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProductById(itemId)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error('Error fetching product detail:', error);
        setProduct(null);
      })
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) {
    return (
      <div className="text-center text-blue-600 text-3xl font-bold mt-20 animate-pulse">
        Cargando detalles del producto...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center text-red-600 text-3xl font-bold mt-20">
        Producto no encontrado.
      </div>
    );
  }

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;