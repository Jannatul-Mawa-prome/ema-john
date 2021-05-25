import React from 'react';
import {useParams} from "react-router-dom"
import fakeData from '../../fakeData';

const ProductDetails = () => {
    const { productkey } = useParams();
    const pdDetails = fakeData.find(pd => pd.key = productkey);
    return (
        <div style={{marginTop:'130px'}}>
           <div className="row">
               <div className="col-md-2"></div>

               <div className="col-md-8" style={{borderLeft:'1px solid gray',borderRight:'1px solid gray',padding:'0 60px'}}>
                    <img style={{height:'300px',width:'400px'}} src={pdDetails.img} alt="productImage" />
                    <h2 style={{margin:"20px 0"}}><b>Product Key:</b> {productkey}</h2>
                    <h5><b>Product Name:</b> {pdDetails.name}</h5>
                    <p><b>Product Price:</b> {pdDetails.price}</p>
               </div>
               <div className="col-md-2"></div>
           </div>
        </div>
    );
};

export default ProductDetails;