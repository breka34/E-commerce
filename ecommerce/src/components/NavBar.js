import React, {useState, useEffect, useRef, Children} from 'react'
import './NavBar.css'
import {FaAlignLeft,FaAlignJustify,FaSearch,FaShoppingCart } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import useOutsideClick from "./useOutsideClick";
import products from './Data';
import Search from './Search';
import Basket from './Basket'
import { Link } from "react-router-dom";
const NavBar = () => {
    const [open, setOpen] = useState(false)
    const [show, setShow] = useState(false)
    const ref = useRef()
    const [data, setData] = useState(products)
    console.log(data)
    //Search name items
    
    
    useOutsideClick(ref, () => {
        if (open) setOpen(false);
      });
     
    
    return (
        <nav>
        {/* <div className="menu-container active"> */}
       <div ref={ref} className="links" id={open ? 'hidden' : ''}>
           <ul>
           <li className="li1"><Link to="/">All</Link></li>
           <li className="li2"><Link to="/womens">Women's</Link></li>
           <li className="li3"><Link to="/mens">Mens's</Link></li>
            <li className="li4"><Link to="/dogs">Dog's</Link></li>
           </ul>
        </div>
       <AiOutlineMenu className="menu-icon" onClick={() =>setOpen(!open)} />
        {/* <button onClick={() => setOpen(!open)}> <AiOutlineMenu className="menu-icon" /></button> */}
        <div className="title">
            <span><FaAlignLeft className="icon-orange"/></span><h1>COMMERCE</h1>
        </div>
        <div className="search-shopping search shopping">
            <Search /> 
          
        {/* onChange={e => onChangeSearch(e.target.value)} */}
       {/* <form>
           <input type="text"
            value={text} onChange={onChangeSearch} 
           
             className="input-search"/>
           {text.length === 0 ? <FaSearch className="search-icon search-none" /> : ''}
       </form> */}
      
        </div>
        </nav>
    )
}

export default NavBar
