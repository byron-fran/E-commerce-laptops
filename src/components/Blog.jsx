
const Blog = () => {

    return (
        <div>
            <h1 className='blog-h1'>Blog</h1>
            <div className='blog-fondo'>
                <div className='blog-flex'>
                    <div className='blog-contenido'>
                        <p className='blog-texto'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit et temporibus 
                            illum inventore rem ab tempora dolorem. Praesentium hic debitis nisi, officia,
                             similique rem, numquam officiis at eius ex quidem.
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque temporibus id illum vero placeat sint
                              aliquid voluptate minima deserunt no
                             n laboriosam odit voluptatibus obcaecati molestiae, odio nesciunt quod eius cupiditate!
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque temporibus id illum vero placeat sint
                              aliquid voluptate minima deserunt no
                             n laboriosam odit voluptatibus obcaecati molestiae, odio nesciunt quod eius cupiditate!
                        </p>
                    </div>
                </div>
            </div>
            {/*Fin de este div*/}
            <div className='iconos'>
                <div className='blog-iconos'>
                    <div className='blog-box'>
                        <h2>Garantia</h2>
                        <img src="images/icono-2.png" alt="imagen-logo" />
                    </div>
                    <div className='blog-box'>
                        <h2>Atencion </h2>
                        <img src="images/icono-4.png" alt="imagen-logo" />
                    </div>
                    <div className='blog-box'>
                        <h2>Ahorro</h2>
                        <img src="images/icono-3.png" alt="imagen-logo" />
                    </div>
                    </div> 
                        <h2 className='envio-texto' >Envio gratis</h2>
                        <div className='envio'>
                        <img className='envio-carrito' src="images/icono-1.png" alt="imagen-logo" />
                    </div>
            </div>
            
        </div>
    )
};

export default Blog;