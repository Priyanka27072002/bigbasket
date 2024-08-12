import React from "react";
import { useSelector } from "react-redux";
import './Relaventpro.css'
import { useNavigate } from "react-router-dom";
const Relaventpro=()=>{
    let state=useSelector((sam)=>sam)
    console.log(state.data.arr);
    let nav=useNavigate()
    const relavent=(type)=>{
        nav(`/relavent?type=${type}`)
    }
    return(
        <div>
            <h1>Fruits and Vegetables</h1>
            <div>
            {
                state.data.arr.static.map((e,i)=>{
                    return(
                        <div key={i}> 
                            <div  className="state-row">
                                {
                                    e.furit.map((v)=>{
                                        return(
                                            <div className="state-col">
                                                <div className="state-card">
                                                    <img src={v.sta_img} alt="loading" onClick={()=>relavent(v.type)}/>
                                                </div>
                                                
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <h1>Beverages</h1>
                            <div className="state-row">
                                {
                                    e.bever.map((a)=>{
                                        return(
                                            <div className="state-col">
                                                <div className="state-card">
                                                    <img src={a.sta_img} alt="loading"  onClick={()=>relavent(a.type)}/>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <h1>Snacks Store</h1>
                            <div className="state-row">
                                {
                                    e.snack.map((b)=>{
                                        return(
                                            <div className="state-col">
                                                <div className="state-card">
                                                    <img src={b.sta_img} alt="loading"  onClick={()=>relavent(b.type)}/>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}
export default Relaventpro