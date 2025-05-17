import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter, Route, Routes} from 'react-router';
import { lazy, Suspense } from 'react';
const Header = lazy(() => import('./compenents/Header'));
const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const Register = lazy(() => import('./pages/Register'));
const Login = lazy(() => import('./pages/Login'));
const Cart = lazy(() => import('./pages/Cart'));
import LanguageProvider from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
    <BrowserRouter>
    <Header/>
    <div className="container">
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product-details/:id' element={<ProductDetails/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
      </Suspense>
      <br />

    </div>
      
    </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
