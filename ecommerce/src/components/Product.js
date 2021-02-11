import React from 'react'
import {FaShoppingCart } from "react-icons/fa";
const Product = ({product, onAdd}) => {
    
    return (
         <div  className="product" className="product" >
           <div className="product-img">
               <img src={product.img} />
           </div> 
           <div  className="product-details">
               <h3>{product.name}</h3>
               <span>{product.description}</span>
           </div>
           <div className="productt-details">
           <button type="button" onClick={() => onAdd(product)}> €{product.price} <FaShoppingCart className="btn-price"/></button>
           </div>
           
         </div>
    )
}


export default Product
