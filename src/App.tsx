import Product from './components/Product';
import { useProducts } from './hooks/products';
import Loader from './components/Loader';
import Error from './components/Error';
import Modal from './components/Modal';
import CreateProduct from './components/CreateProduct';
import { useState, useContext } from "react";
import { IProduct } from './module';
import { ModalContext } from './context/ModalContext';
import ProductsPage from './pages/ProductsPage';
import { Routes, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage';
import Navigation from './components/Navigation';


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<ProductsPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App;
