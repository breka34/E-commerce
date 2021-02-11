import React, {useState} from 'react'
import './App.css';
import './components/Items.css'
import './components/Basket.css'
import NavBar from './components/NavBar'
import Products from './components/Products';
import products from './components/Data'
import Pagination from './components/Pagination'
import {  Route, Link, Switch } from "react-router-dom";
import Mens from './components/Mens'
import Womens from './components/Womens'
import Middle from './components/Middle'
import Basket from './components/Basket'
// import ShoppingList from './components/ShoppingList'
function App({products}) {

  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };



  const [searchText, setSearchText] = useState("");

  // //For Pagination
  // const [posts, setPosts] = useState(products);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(26);

  // // Get current posts
  // const indexOfLastPost = currentPage * postsPerPage ;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // // Change page
  // const paginate = pageNumber => setCurrentPage(pageNumber);
  // <Products products={currentPosts} onAdd={onAdd}/>

  
  return (
    <main>
       <NavBar />
       {/* <div className="bask"> */}
       <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        />
       {/* </div> */}
      
     <Switch>
     <Route exact path="/">
     <div className="products-cards">
       <Products products={products} onAdd={onAdd}/>
     </div>
     </Route>
      <Route path="/mens">
        <Mens onAdd={onAdd} />
      </Route>
      <Route path="/womens">
        <Womens onAdd={onAdd} />
      </Route>
      <Route path="/dogs">
        <Middle  onAdd={onAdd}/>
      </Route>
    </Switch>
     {/* <Pagination 
       className="pagination"
       postsPerPage={postsPerPage}
       totalPosts={posts.length}
       paginate={paginate}
     /> */}
    
    </main>
    
    
  );
 
}

export default App;
