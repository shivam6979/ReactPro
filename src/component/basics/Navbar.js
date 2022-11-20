import React from "react";
// excepting probs in Navbar 1 is filterItem, 2 is menuList
const Navbar=({filterItem, menuList})=>{
    return(
        <>
        <nav className="navbar">
       <div className="btn-group">

{/* ==================== Dry for buttons =======================*/}
        {menuList.map((curElem)=>{
            return (
                <button className="btn-group__item" onClick={()=>filterItem(curElem)}>
                {curElem}
              </button>
            )
        })}
{/*===================== repeated codes start waste code  ================================*/}
         {/* <button className="btn-group__item" onClick={()=>filterItem("breakfast")}>
           Breakfast
         </button>
         <button className="btn-group__item" onClick={()=>filterItem("lunch")}>
           Lunch
         </button>
         <button className="btn-group__item" onClick={()=>filterItem("evening")}>
           Evening
         </button>
         <button className="btn-group__item" onClick={()=>filterItem("dinner")}>
           Dinner
         </button> */}
         {/* <button className="btn-group__item" onClick={()=>setMenuData(Menu)}>
           All
         </button> */}
{/*===================== repeated codes ends  ================================*/}

       </div>

     </nav>
   </>
    );

}
export default Navbar;