import React from "react";
import './Product.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faStar } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"


function Product(props){
   const product = props.product;
   //console.log(props.product);
   let star = [];
   for(let i=0; i< product.star; i++){
        star.push(<FontAwesomeIcon  icon={faStar} />)
    }
   

    return(
           
                <div className="product-details">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={product.img} alt="product"/>
                        </div>
                        <div className="col-md-9 product-body">
                            <h5><Link to={"/product/"+product.key}>{product.name}</Link></h5>
                            <p className="mb-5">by: {product.seller}</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <h6>Price: {product.price}</h6>
                                    <p>Only {product.stock}  left in stock - order soon</p>
                                    <button onClick={()=>props.handler(product)} className="btn"><FontAwesomeIcon  icon={faCartPlus} />add to cart</button>
                                </div>
                                <div className="col-md-6">
                                    <p className="icon">
                                        {
                                            star
                                        }
                                    </p>
                                    <h4>Features</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          
            

    )

}





export default Product;