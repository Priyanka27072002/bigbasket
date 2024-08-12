import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { BsBookmark } from "react-icons/bs"
import { useDispatch } from "react-redux";
import { handleprice} from "../Slice.js"
import './Relaventdetail.css'
const Relaventdetail=()=>{
    
    let [param]=useSearchParams()
    console.log(param.get("type"));
    let state=useSelector((samp)=>samp)
    let dispatch=useDispatch()
    console.log(state.data.arr);
    var [normalarr,setnor]=useState(state.data.arr.static)
    var [brandname,setbrand]=useState([])
    var [pricename,setpricename]=useState([])
    var [discountname,setdisname]=useState([])
    var brand=''
    var pricesel=''
    var discountsel=''
    const discountselect=(name)=>{
        console.log(name);
        state.data.arr.static.map((e)=>{
            return param.get("type")==="healthdrink"||param.get("type")==="tea"||param.get("type")==="milk"||param.get("type")==="drinks"?{...e,bever:e.bever.map((a)=>{
                return {...a,discount:a.discount.map((b)=>{
                    return b===name?discountsel=b:""
                })
            }
        })
    }:param.get("type")==="furit"||param.get("type")==="vegetable"||param.get("type")==="herbs"||param.get("type")==="cuts"?{...e,furit:e.furit.map((a)=>{
        return {...a,discount:a.discount.map((b)=>{
            return b===name?discountsel=b:""
        })
    }
    })
    }:param.get("type")==="chaisnack"||param.get("type")==="moringsnack"||param.get("type")==="sweets"||param.get("type")==="pasta"?{...e,snack:e.snack.map((a)=>{
        return {...a,discount:a.discount.map((b)=>{
            
            return b===name?discountsel=b:""
        })
    }
    })
    }:""
    })
    console.log(discountsel);
    discountname.push(discountsel)
    setdisname(discountname)
    display2()
    }
    const display2=()=>{
        console.log(discountname);
        var arr1=[]
        state.data.arr.static.map((e)=>{
      return param.get("type")==="healthdrink"||param.get("type")==="tea"||param.get("type")==="milk"||param.get("type")==="drinks"?
      {...e,bever:e.bever.map((a)=>{
        return a.type===param.get("type")?{...a,card:a.card.map((c)=>{
           return  discountname.map((br)=>{
                return br==="Upto 5%"?c.card_discount<=5?arr1.push(c):"hi"
                :br==="5% - 10%"?c.card_discount>5 &&c.card_discount<=10?arr1.push(c):""
                :br==="10% - 25%"?c.card_discount>10 &&c.card_discount<=25?arr1.push(c):""
                :br==="More than 25%"?c.card_discount>25?arr1.push(c):"":"hello"

                
            })
       
        })
    }:a
    })
    }:
    param.get("type")==="furit"||param.get("type")==="vegetable"||param.get("type")==="herbs"||param.get("type")==="cuts"? 
    {...e,furit:e.furit.map((a)=>{
        return a.type===param.get("type")?{...a,card:a.card.map((c)=>{
           return  discountname.map((br)=>{
            console.log(br);
                return br==="Upto 5%"?c.card_discount<=5?arr1.push(c):""
                :br==="5% - 10%"?c.card_discount>5 &&c.card_discount<=10?arr1.push(c):""
                :br==="10% - 25%"?c.card_discount>10 &&c.card_discount<=25?arr1.push(c):""
                :br==="More than 25%"?c.card_discount>25?arr1.push(c):"":"hello"
            })
        
        })
    }:a
    })
    }:
    param.get("type")==="chaisnack"||param.get("type")==="moringsnack"||param.get("type")==="sweets"||param.get("type")==="pasta"?
    {...e,snack:e.snack.map((a)=>{
        return a.type===param.get("type")?{...a,card:a.card.map((c)=>{
           return  discountname.map((br)=>{
                return br==="Upto 5%"?c.card_discount<=5?arr1.push(c):""
                :br==="5% - 10%"?c.card_discount>5 &&c.card_discount<=10?arr1.push(c):""
                :br==="10% - 25%"?c.card_discount>10 &&c.card_discount<=25?arr1.push(c):""
                :br==="More than 25%"?c.card_discount>25?arr1.push(c):"":"hello"
            })
        
        })
    }:a})}:""})
    console.log(arr1);
    let y=state.data.arr.static.map((e)=>{
        return param.get("type")==="healthdrink"||param.get("type")==="tea"||param.get("type")==="milk"||param.get("type")==="drinks"?{...e,bever:e.bever.map((a)=>{
          return a.type===param.get("type")?{...a,card:arr1}:a
          
          })
      }:
    param.get("type")==="furit"||param.get("type")==="vegetable"||param.get("type")==="herbs"||param.get("type")==="cuts"?{...e,furit:e.furit.map((a)=>{
     return a.type===param.get("type")?{...a,card:arr1}:a
          
          })
      }:
      param.get("type")==="chaisnack"||param.get("type")==="moringsnack"||param.get("type")==="sweets"||param.get("type")==="pasta"?
    {...e,snack:e.snack.map((a)=>{
        return a.type===param.get("type")?{...a,card:arr1}:a
          
          })
      }:""
      })
    
    console.log(y)
    setnor(y)
    }
    const priceselect=(name)=>{
        console.log(name);
        state.data.arr.static.map((e)=>{
            return param.get("type")==="healthdrink"||param.get("type")==="tea"||param.get("type")==="milk"||param.get("type")==="drinks"?{...e,bever:e.bever.map((a)=>{
                return {...a,price:a.price.map((b)=>{
                    return b===name?pricesel=b:""
                })
            }
        })
    }:param.get("type")==="furit"||param.get("type")==="vegetable"||param.get("type")==="herbs"||param.get("type")==="cuts"?{...e,furit:e.furit.map((a)=>{
        return {...a,price:a.price.map((b)=>{
            return b===name?pricesel=b:""
        })
    }
    })
    }:param.get("type")==="chaisnack"||param.get("type")==="moringsnack"||param.get("type")==="sweets"||param.get("type")==="pasta"?{...e,snack:e.snack.map((a)=>{
        return {...a,price:a.price.map((b)=>{
            return b===name?pricesel=b:""
        })
    }
    })
    }:""
    })
    console.log(pricename);
    pricename.push(pricesel)
    setpricename(pricename)
    display1()
    }
    const display1=()=>{
        var arr1=[]
        state.data.arr.static.map((e)=>{
      return param.get("type")==="healthdrink"||param.get("type")==="tea"||param.get("type")==="milk"||param.get("type")==="drinks"?
      {...e,bever:e.bever.map((a)=>{
        return a.type===param.get("type")?{...a,card:a.card.map((c)=>{
           return  pricename.map((br)=>{
            console.log(br)
                return br==="Less than Rs 20"?c.card_price<20?arr1.push(c):""
                :br==="Rs 21 to Rs 50 "?c.card_price>20 &&c.card_price<=50?arr1.push(c):""
                :br==="Rs 51 to Rs 100"?c.card_price>50 &&c.card_price<=100?arr1.push(c):""
                :br==="Rs 101 to Rs 200"?c.card_price>100 &&c.card_price<=200?arr1.push(c):""
                :br==="Rs 201 to Rs 500"?c.card_price>200 &&c.card_price<=500?arr1.push(c):""
                :br==="More than Rs 500"?c.card_price>500?arr1.push(c):"":"hello"

                
            })
        
        })
    }:a
    })
    }:
    param.get("type")==="furit"||param.get("type")==="vegetable"||param.get("type")==="herbs"||param.get("type")==="cuts"? 
    {...e,furit:e.furit.map((a)=>{
        return a.type===param.get("type")?{...a,card:a.card.map((c)=>{
           return  pricename.map((br)=>{
                return br==="Less than Rs 20"?c.card_price<20?arr1.push(c):""
                :br==="Rs 21 to Rs 50 "?c.card_price>20 &&c.card_price<=50?arr1.push(c):""
                :br==="Rs 51 to Rs 100"?c.card_price>50 &&c.card_price<=100?arr1.push(c):""
                :br==="Rs 101 to Rs 200"?c.card_price>100 &&c.card_price<=200?arr1.push(c):""
                :br==="Rs 201 to Rs 500"?c.card_price>200 &&c.card_price<=500?arr1.push(c):""
                :br==="More than Rs 500"?c.card_price>500?arr1.push(c):"":"hello"
            })
        
        })
    }:a
    })
    }:
    param.get("type")==="chaisnack"||param.get("type")==="moringsnack"||param.get("type")==="sweets"||param.get("type")==="pasta"?
    {...e,snack:e.snack.map((a)=>{
        return a.type===param.get("type")?{...a,card:a.card.map((c)=>{
           return  pricename.map((br)=>{
                return br==="Less than Rs 20"?c.card_price<20?arr1.push(c):""
                :br==="Rs 21 to Rs 50 "?c.card_price>20 &&c.card_price<=50?arr1.push(c):""
                :br==="Rs 51 to Rs 100"?c.card_price>50 &&c.card_price<=100?arr1.push(c):""
                :br==="Rs 101 to Rs 200"?c.card_price>100 &&c.card_price<=200?arr1.push(c):""
                :br==="Rs 201 to Rs 500"?c.card_price>200 &&c.card_price<=500?arr1.push(c):""
                :br==="More than Rs 500"?c.card_price>500?arr1.push(c):"":"hello"
            })
        
        })
    }:a})}:""})
    console.log(arr1);
    let y=state.data.arr.static.map((e)=>{
        return param.get("type")==="healthdrink"||param.get("type")==="tea"||param.get("type")==="milk"||param.get("type")==="drinks"?{...e,bever:e.bever.map((a)=>{
          return a.type===param.get("type")?{...a,card:arr1}:a
          
          })
      }:
    param.get("type")==="furit"||param.get("type")==="vegetable"||param.get("type")==="herbs"||param.get("type")==="cuts"?{...e,furit:e.furit.map((a)=>{
     return a.type===param.get("type")?{...a,card:arr1}:a
          
          })
      }:
      param.get("type")==="chaisnack"||param.get("type")==="moringsnack"||param.get("type")==="sweets"||param.get("type")==="pasta"?
    {...e,snack:e.snack.map((a)=>{
        return a.type===param.get("type")?{...a,card:arr1}:a
          
          })
      }:""
      })
    
    console.log(y)
    setnor(y)
    }
const brandselect=(name)=>{
    console.log(brandname);
    state.data.arr.static.map((e)=>{
        return param.get("type")==="healthdrink"||param.get("type")==="tea"||param.get("type")==="milk"||param.get("type")==="drinks"?{...e,bever:e.bever.map((a)=>{
            return {...a,card:a.card.map((b)=>{
                return b.card_fresho===name?brand=b.card_fresho:""
            })
        }
    })
}:param.get("type")==="furit"||param.get("type")==="vegetable"||param.get("type")==="herbs"||param.get("type")==="cuts"?{...e,furit:e.furit.map((a)=>{
    return {...a,card:a.card.map((b)=>{
        return b.card_fresho===name?brand=b.card_fresho:""
    })
}
})
}:param.get("type")==="chaisnack"||param.get("type")==="moringsnack"||param.get("type")==="sweets"||param.get("type")==="pasta"?{...e,snack:e.snack.map((a)=>{
    return {...a,card:a.card.map((b)=>{
        return b.card_fresho===name?brand=b.card_fresho:""
    })
}
})
}:""
})
console.log(brandname);
brandname.push(brand)
setbrand(brandname)
display()
}
const display=()=>{
    console.log(brandname)
    var arr1=[]
    state.data.arr.static.map((e)=>{
  return param.get("type")==="healthdrink"||param.get("type")==="tea"||param.get("type")==="milk"||param.get("type")==="drinks"?
  {...e,bever:e.bever.map((a)=>{
    return a.type===param.get("type")?{...a,card:a.card.map((c)=>{
       return  brandname.map((br)=>{
            return br===c.card_fresho?arr1.push(c):""
        })
    
    })
}:a
})
}:
param.get("type")==="furit"||param.get("type")==="vegetable"||param.get("type")==="herbs"||param.get("type")==="cuts"? 
{...e,furit:e.furit.map((a)=>{
    return a.type===param.get("type")?{...a,card:a.card.map((c)=>{
       return  brandname.map((br)=>{
            return br===c.card_fresho?arr1.push(c):""
        })
    
    })
}:a
})
}:
param.get("type")==="chaisnack"||param.get("type")==="moringsnack"||param.get("type")==="sweets"||param.get("type")==="pasta"?
{...e,snack:e.snack.map((a)=>{
    return a.type===param.get("type")?{...a,card:a.card.map((c)=>{
       return  brandname.map((br)=>{
            return br===c.card_fresho?arr1.push(c):""
        })
    
    })
}:a})}:""})
let y=state.data.arr.static.map((e)=>{
    return param.get("type")==="healthdrink"||param.get("type")==="tea"||param.get("type")==="milk"||param.get("type")==="drinks"?{...e,bever:e.bever.map((a)=>{
      return a.type===param.get("type")?{...a,card:arr1}:a
      
      })
  }:
param.get("type")==="furit"||param.get("type")==="vegetable"||param.get("type")==="herbs"||param.get("type")==="cuts"?{...e,furit:e.furit.map((a)=>{
 return a.type===param.get("type")?{...a,card:arr1}:a
      
      })
  }:
  param.get("type")==="chaisnack"||param.get("type")==="moringsnack"||param.get("type")==="sweets"||param.get("type")==="pasta"?
{...e,snack:e.snack.map((a)=>{
    return a.type===param.get("type")?{...a,card:arr1}:a
      
      })
  }:""
  })

console.log(y)
setnor(y)
}
let [btnbool,setbtnboo1]=useState(false)
const filter=()=>{
    setbtnboo1(!btnbool)
    console.log(btnbool);
}

const add=(id)=>{
 let h= state.data.arr.static.map((v)=>{
        return {...v,furit:v.furit.map((e)=>{
            return {...e,card:e.card.map((x)=>{
                return x.id===id?x.iscart===false?{...x,iscart:true}:{...x,iscart:false}:x
            })}
        })}
   })
   console.log(h);
   dispatch((handleprice(h)))
}
const furitinc=(id)=>{
   let fi= state.data.arr.static.map((v)=>{
        return {...v,furit:v.furit.map((e)=>{
            return {...e,card:e.card.map((x)=>{
                return x.id===id?{...x,count:x.count+1}:x
            })}
        })}
   })
   console.log(fi);
   dispatch((handleprice(fi)))
}
const furitdec=(id)=>{
   let fd= state.data.arr.static.map((v)=>{
        return {...v,furit:v.furit.map((e)=>{
            return {...e,card:e.card.map((x)=>{
                return x.id===id?x.count>1?{...x,count:x.count-1}:{...x,iscart:false}:x
            })}
        })}
   })
   console.log(fd);
   dispatch((handleprice(fd)))
}
const beveradd=(id)=>{
  let ba =state.data.arr.static.map((v)=>{
        return{...v,bever:v.bever.map((e)=>{
            return {...e,card:e.card.map((x)=>{
                return x.id===id?x.iscart===false?{...x,iscart:true}:{...x,iscart:false}:x
            })}
        })}
    })
    console.log(ba);
   dispatch((handleprice(ba)))
}
const beverinc=(id)=>{
   let bi= state.data.arr.static.map((v)=>{
        return{...v,bever:v.bever.map((e)=>{
            return {...e,card:e.card.map((x)=>{
                return x.id===id?{...x,count:x.count+1}:x
            })}
        })}
    })
    console.log(bi);
   dispatch((handleprice(bi)))
}
const beverdec=(id)=>{
   let bd= state.data.arr.static.map((v)=>{
        return{...v,bever:v.bever.map((e)=>{
            return {...e,card:e.card.map((x)=>{
                return x.id===id?x.count>1?{...x,count:x.count-1}:{...x,iscart:false}:x
            })}
        })}
    })
    console.log(bd);
   dispatch((handleprice(bd)))
}
const snackadd=(id)=>{
  let sa= state.data.arr.static.map((v)=>{
        return {...v,snack:v.snack.map((e)=>{
            return {...e,card:e.card.map((x)=>{
                return x.id===id?x.iscart===false?{...x,iscart:true}:{...x,iscart:false}:x
            })}
        })}
    })
    console.log(sa);
   dispatch((handleprice(sa)))
}
const snackinc=(id)=>{
  let si= state.data.arr.static.map((v)=>{
        return {...v,snack:v.snack.map((e)=>{
            return {...e,card:e.card.map((x)=>{
                return x.id===id?{...x,count:x.count+1}:x
            })}
        })}
    })
    console.log(si);
    dispatch((handleprice(si)))
}
const snackdec=(id)=>{
  let sd= state.data.arr.static.map((v)=>{
        return {...v,snack:v.snack.map((e)=>{
            return {...e,card:e.card.map((x)=>{
                return x.id===id?x.count>1?{...x,count:x.count-1}:{...x,iscart:false}:x
            })}
        })}
    })
    console.log(sd);
    dispatch((handleprice(sd)))
}

return( 
        <div>
            <div className="container">
                {
                   normalarr.map((v,i)=>{
                    return <div key={i}>
                            <div>
                                {
                                    v.furit.map((e)=>{
                                        return e.type===param.get("type")?
                                            <div className="relavent-header-row">
                                                <div className="relavent-filter">
                                                <button className="relavent-filter-btn" onClick={filter}>Filter</button>
                                                {
                                                    btnbool?<div className="relavent-header-col">
                                                    <div>
                                                        <h4>Brand</h4>
                                                    <div>
                                                    <ul>
                                                    {e.brand.map((a)=>{
                                                            return  <li><input type="checkbox" onClick={()=>brandselect(a)} className="relavent-check"/>{a}</li>
                                                    })}
                                                    </ul>
                                                    </div>
                                                </div>
                                                <div> 
                                                    <h4>Price</h4>
                                                    <ul>
                                                        {
                                                            e.price.map((z)=>{
                                                               return <li><input type="checkbox" onClick={()=>priceselect(z)} className="relavent-check"/>{z}</li>
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4>Discount</h4>
                                                    <ul>
                                                        {
                                                            e.discount.map((c)=>{
                                                              return <li><input type="checkbox" onClick={()=>discountselect(c)}  className="relavent-check"/>{c}</li>
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                                </div>:""
                                                }
                                                
                                                </div>
                                            
                                            <div className="relavent-header-col1">
                                                <div>
                                                    <h4>Brand</h4>
                                                <div>
                                                <ul>
                                                {e.brand.map((a)=>{
                                                        return  <li><input type="checkbox" onClick={()=>brandselect(a)} className="relavent-check"/>{a}</li>
                                                })}
                                                </ul>
                                                </div>
                                            </div>
                                            <div> 
                                                <h4>Price</h4>
                                                <ul>
                                                    {
                                                        e.price.map((z)=>{
                                                           return <li><input type="checkbox"  onClick={()=>priceselect(z)} className="relavent-check"/>{z}</li>
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                            <div>
                                                <h4>Discount</h4>
                                                <ul>
                                                    {
                                                        e.discount.map((c)=>{
                                                          return <li><input type="checkbox" onClick={()=>discountselect(c)} className="relavent-check"/>{c}</li>
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                            </div>
                                            
                                            <div className="relavent-header-col2">
                                            <div className="relavent-row">
                                                {
                                                    e.card.map((a)=>{
                                                        return(
                                                            <div className="relavent-col">
                                                                <div className="relavent-card">
                                                                    <div className="relavent-img">
                                                                    <img src={a.card_img} alt="loading"/>
                                                                    </div>
                                                                    <div>
                                                                        <small>{a.card_fresho}</small>
                                                                        <h4>{a.card_name}</h4>
                                                                        <div className="relavent-input">
                                                                        <select>
                                                                            <option value={a.card_kg}>{a.card_kg}</option>
                                                                        </select>
                                                                        </div>
                                                                        <h4>&#8377;{a.card_price}</h4>
                                                                        <div className="relavent-add">
                                                                            <div className="relavent-save">
                                                                                <BsBookmark className="rel-save"/>
                                                                            </div>
                                                                            <div className="relavent-btn">
                                                                                {
                                                                                  a.iscart===true?<div className="relavent-cart-inc"><button onClick={()=>furitdec(a.id)}>-</button><p>{a.count}</p><button onClick={()=>furitinc(a.id)}>+</button></div>:
                                                                                  <button  onClick={()=>add(a.id)}>Add</button>  
                                                                                }
                                                                               
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        </div>:""
                                    })
                                }
                            </div>
                            
                            <div>
                                {
                                    v.bever.map((b)=>{
                                        return b.type===param.get("type")?
                                            <div className="relavent-header-row">
                                                <div className="relavent-filter">
                                                    <button className="relavent-filter-btn" onClick={filter}>Filter</button>
                                                    {
                                                        btnbool?<div className="relavent-header-col">
                                                        <div>
                                                            <h4>Brand</h4>
                                                        <div>
                                                        <ul>
                                                        {b.brand.map((a)=>{
                                                                return  <li><input type="checkbox" onClick={()=>brandselect(a)} className="relavent-check"/>{a}</li>
                                                            })}
                                                            
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4>Price</h4>
                                                        <ul>
                                                            {
                                                                b.price.map((v)=>{
                                                                   return <li><input type="checkbox" onClick={()=>priceselect(v)} className="relavent-check"/>{v}</li>
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4>Discount</h4>
                                                        <ul>
                                                            {
                                                                b.discount.map((c)=>{
                                                                   return <li><input type="checkbox" onClick={()=>discountselect(c)} className="relavent-check"/>{c}</li>
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                    </div>:""
                                                    }
                                                    
                                                </div>
                                                
                                                <div className="relavent-header-col1">
                                                <div>
                                                    <h4>Brand</h4>
                                                <div>
                                                <ul>
                                                {b.brand.map((a)=>{
                                                        return  <li><input type="checkbox" onClick={()=>brandselect(a)} className="relavent-check"/>{a}</li>
                                                    })}
                                                    
                                                </ul>
                                                </div>
                                            </div>
                                            <div>
                                                <h4>Price</h4>
                                                <ul>
                                                    {
                                                        b.price.map((v)=>{
                                                           return <li><input type="checkbox" onClick={()=>priceselect(v)} className="relavent-check"/>{v}</li>
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                            <div>
                                                <h4>Discount</h4>
                                                <ul>
                                                    {
                                                        b.discount.map((c)=>{
                                                           return <li><input type="checkbox" onClick={()=>discountselect(c)} className="relavent-check"/>{c}</li>
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                            </div>
                                            <div className="relavent-header-col2">
                                            <div className="relavent-row">
                                                {
                                                    b.card.map((a)=>{
                                                        return(
                                                            
                                                            <div className="relavent-col">
                                                                <div className="relavent-card">
                                                                    <div className="relavent-img">
                                                                        <img src={a.card_img} alt="loading"/>
                                                                    </div>
                                                                    <div>
                                                                        <small>{a.card_fresho}</small>
                                                                        <h4>{a.card_name}</h4>
                                                                        <div className="relavent-input">
                                                                            <select>
                                                                                <option value={a.card_kg}>{a.card_kg}</option>
                                                                            </select>
                                                                        </div>
                                                                        <h4>&#8377;{a.card_price}</h4>
                                                                        <div className="relavent-add">
                                                                            <div className="relavent-save">
                                                                                <BsBookmark className="rel-save"/>
                                                                            </div>
                                                                            <div className="relavent-btn">
                                                                            {
                                                                                  a.iscart===true?<div className="relavent-cart-inc"><button onClick={()=>beverdec(a.id)}>-</button><p>{a.count}</p><button onClick={()=>beverinc(a.id)}>+</button></div>:
                                                                                  <button onClick={()=>beveradd(a.id)}>Add</button> 
                                                                                }
                                                                                 
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            </div>
                                        </div>:""
                                    })
                                }
                            </div>
                            <div>
                                {
                                    v.snack.map((c)=>{
                                        return c.type===param.get("type")?
                                            <div className="relavent-header-row">
                                                <div className="relavent-filter">
                                                    <button className="relavent-filter-btn" onClick={filter}>Filter</button>
                                                    {
                                                        btnbool?<div className="relavent-header-col">
                                                        <div>
                                                            <h4>Brand</h4>
                                                        <div>
                                                        <ul>
                                                        {c.brand.map((a)=>{
                                                                return  <li><input type="checkbox" onClick={()=>brandselect(a)} className="relavent-check"/>{a}</li>
                                                            })}
                                                            
                                                        </ul>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4>Price</h4>
                                                        <ul>
                                                            {
                                                                c.price.map((v)=>{
                                                                   return <li><input type="checkbox" onClick={()=>priceselect(v)} className="relavent-check"/>{v}</li>
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4>Discount</h4>
                                                        <ul>
                                                            {
                                                                c.discount.map((c)=>{
                                                                   return <li><input type="checkbox" onClick={()=>discountselect(c)} className="relavent-check"/>{c}</li>
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                    </div>:""
                                                    }
                                                    
                                                </div>
                                               
                                                <div className="relavent-header-col1">
                                                <div>
                                                    <h4>Brand</h4>
                                                <div>
                                                <ul>
                                                {c.brand.map((a)=>{
                                                        return  <li><input type="checkbox" onClick={()=>brandselect(a)} className="relavent-check"/>{a}</li>
                                                    })}
                                                    
                                                </ul>
                                                </div>
                                            </div>
                                            <div>
                                                <h4>Price</h4>
                                                <ul>
                                                    {
                                                        c.price.map((v)=>{
                                                           return <li><input type="checkbox" onClick={()=>priceselect(v)} className="relavent-check"/>{v}</li>
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                            <div>
                                                <h4>Discount</h4>
                                                <ul>
                                                    {
                                                        c.discount.map((c)=>{
                                                           return <li><input type="checkbox" onClick={()=>discountselect(c)} className="relavent-check"/>{c}</li>
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                            </div>
                                            <div className="relavent-header-col2">
                                            <div className="relavent-row">
                                                {
                                                    c.card.map((a)=>{
                                                        return(
                                                            <div className="relavent-col">
                                                                <div className="relavent-card">
                                                                    <div className="relavent-img">
                                                                        <img src={a.card_img} alt="loading"/>
                                                                    </div>
                                                                    <div>
                                                                        <small>{a.card_fresho}</small>
                                                                        <h4>{a.card_name}</h4>
                                                                        <div className="relavent-input">
                                                                        <select>
                                                                            <option value={a.card_kg}>{a.card_kg}</option>
                                                                        </select>
                                                                        </div>
                                                                        <h4>&#8377;{a.card_price}</h4>
                                                                        <div className="relavent-add">
                                                                            <div className="relavent-save">
                                                                                <BsBookmark className="rel-save"/>
                                                                            </div>
                                                                            <div className="relavent-btn">
                                                                            {
                                                                                  a.iscart===true?<div className="relavent-cart-inc"><button onClick={()=>snackdec(a.id)}>-</button><p>{a.count}</p><button onClick={()=>snackinc(a.id)}>+</button></div>:
                                                                                  <button onClick={()=>snackadd(a.id)}>Add</button>
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            </div>
                                        </div>:""
                                    })
                                }
                            </div>
                    </div>
                   }) 
                }
            </div>
        </div>
    )


}
        
export default Relaventdetail