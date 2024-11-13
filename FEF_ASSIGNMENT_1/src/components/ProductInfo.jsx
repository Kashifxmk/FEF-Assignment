import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types';
import toast, {Toaster}from 'react-hot-toast'


const ProductInfo = () => {


    

    const [product, setProduct] = useState({
        name: ' iPhone',
        price: 55000,
        description: 'An old verison of iPhone.',
      });
    
      function updateProduct () {
        
        const newProduct={
          name: 'iPhone 16',
          price: 80000,
          description: 'A new and updated version of iPhone.',
        };
        setProduct(newProduct);
        validateProps(newProduct);
        
        
      };
  return (
    <div className='flex-col justify-center align-middle text-center bg-slate-400 border-solid border-2 rounded-lg p-7 shadow-md shadow-black'> 
      <div className=' text-center m-3 font-bold text-2xl '><h1>QUESTION 2</h1></div>
      <h1 className=' m-5 font-bold text-xl text-center'>Product Information</h1>
      <ProductDetails product={product} updateProduct={updateProduct}  />
      <Toaster/>
    </div>
  );
}

function validateProps(product)
{
    if (typeof product.name !== 'string') {
        toast.error('proptype Error: Product name must be a string!');
      }
      else if (typeof product.price !== 'number') {
        toast.error('proptype Error: Product price must be a number!');
      }
      else if (typeof product.description !== 'string') {
        toast.error('proptype Error: Product description must be a string!');
      }
      else{
        toast.success('prop updated successfully')
      }
}

const ProductDetails = ({ product, updateProduct }) => {

    
    return (
      <div className='flex-col m-10 align-middle justify-center pl-96 pr-96 '>

        <p className='border-solid border-2 border-gray-500 rounded-md p-2 m-2 bg-white shadow-md shadow-black'>Name: {product.name}</p>
        <p className='border-solid border-2 border-gray-500 rounded-md p-2 m-2  bg-white shadow-md shadow-black'>Price: Rs.{product.price}</p>
        <p className='border-solid border-2 border-gray-500 rounded-md p-2 m-2  bg-white shadow-md shadow-black'>Description: {product.description}</p>

        <button onClick={updateProduct} className='border-solid border-2 border-black rounded-md p-2  m-2 bg-black text-gray-200 shadow-md shadow-black' >Update Product</button>
      </div>
    )
  }
  ProductDetails.propTypes = {
      product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired,
      updateProduct: PropTypes.func.isRequired,
    };
  



export default ProductInfo