
export const mockProducts = [
  { id: '1', name: 'Zapatillas Deportivas', price: 85.00, category: 'calzado', description: 'Cómodas zapatillas para correr y entrenar.', image: 'https://placehold.co/400x300/F0F8FF/000000?text=Zapatillas' },
  { id: '2', name: 'Camiseta Algodón', price: 25.00, category: 'ropa', description: 'Camiseta 100% algodón, ideal para uso diario.', image: 'https://placehold.co/400x300/E6E6FA/000000?text=Camiseta' },
  { id: '3', name: 'Pantalón Vaquero Slim Fit', price: 60.00, category: 'ropa', description: 'Vaqueros modernos con corte ajustado.', image: 'https://placehold.co/400x300/F5F5DC/000000?text=Vaqueros' },
  { id: '4', name: 'Botas de Montaña', price: 120.00, category: 'calzado', description: 'Botas resistentes para senderismo y aventura.', image: 'https://placehold.co/400x300/DCDCDC/000000?text=Botas' },
  { id: '5', name: 'Sudadera con Capucha', price: 45.00, category: 'ropa', description: 'Sudadera cálida y con estilo para el invierno.', image: 'https://placehold.co/400x300/ADD8E6/000000?text=Sudadera' },
  { id: '6', name: 'Chaqueta Impermeable', price: 90.00, category: 'ropa', description: 'Chaqueta ligera y resistente al agua para exteriores.', image: 'https://placehold.co/400x300/B0E0E6/000000?text=Chaqueta' },
  { id: '7', name: 'Sandalias de Playa', price: 30.00, category: 'calzado', description: 'Sandalias cómodas y frescas para el verano.', image: 'https://placehold.co/400x300/FAEBD7/000000?text=Sandalias' },
  { id: '8', name: 'Calcetines Deportivos (3 pares)', price: 15.00, category: 'accesorios', description: 'Calcetines transpirables para actividades deportivas.', image: 'https://placehold.co/400x300/F8F8FF/000000?text=Calcetines' },
  { id: '9', name: 'Gorra de Béisbol', price: 20.00, category: 'accesorios', description: 'Gorra clásica con ajuste regulable.', image: 'https://placehold.co/400x300/FFFACD/000000?text=Gorra' },
  { id: '10', name: 'Mochila Urbana', price: 55.00, category: 'accesorios', description: 'Mochila espaciosa y duradera para el día a día.', image: 'https://placehold.co/400x300/B0C4DE/000000?text=Mochila' },
];

export const getProducts = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = categoryId
        ? mockProducts.filter((p) => p.category === categoryId)
        : mockProducts;
      resolve(filteredProducts);
    }, 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = mockProducts.find((p) => p.id === id);
      if (product) {
        resolve(product);
      } else {
        reject(new Error('Producto no encontrado'));
      }
    }, 1000);
  });
};
