import React from 'react';

import "./style.css"
import Menu from "./menuApi";
import MenuCard from "./menuCard"
import Navbar from "./Navbar" ;//import from Navbar.js
// ====================== making a component ========================
// new Set gives data in object so by putting whole code in [] make it array
const uniqueList =[...new Set( Menu.map((curElem)=>{
  return curElem.category;
})
),
"All",  // for getting all option in nav bar
];
console.log(uniqueList)

const Resturent =()=>{
//  useState Hook
  const [menuData, setMenuData]= React.useState(Menu);  // useState return an element of two element
  const [menuList,setMenuList] = React.useState(uniqueList)


    const filterItem =(category)=>{
  // for desplaying all
  if(category==="All"){
    setMenuData(Menu);
    return; //return is important
  }

      const updatedList=Menu.filter((curElem)=>{
        return curElem.category===category;
      });
      setMenuData(updatedList);
    }
    return(
      <>
{/* for nav bar */}
{/* passing probs = probs's name = {pass the value} */}
      <Navbar filterItem={filterItem} menuList={menuList}/>  {/* call Navbar component form Navbar.js*/}
      <MenuCard menuData = {menuData}/>
      </>
    )

  }

  export default Resturent