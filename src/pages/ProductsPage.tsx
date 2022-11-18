import React from 'react'
import Product from '../components/Product';
import { useProducts } from '../hooks/products';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Modal from '../components/Modal';
import CreateProduct from '../components/CreateProduct';
import { useState, useContext } from "react";
import { IProduct } from '../module';
import { ModalContext } from '../context/ModalContext';

const ProductsPage = () => {
  
    const {loading,products, error, addProduct} = useProducts()
    const {modal, open, close: closeModal} = useContext(ModalContext)
  
  
  
    const createHandler = (product: IProduct) => {
      closeModal()
      addProduct(product) 
    }
  
    return (
        <div className='mx-auto container mw-[1220px] flex gap-2 flex-wrap pt-5'>
          {loading && <Loader/>}
          {error &&  <Error error={error}/> }
          {products.map(item =>
          <Product product={item}/>
          )
          }
  
          {modal && <Modal title={"Create new product"} onClose={closeModal}>
            <CreateProduct onCreate={createHandler}/>
          </Modal>}
  
          <button className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2' onClick={open}>+</button>
        </div>
  
  
    );
}

export default ProductsPage