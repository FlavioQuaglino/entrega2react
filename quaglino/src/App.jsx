import React from 'react';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


const App = () => {
return (

    <div className="min-h-screen bg-gray-100 font-sans">
    {}
    <NavBar />
    {}
    <ItemListContainer greeting="¡Bienvenido a Mi Tienda de Electrónica!" />
    </div>
);
};

export default App; 