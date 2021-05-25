import React, { useState, useEffect } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product.js';
import Cart from '../Cart/Cart.js';
import {Link} from "react-router-dom"
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';

function Shop(){
    // console.log(fakeData)
  const first10 = fakeData.slice(0, 10);
  // console.log(first10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);
  useEffect(()=>{
    const saveCart = getDatabaseCart();
    const getProductKeys = Object.keys(saveCart);
    const singlePdKey = getProductKeys.map(key => {
        const matchCartPd = fakeData.find(pd => pd.key === key);
        matchCartPd.quentity = saveCart[key];
        return matchCartPd;
    })
    setCart(singlePdKey);
    
},[]);
  
  const handleAddProduct =(pd) => {
    const tobeAddedKey = pd.key;
    const sameProduct = cart.find(pd => pd.key === tobeAddedKey);
    let count = 1;
    let newCart;
    if(sameProduct) {
      count = sameProduct.quentity + 1;
      sameProduct.quentity = count;
      const others = cart.filter(pd => pd.key !== tobeAddedKey);
      newCart = [...others, sameProduct]
    }
    else{
       pd.quentity = 1;
       newCart = [...cart, pd]
    }
    // console.log("Clicked",product)
    setCart(newCart);
    addToDatabaseCart(pd.key,count)
  }
  // console.log("from state products",products )
    
    return(

        <div className="row shop">
            <div className="col-md-1"></div>
            <div className="col-md-9 ">
                <div className="product" id="product" >
                    {
                        products.map( product => <Product product={product} handler={handleAddProduct}></Product>)
                    }
                </div>
            </div>
            <div className="col-md-2">
                <Cart cart={cart} >
                  <Link to="/review">
                    <button className="btn">Review your order</button>
                  </Link>
                </Cart>
            </div>
        </div>
        
         
        
    )
}
export default Shop;
