import React from 'react';

const RetriveDetails = (props) => {
    const product = props.product;
    const removeItem = props.removeItem;
    return (
        <div style={{margin:"20px 10px",borderBottom:'1px solid lightGray',paddingBottom:"10px"}}>
             <h5 style={{color:'blue'}}>{product.name}</h5>
            <div className="row">
                <div className="col-md-6">
                    <p>Price: {product.price}</p>
                    <small>Sold by:{ product.seller}</small><br/>
                    <small>Quentity:{ product.quentity}</small><br/>
                    <button className="btn" onClick={()=>removeItem(product.key)}>Remove</button>
                </div>
                <div className="col-md-6">
                    <ul>
                        <li>8-10 business days</li>
                        <li>5-7 business days</li>
                        <li>2-4 business days</li>
                    </ul>
                </div>
            </div> 
        </div>
    );
};

export default RetriveDetails;