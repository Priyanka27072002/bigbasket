import React from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaCheck } from "react-icons/fa6";
import { useDispatch } from "react-redux"
import { handlearr } from "../Slice.js"
import './Detail.css'
const  Detail=()=>{
    let [params]=useSearchParams()
    let state=useSelector((sam)=>sam)
    console.log(Number(params.get("id")))
    console.log( state.data.arr);
    let dispatch=useDispatch()
    let add=(id)=>{
        let n= state.data.arr.dynamic.map((e)=>{
            return e.id===id?e.iscart===false?{...e,iscart:true}:{...e,iscart:false}:e
        })
        console.log(state.data.count);
         dispatch(handlearr(n))    
    }
    let inc=(id)=>{
        let m=state.data.arr.dynamic.map((e)=>{
            return e.id===id?{...e,count:e.count+1}:e
        })
        dispatch(handlearr(m))
    }
    let dec=(id)=>{
        let z=state.data.arr.dynamic.map((e)=>{
            return e.id===id?e.count>1?{...e,count:e.count-1}:{...e,iscart:false}:e
        })
        dispatch(handlearr(z))
    }
    return(
        <div>
            {
               state.data.arr.dynamic.map((e)=>{
                return e.id===Number(params.get("id"))?<div>
                    <div className="container">
                        <div className="det-row">
                            <div className="det-col">
                                <div className="det-img">
                                    <img src={e.img} alt="loading"/>
                                </div>
                            </div>
                            <div className="det-col">
                                <p className="det-fresho">{e.fresho}</p>
                                <div>
                                    <h2>{e.proname}</h2>
                                    <h2>{e.kg}</h2>
                                </div>
                                <div className="detail-bill">
                                <h3>Price : </h3>{e.kgboo?e.rate.map((v,i)=>{
                                                return v.amout?<h3>&#8377; {v.amout}</h3>:""
                                            }):e.rate.map((v,i)=>{
                                                return i===0?<h3>&#8377; {v.proprice}</h3>:''})
                                        }
                                </div>
                                
                                <p  className="det-fresho">(inclusive of all taxes)</p>
                                <div className="det-button">
                                {
                                       e.iscart===false? <button className="det-add-btn" onClick={()=>add(e.id)}>Add to basket</button>:
                                       <div className="det-inc-btn"><button  className="det" onClick={()=>dec(e.id)}>-</button> <p className="det-para">{e.count}</p> <button className="det" onClick={()=>inc(e.id)}>+</button></div>
                                    }
            
                                    <button className="det-save-btn">Save</button>
                                </div>
                                <div className="det-package">
                                    <h4>Pack Sizes</h4>
                                    <div className="det-pack">
                                       
                                            {
                                                e.rate.map((v)=>{
                                                    return   <div className="det-detail">
                                                                <h4>{v.kg}</h4>
                                                                <h4>&#8377; {v.proprice}</h4>
                                                                <FaCheck />
                                                             </div>
                                                })
                                            }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            {e.detail.map((v)=>{
                                return(
                                    <div>
                                        <h2>{v.head}</h2>
                                    <div className="det-info">
                                        
                                        <div className="det-information">
                                            <h4>{v.abo_head}</h4>
                                            <ul>
                                                <li>{v.abo_detail1}</li>
                                                <li>{v.abo_detail2}</li>
                                            </ul>
                                        </div>
                                        <hr/>
                                        <div className="det-information">
                                            <h4>{v.benifit_head}</h4>
                                            <ul>
                                                <li>{v.ben_detail1}</li>
                                                <li>{v.ben_detail2}</li>
                                            </ul>
                                        </div>
                                        <hr/>
                                        <div className="det-information">
                                            <h4>{v.store_head}</h4>
                                            <ul>
                                                <li>{v.store_detail}</li>
                                            </ul>
                                        </div>
                                        <hr/>
                                        <div className="det-information">
                                            <h4>{v.other_head}</h4>
                                            <ul>
                                                <li>{v.other_detail1}</li>
                                                <li>{v.other_detail2}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                    
                    
                </div>:""
               })
            }
        </div>
    )
}
export default Detail