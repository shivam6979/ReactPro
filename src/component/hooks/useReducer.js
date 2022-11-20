//  for advanced react
import React, {useReducer} from "react";
import "./style.css";

const reducer = (state, action)=>{
    if(action.type==="INCR"){
        state=state+1
    }
     if(state>0 && action.type==="DECR"){
        state=state-1
    }
    return state
};
const UseReducer = ()=>{
    const initialData =0;
// const [myNum,setMyNum ]=React.useState(initialData) // set my num is an updated function

// dispatch used to triger the reducer function
const [state, dispatch]=useReducer(reducer, initialData);

    return (

        <>
            <div className="center_div">
                <p>{state}</p>
                {/* increase the value ofmyNum while anyone click on INCR */}
                <div className="button2" onClick={()=>dispatch({type:"INCR"})}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                <div className="button2" onClick={()=>dispatch({type:"DECR"})}>
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
export default UseReducer