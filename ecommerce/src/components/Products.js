import React, { useState } from 'react'
import products from './Data';
import Product from './Product';
import NavBar from './NavBar'
import './Products.css';
const Products = ({onAdd}) => {
    return (
        <>
       {products.map((product,id) => (
           <div key={product.id} className="product">
           <Product key={product.id} product={product} onAdd={onAdd}  />
           </div>
       ))}
           
        </>
    )
       }


export default Products
