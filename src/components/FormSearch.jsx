
const FormSearch = ({handleBusqueda,busqueda, setBusqueda}) => {
  return (
    <form >
       <div className="form_flex">
            <div className="form_div"> 
              <input type="text"   value={busqueda} onChange={(e)=>setBusqueda(e.target.value)} placeholder="Buscar productos"/>
            </div>
            <div>
              <button  className='form_boton' onClick={handleBusqueda} >buscar</button>
            </div>
       </div>
    </form>
  )
}

export default FormSearch