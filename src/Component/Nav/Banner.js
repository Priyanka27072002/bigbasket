import React from "react";
import banner from '../image/banner.jpg'
import Product from "../Product/Product.js"

const Banner=()=>{
    return(
        <div>
            <div className="banner-img">
                <img src={banner} alt="loading"/>
            </div>
            <div>
                <Product/>
            </div>
            
        </div>
    )
}
export default Banner