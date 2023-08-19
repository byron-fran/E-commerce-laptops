import {useContext} from 'react';
import { CartProvider } from '../context/cartContext';


const Footer = () => {
    const { setModal }= useContext(CartProvider);
    return(
        <div onClick={() => setModal(!true)}>
              <div className="footer">
            <div className="footer-grid">
                <div className="footer-titulo">
                    <h2>Categoria</h2>
                    <p>Tablets</p>
                    <p>Telefonos</p>
                    <p>Laptops</p>
                    <p>Desktop</p>
                    <p>Monitores</p>
                </div>
                <div className="footer-titulo">
                    <h2>Nosotros</h2>
                    <p>Historia</p>
                    <p>Trabaja con nosotros</p>
                    <p>Ubicacion</p>
                     <p>Terminos y condiciones</p>
                    <p>Politica de privacidad</p>
           
                </div>
                <div className="footer-titulo">
                    <h2>Soporte</h2>
                    <p>Ayuda</p>
                   <p>Metodos de pago</p>
                    <p>Atencion al cliente</p>
                    <p>Devoluciones y Entrega </p>
                    <p>Sugerencias</p>
                </div>
            </div>
            <p className="footer-texto">Todos los derechos reservados 2023</p>
        </div>
        </div>
      
    )
};

export default Footer;