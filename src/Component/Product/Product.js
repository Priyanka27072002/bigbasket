import React, { useState } from "react"
import './Product.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux"
import { BsBookmark } from "react-icons/bs"
import { FaBookmark } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { handlearr } from "../Slice.js"
import Relaventpro from "../Relavent/Relaventpro.js"
const Product=()=>{
    let state=useSelector((samp)=>samp)
    let dispatch=useDispatch()
    console.log(state.data.arr);
    let nav=useNavigate()
    const detail=(id)=>{
        nav(`/detail?id=${id}`)
    }
    
    let [select,setSelect]=useState()
   
   
    let liked=(id)=>{
        let x=state.data.arr.dynamic.map((e)=>{
            return e.id===id?e.issave===false?{...e,issave:true}:{...e,issave:false}:e
        })
        dispatch(handlearr(x))
    }
    let add=(id)=>{
        let n= state.data.arr.dynamic.map((e)=>{
            return e.id===id?e.iscart===false?{...e,iscart:true}:{...e,iscart:false}:e
        })
      
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
    const selesele=(id)=>{
        console.log('onclick');
        setSelect(id)
    }
    
    const sele=(e)=>{
        console.log('onchange');
     let z =state.data.arr.dynamic.map((v)=>{
         return v.id===select?{...v,kgboo:true,rate:v.rate.map((val)=>{
               return  e.target.value===val.kg?{...val,amout:val.proprice}:{...val,amout:''}
                    // setSelect(val.proprice)
                })}:v
                     
            })
        console.log(e);
        dispatch(handlearr(z))
        console.log(state.data.arr.dynamic);
            
        }
        
    
    return(
        <div className="container">
            <div className="pro-head">
                <h2>My Smart Basket</h2>
                <button>Show more</button>
            </div> 
            <div className="pro-row">
                {
                    state.data.arr.dynamic.map((e,i)=>{
                        return(
                            <div className="pro-col" key={i}>
                                <div className="pro-card" >
                                    <div className="pro-img">
                                        <img src={e.img} alt="loading" onClick={()=>detail(e.id)}/>
                                    </div>
                                    <div className="pro-detail">
                                        <small>{e.fresho}</small> 
                                        <h4 className="pro-name">{e.proname}</h4>
                                        <div className="pro-select">
                                          
                                           
                                             <select onChange={sele} onClick={()=>selesele(e.id)}id="sel" >
                                                {
                                                 e.rate.map((v)=>{
                                                return <option value={v.kg} >{v.kg}</option>
                                            })
                                          }
                                           </select>  
                                        </div>
                                        {
                                        e.kgboo?e.rate.map((v,i)=>{
                                                return v.amout?<h4>&#8377; {v.amout}</h4>:""
                                            }):e.rate.map((v,i)=>{
                                                return i===0?<h4>&#8377; {v.proprice}</h4>:''})
                                        }
                                          
                                            {/* <h4>&#8377;{select}</h4> */}
                                            
                                         
                                        
                                    </div>
                                    <div className="pro-bottom">
                                        <div className="pro-save">
                                            {
                                                e.issave===true?<FaBookmark onClick={()=>liked(e.id)}/>:<BsBookmark onClick={()=>liked(e.id)}/>
                                            }
                                            
                                        </div>
                                        <div className="pro-add">
                                        {
                                       e.iscart===false? <button  onClick={()=>add(e.id)}>Add</button>:
                                       <div ><div className="add-remove"><button onClick={()=>dec(e.id)}>-</button> <p>{e.count}</p> <button onClick={()=>inc(e.id)}>+</button></div></div>
                                    }
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <Relaventpro/>
            </div>
        </div>
    )
            }
export default Product