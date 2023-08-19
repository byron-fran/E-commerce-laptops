import React, { useRef, useEffect } from 'react';

function Client() {
    useEffect(() => {
        const handleScroll = () => {
          // Lógica a realizar cuando ocurre el evento de desplazamiento
          console.log('Se ha desplazado la página');
        };
    
        // Agregar el listener al evento 'scroll' cuando el componente se monta
        window.addEventListener('scroll', handleScroll);
    
        // Limpiar el listener cuando el componente se desmonta
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      return (
        <div style={{ height: '200vh' }}>
          <h1>Contenido largo</h1>
        </div>
      );
}

export default Client;