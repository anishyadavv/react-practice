import { useState } from "react"


const Slider = ({length,setLength}) => {
    
  return (
    <div className="slider">
      <div className="character">
        <div>charactar Length</div>
        <span>{length}</span>
      </div>
      <input type="range" min={0} max={20} value={length} onChange={(e)=>setLength(e.target.value)} />
    </div>
  )
}

export default Slider
