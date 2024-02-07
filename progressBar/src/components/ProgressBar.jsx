import { useEffect, useState } from "react"

const ProgressBar = ({value=0}) => {

    const [percent, setPercent] = useState(value);

    useEffect(()=>{
        setPercent(Math.min(100,Math.max(value,0)));
    })
  return (
    <div className="progressBar">
      <span style={{color:percent>49?'white':'black'}}>{percent}%</span>
      <div
      style={{transform:`scaleX(${percent/100})`,transformOrigin:'left'}}
      className="bar">

      </div>
    </div>
  )
}

export default ProgressBar
