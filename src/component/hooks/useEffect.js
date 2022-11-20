//  for advanced react
import React,{useState, useEffect} from "react";
import "./style.css";
const UseEffect = ()=>{
    const initialData =0;
const [myNum,setMyNum ]=useState(initialData) // set my num is an updated function

useEffect(()=>{
    document.title=`Chats(${myNum})`
}); // using array dependencies []

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
            </div>
        </>
    )
}
export default UseEffect