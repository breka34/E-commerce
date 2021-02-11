import React from 'react'
import './Basket.css';
import {FaShoppingCart } from "react-icons/fa";

const Basket = ({ cartItems, onAdd, onRemove }) => {
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.17;
  const shippingPrice = itemsPrice > 199 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  
  return (
    <aside className="block aside">
    <div className="fa-absolute">
    <FaShoppingCart className="shopping-cart-basket"/><span>{cartItems.length}</span>
    </div>
       
      <div className="item-container">
        {/* {cartItems.length === 0 && <div>Cart is empty</div>} */}
        {cartItems.map((item) => (
          <div key={item.id} className="item-id ">
            <div className="item-img">
            <img src={item.img} />
            </div>
            <div className="item-name">{item.name}</div>
            <div className="item-btns">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className=" text-right">
              {item.qty} x €{item.price.toFixed(2)}
            </div>
            
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="item-price">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">€{itemsPrice.toFixed(2)}</div>
            </div>
            <div className="item-tax">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">€{taxPrice.toFixed(2)}</div>
            </div>
            <div className="item-shipping">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
              €{shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="item-total">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>€{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
    
}

export default Basket
