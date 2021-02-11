import React, { useState, useEffect, useCallback, useMemo } from 'react'
import {FaSearch} from "react-icons/fa";
import products from './Data';
import Product from './Product'
import Products from './Products';

const Search = () => {
    const [text, setText] = useState('')
    const [data, setData] = useState(products)
  
        const [searchText, setSearchText] = useState("");
    
       const editSearch = e => {
           setSearchText(e.target.value)
       }
      
    

    return (
        <form>
        <input type="text"
        onChange={editSearch}
        value={searchText}
        className="input-search"/>
        {searchText.length === 0 ? <FaSearch className="search-icon search-none" /> : ''}
       
    </form>
    )
    }


export default Search
