import { useState } from "react";
import { options } from "../utils/data"
const Checkbox = ({option,index,checkbox,setCheckbox}) => {


  const updateCheckbox = (i)=>{
    const updatedCheckbox = [...checkbox];
    updatedCheckbox[i].state = !updatedCheckbox[i].state;
    setCheckbox(updatedCheckbox);

  }

  return (
    <div className="checkboxSingle">
      <input type="checkbox" checked={checkbox.state}  onChange={()=>updateCheckbox(index)}/>
      <label htmlFor="title">{option.title}</label>
    </div>
  )
}

export default Checkbox
