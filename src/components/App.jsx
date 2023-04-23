import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
import AboutUs from './AboutUs/AboutUs';
import Contact from './Contact/Contact';
import { ToastContainer } from 'react-toastify';

const App = () => {

  return (
<>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/product/:id' element={<ItemDetailContainer/>}/>
        <Route path='/categories/:categories' element={<ItemListContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/categories/aboutUs' element={<AboutUs/>}/>
        <Route path='/categories/contact' element={<Contact/>}/>
      </Routes>
      <ToastContainer/>
      </BrowserRouter>
    </>
    
  );
}

export default App;