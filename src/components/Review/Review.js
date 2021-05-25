import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import RetriveDetails from '../RetriveDetails/RetriveDetails';
import Cart from '../Cart/Cart.js';
import {Link} from "react-router-dom"
import "./Review.css";

function Review(){
    const [cart,setCart] = useState([]);
    const [placeOrder, setPlaceOrder] = useState(false)

    const removeItem = (productKey) =>{
        const removePd = cart.filter(pd => pd.key !== productKey);
        setCart(removePd);
        removeFromDatabaseCart(productKey);
    }


    const handleToClick = () =>{
        setCart([]);
        processOrder();
        setPlaceOrder(true);
    }

    let ending;
    if(placeOrder){
        ending = <h1 style={{color:'#d35400'}}>Thank You for Ordering Me..Your order place Successfully🙂🙂🙂</h1>;
    }
    useEffect(()=>{
        const retriveProduct = getDatabaseCart();
        const productKey = Object.keys(retriveProduct);
        const cartProducts = productKey.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quentity = retriveProduct[key];
            return product;
        })
        setCart(cartProducts);
        
   },[]);
    return (
        <div className="review-body" style={{marginTop:"150px"}}>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-8 ">
                    <div className="product" id="product" >
                    {
                        cart.map(pd => <RetriveDetails product={pd} removeItem={removeItem}></RetriveDetails>)
                    }
                    {
                        ending
                    }
                    </div>
                </div>
                <div className="col-md-3">
                    <Cart cart={cart}>
                   
                        <button className="btn" onClick={handleToClick}>Place Order</button>
                    
                    </Cart>
                </div>
            </div>
            
            

        </div>
    )
}


export default Review;