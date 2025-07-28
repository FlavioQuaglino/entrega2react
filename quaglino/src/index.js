import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa ReactDOM para renderizar la aplicación
import App from './App'; // Importa el componente principal de tu aplicación


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
