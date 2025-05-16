import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter, Route, Routes} from 'react-router';
import Header from './compenents/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProductDetails from './pages/ProductDetails';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className="container">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product-details/:id' element={<ProductDetails/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      <br />

    </div>
      
    </BrowserRouter>
  )
}

export default App
