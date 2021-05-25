import React from 'react'
import "./Cart.css";

function Cart(props){
    const cart = props.cart;
    const totle = cart.reduce((tol,pd) => tol + pd.price*pd.quentity,0);
    let button;
    

    //totle ber korar onno upai
    // let totle = 0;

    // for(let i = 0; i < c.length; i++)
    // {
    //     totle += c[i].price * c[i].quantity;
    // }

    let tex = 0;
    if(totle > 2000){
        tex = tex + (totle % 20);
    }
    if(totle < 1500){
        tex = tex + (totle % 15);
    }
    if(totle <1000){
        tex = tex + (totle % 10);
    }
    if(totle < 700){
        tex = tex + (totle % 5);
    }
    if(totle < 400){
        tex = 0;
    }



    let shipping = 0;
    if(totle > 0){
        shipping = 12;
    }
    if(totle > 15){
        shipping = 4;
    }
    if(totle > 35){
        shipping = 0;
    }


    return (

    <div className="cart-body">
    <h3 className="text-center cart-heading">Order Summery</h3>
    <p className="text-center">Items ordered:{cart.length}</p>
    <tr>
        <td>Items: </td>
        <td>{cart.length}</td>
    </tr>
    <tr>
        <td>Shipping and Handling: </td>
        <td>{Number(shipping).toFixed(2)}</td>
    </tr>
    <tr>
        <td>Total before tax:</td>
        <td>{Number(totle).toFixed(2)}</td>
    </tr>
    <tr>
        <td>Estimated Tax:</td>
        <td>{Number(tex).toFixed(2)}</td>
    </tr>
    <tr>
        <td className=" order">Order Total:</td>
        <td className=" order">{Number(totle + shipping + tex).toFixed(2)}</td>
    </tr>
    {
       props.children
    }
    
</div>)
}




export default Cart;


