import { useEffect, useState } from "react"

const ProgressBar = ({value=0, onComplete = ()=>{}}) => {

    const [percent, setPercent] = useState(value);

    useEffect(()=>{
        setPercent(Math.min(100,Math.max(value,0)));
        if(value == 100){
            onComplete();
        }
    },[value])
  return (
    <div className="progressBar">
      <span style={{color:percent>49?'white':'black'}}>{percent}%</span>
      <div
      style={{transform:`scaleX(${percent/100})`,transformOrigin:'left'}}
      className="bar"
      aria-valuemin={0}
      aria-valuenow={percent}
      aria-valuemax={100}
      role="progressbar"
      >

      </div>
    </div>
  )
}

export default ProgressBar
