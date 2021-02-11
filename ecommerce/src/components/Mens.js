import React from 'react'
import products from './Data';
import './Items.css'
import {FaShoppingCart } from "react-icons/fa";
// import ShoppingList from './ShoppingList'

const Mens = ({onAdd,product}) => {
    return (
        <div className="items">
        {products.map((product) => {
            if(product.gender === 'men') {
                return(
                    <div className="item">
                    <div className="product-img">
                  <img alt={product.name} src={product.img} />
                </div>
                <div className="product-details">
                  <h1 id="product-name">{product.name}</h1>
                  <h4 id="product-description">{product.description}</h4>
                </div>
                <div className="productt-details">
           <button type="button" onClick={() => onAdd(product)} > €{product.price} <FaShoppingCart className="btn-price"/></button>
           </div>
                    </div>
                )
            }
        })}
        </div>
    )
}

export default Mens
