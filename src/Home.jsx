import {useRef, useContext} from 'react'
import Header from './components/Header'
import Main from './components/Main';
import Blog from './components/Blog';
import Footer from './components/Footer';
import { CartProvider } from './context/cartContext';
const Home = () => {
  const { setModal } = useContext(CartProvider);


  return ( 
    <>
    <div  onClick={() => setModal(!true)} >
      <Header/>
      <Main/>
      <Blog/>
    </div>
 
     
    </>
  )
}

export default Home