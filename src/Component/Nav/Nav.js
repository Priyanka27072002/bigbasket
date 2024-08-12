import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaChevronDown, FaUser, FaSearch } from "react-icons/fa";
import { BsBasketFill } from "react-icons/bs"
import { FaLocationDot } from "react-icons/fa6"
import logo from '../image/logo.png'
import { handlearr } from "../Slice.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FaXmark } from "react-icons/fa6";
import './Nav.css'
import { useNavigate } from "react-router-dom";
 
const Nav = () => {
    let state = useSelector((sam) => sam)
    let dispatch = useDispatch()
    const close = (id) => {
        let x = state.data.arr.dynamic.map((e) => {
            return e.id === id ? e.iscart === true ? { ...e, iscart: false, count: 1 } : { ...e, iscart: true } : e
        })
        dispatch(handlearr(x))
    }
    let dis = () => {
      let boo= state.data.arr.dynamic.map((v)=>{
            return v.bool===false?{...v,bool:true}:{...v,bool:false}
      })
      dispatch(handlearr(boo))
      console.log(boo);
    }
    let add = (id) => {
        let n = state.data.arr.dynamic.map((e) => {
            return e.id === id ? e.iscart === false ? { ...e, iscart: true } : { ...e, iscart: false } : e
        })

        dispatch(handlearr(n))
    }
    let inc = (id) => {
        let m = state.data.arr.dynamic.map((e) => {
            return e.id === id ? { ...e, count: e.count + 1 } : e
        })
        dispatch(handlearr(m))
    }
    let dec = (id) => {
        let z = state.data.arr.dynamic.map((e) => {
            return e.id === id ? e.count > 1 ? { ...e, count: e.count - 1 } : { ...e, iscart: false } : e
        })
        dispatch(handlearr(z))
    }
    // console.log(state.data.display);
    let [cou, setcou] = useState(0) 
    var [a,seta]=useState(0)
    useEffect(() => {
        let n = state.data.arr.dynamic.filter((e) => {
            return e.iscart
        })
        // let x = state.data.arr.dynamic.forEach((e) => {
        //  if (e.iscart) {
        //         if (e.kgboo) {
        //             e.rate.map((v, i) => {
        //                 if (v.amout) {
        //                     arr.push(e.count * v.amout)
        //                 }
        //             })

        //         }
        //         else {
        //             e.rate.map((v, i) => {
        //                 if (i === 0) {
        //                     arr.push(e.count * v.proprice)
        //                 }
        //             })
        //         }

        //     }
         
        // })
        const arr = [];

    // Filter the dynamic array to include only items where iscart is true
    const filteredData = state.data.arr.dynamic.filter(e => e.iscart);

    // Iterate over the filtered data
    filteredData.forEach(e => {
        // Check if kgboo is true
        if (e.kgboo) {
            // If kgboo is true, process the rate array
            e.rate.forEach(v => {
                // Only include items where amout is defined
                if (v.amout) {
                    arr.push(e.count * v.amout);
                }
            });
        } else {
            // If kgboo is false, process the rate array differently
            e.rate.forEach((v, i) => {
                // Only include the first item (i === 0) in the rate array
                if (i === 0) {
                    arr.push(e.count * v.proprice);
                }
            });
        }
    });

       
        
        console.log(arr);
        setcou(n.length)
        let y=arr?.reduce((a,b) => {
            return a+b
        },0)
        seta(y);
    },[state.data.arr.dynamic])
    console.log(a);
    let nav=useNavigate()
    const gotohome=()=>{
        nav("/")
    }
    return <div className="nav">
        <div className="container">
            <div className="navbar">
            <div className="nav-cont">
                <div className="nav-det">
                    <div className="nav-icon">
                        <FaPhoneAlt /><small>1860 123 1000</small>
                    </div>
                    <div className="nav-icon">
                        <FaLocationDot /><small>560004,Bangalore</small><FaChevronDown />
                    </div>
                    <div className="nav-icon">
                        <FaUser /><small>Login/Sign Up</small>
                    </div>
                </div>
            </div>
            <div className="nav-main">
                <div className="nav-img">
                    <img src={logo} alt="loading" onClick={gotohome}/>
                </div>
                <div className="nav-sea">
                    <div className="nav-seadetail">
                        <input type="text" placeholder="Search for Products.."/>
                        <div className="nav-sea-con">
                            <FaSearch className="nav-seaicon" />
                        </div>

                    </div>
                </div>
                <div className="nav-bas" onClick={dis} >
                    <BsBasketFill className="nav-basicon" /><small>{cou} items</small>
                </div>

            </div>
            </div>
            <div className="cart">
                {
                    state.data.arr.dynamic.map((e)=>{
                        return e.bool?<div className="cart-info">
                        {
                        state.data.arr.dynamic.map((e) => {
                            return e.iscart === true ? <div className="cart-detail">
                                <div className="cart-img">
                                    <img src={e.img} alt="loading" />
                                </div>
                                <div className="cart-name">
                                    <h4>{e.proname}</h4>
                                </div>
                                <div className="cart-quantity">
                                    {
                                        e.iscart === false ? <button onClick={() => add(e.id)}>Add</button> :
                                            <div ><div className="cart-btn"><button onClick={() => dec(e.id)}>-</button> <p>{e.count}</p> <button onClick={() => inc(e.id)}>+</button></div></div>
                                    }
                                </div>
                                <div className="cart-amount">
                                    
                                    {
                                        e.kgboo ? e.rate.map((v, i) => {
                                            return v.amout ? <h4>{v.kg}= &#8377; {(e.count) * (v.amout)}</h4> : ""
                                        }) : e.rate.map((v, i) => {
                                            return i === 0 ? <h4>{v.kg} =  &#8377;  {(e.count) * (v.proprice)}</h4> : ''
                                        })
                                    }

                                </div>
                                <div>
                                    <FaXmark onClick={() => close(e.id)} />
                                </div>
                            </div>:''   
                        })
                    }
                    <div className="cart-row">
                        <div className="cart-col">
                            <div className="cart-para">
                            <p>"Actual Delivery Charges Completed at checkout"</p>
                            </div>
                        </div>
                        <div className="cart-col">
                            <div className="cart-bill">
                                <h4>sub Total : {Math.round(a)}</h4>
                                <h4>Delivery Charge : ..</h4>
                                <div className="cart-bill-btn">
                                    <button>View Basket & Checkout</button>
                                </div>
                            </div>
                        </div>
                    
                    
                </div>
                </div>:""})
                }
                
                
            </div>
            <div className="nav-btn">
                <button>SHOP BY CATEGORY &nbsp;<FaChevronDown /></button>
            </div>

        </div>
    </div>
}
export default Nav