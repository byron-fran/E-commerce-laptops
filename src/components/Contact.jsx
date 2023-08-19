import {useContext}from 'react';
import { CartProvider } from '../context/cartContext';

const Contact = () => {
  const { setModal} = useContext(CartProvider);
  return (
    <div  onClick={() => setModal(!true)}>
      <div className='formulario'>
      <h2>Contacto</h2>
      <form>
        <fieldset>
          <legend>Informacion</legend>
          <div>
              <label htmlFor="nombre">Nombre</label>
              <input  id='nombre' type="text" placeholder='Tu nombre' />
          </div>
          <div>
              <label htmlFor="email">Email</label>
              <input id='email' type="text" placeholder='Tu email' />
          </div>
          <div>
              <label htmlFor="numero">Telefono</label>
              <input type="number" placeholder='Tu numero de telefono' />
          </div>
          <div>
              <label htmlFor="info">Asunto</label>
              <textarea name="" id="info" cols={30} rows={15}></textarea>
          </div>
          <button>Enviar</button>
        </fieldset>
      </form>
    </div>
    </div>
  
  )
}

export default Contact