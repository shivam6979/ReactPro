import React, {useState, useEffect} from "react";
import "./style.css";

// ===================== get Local Storage data .function start   ===========================
const getLocalData=()=>{
    const lists = localStorage.getItems("mytodolist")  // passing the key(mytodolist) inside
    if(lists){
        return JSON.parse(lists); //JSON.parse gives data in array formate
    }
    else{
        return [];
    }
};
const Todo =()=>{
    const [inputdata, setInputData] = useState("");
    const [items, setItems] = useState([getLocalData()]);// FOR SAVING DATA IN LOCAL STORAGE
    const [isEditItem, setIsEditItem]=useState(""); // 2:50:20
    const [toggleButton, setToggleButton] = useState(false);
// ===================== add items function start =====================================
const addItem=()=>{
    if(!inputdata){
        alert("Please fill the data");
    }
    // for edit the data not insert a new data
    else if(inputdata && toggleButton ){
        setItems.map((curElem)=>{
            if(curElem.id=== isEditItem){
                return {...curElem,name:inputdata};
            }
            return curElem;

        }
        );
        setInputData([])// set the null in the input field for edit
        setIsEditItem(null);
        setToggleButton(false);
    }
    else{
        const myNewInputData = {
            id:new Date().getTime().toString(),
            name:inputdata,
        }
        setItems([...items, myNewInputData]) // ...items for filling previous data & inputdata for new data
        setInputData("");
    }
}
// ===================== add items function ends =====================================

// ===================== edit items function start at 2: 47 ==========================
    const editItem = (index)=>{
        // find where you click, using js find method to find id in items
        const item_todo_edited = items.find((curElem)=>{
            return curElem.id ===index;
        })
        setInputData(item_todo_edited.name)// set the data in the input field for edit
        setIsEditItem(index);
        setToggleButton(true);


    }
// ===================== edit items function End =====================================

//{/* ===========================   deleteItem start ==========================================*/}
const deleteItem=(index)=>{
    const updatedItem = items.filter((curElem)=>{
        return curElem.id !== index;
    })
    setItems(updatedItem)
}
//{/* ===========================   deleteItem end  ==========================================*/}

// ============================   remove all button start  ==========================================
const removeAll =()=>{
    setItems([]);   // passing an empty array to make all element removed
}
// ============================   remove all button end  ==========================================

// ============================ store in local storage start  ==============================================
useEffect(()=>{
    localStorage.setItem("mytodolist",JSON.stringify(items)); // local storage works in key value pairs
},[items])//
// ============================ store in local storage end ==============================================

    return(
        <>
        <div className="main-div">
            <div className="child-div">
                <figure>
                    {/* <img src="" alt="" /> */}
                    <figcaption>Add your list Here</figcaption>
                </figure>
                <div className="addItems">
                    <input type="text" placeholder="✍ Add Items" className="form-control" value={inputdata} onChange={(event)=> setInputData(event.target.value)} ></input>
                    {/* change edit button to plus */}
                    {toggleButton ?(<i className="fa-solid fa-edit" onClick={addItem}></i>)
                    : (<i className="fa-solid fa-plus" onClick={addItem}></i>)}
                    </div>
                        {/* show our items */}
                            <div classname="showItems">
                                {
                                    items.map((curElem, index)=>{
                                        return(
                                        <div className="eachItem" key={index}>
                                            <h3>{curElem.name}</h3>
                                            <div className="todo-btn">
                                            <i className="fa-solid fa-edit" onClick={()=>editItem(curElem.id)}></i>
                                            <i className="fa-solid fa-trash" onClick={()=>deleteItem(curElem.id)}></i>
                                            </div>
                                        </div>
                                        );
                                    })}
                            </div>
{/* ================================   remove all button start ==========================================*/}
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
                           <span>CHECK LIST</span>
                    </button>
                    </div>
            </div>
        </div>
        </>
    )
}
export default Todo;

//  projects ends at 2:58 : 50