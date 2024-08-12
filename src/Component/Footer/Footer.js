import React from "react";
import playstore from "../image/Google-App-store-icon.png"
import Appstore from "../image/Apple-App-store-icon.png"
import { FaFacebookF,FaPinterestP,FaTwitter,FaInstagram } from "react-icons/fa"
import "./Footer.css"
const Footer=()=>{
    return(
        <div className="container">
            <div className="foot-row">
                <div className="foot-col">
                    <h4>bigbasket</h4>
                    <ul>
                        <li>About Us</li>
                        <li>In News</li>
                        <li>Green bigbasket</li>
                        <li>Privacy Policy</li>
                        <li>Affiliate</li>
                        <li>Terms and Conditions</li>
                        <li>Careers At bigbasket</li>
                        <li>bbinstant Vending Machines</li>
                        <li>bb Daily</li>
                        <li>bb Blog</li>
                        <li>bbnow</li>
                    </ul>
                </div>
                <div className="foot-col">
                    <h4>Help</h4>
                    <ul>
                        <li>FAQs</li>
                        <li>Contact Us</li>
                        <li>bb Wallet FAQs</li>
                        <li>bb Wallet T&Cs</li>
                        <li>Vendor Connect</li>
                    </ul>
                </div>
                <div className="foot-col">
                    <h4>Download Our App</h4>
                    <div className="foot-img">
                        <img src={playstore} alt="loading"/>
                    </div>
                    <div>
                        <img src={Appstore} alt="loading"/>
                    </div>
                </div>
                <div className="foot-col">
                <h4>Get Social With Us</h4>
                <div className="foot-icon-detail">
                    <div className="foot-icon-row">
                        
                        <div className="foot-icon-1">
                            <a href="https://www.facebook.com/"><FaFacebookF /></a>
                        </div>
                        <div className="foot-icon-2">
                            <a href="https://www.pinterest.com/" ><FaPinterestP /></a>
                        </div>
                        <div className="foot-icon-3">
                            <a href="https://x.com/?lang=en" ><FaTwitter /></a>
                        </div>
                        <div className="foot-icon-4">
                            <a href="https://www.instagram.com/"><FaInstagram /></a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Footer