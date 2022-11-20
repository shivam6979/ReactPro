//  for advanced react
import React from "react";
import "./style.css";
const useState = ()=>{
    const initialData =0;
const [myNum,setMyNum ]=React.useState(initialData) // set my num is an updated function

    return (

        <>
            <div className="center_div">
                <p>{myNum}</p>
                {/* increase the value ofmyNum while anyone click on INCR */}
                <div className="button2" onClick={()=>setMyNum(myNum+1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                <div className="button2" onClick={()=>(myNum>0 ? setMyNum(myNum-1) : setMyNum(0))}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECR
                </div>
            </div>
        </>
    )
}
export default useState