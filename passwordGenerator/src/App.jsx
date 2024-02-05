import Checkbox from "./components/Checkbox"
import Slider from "./components/Slider"
import "./App.css"
import { options } from "../src/utils/data"

import { useState } from "react"
import useGeneratePassword from "./hooks/useGeneratePassword"

function App() {

  const { password, generatePassword, error} = useGeneratePassword();
  const [checkbox, setCheckbox] = useState(options);
  const [copy , setCopy] = useState(false);
  const [length, setLength] = useState(4);

  const handleCopy = ()=>{
    navigator.clipboard.writeText(password);
    setCopy(true);
    setInterval(() => {
      setCopy(false);
    }, 1000);
  }
  return (
    <div className="container">
     {password && <div className="password">
      <div>
        {password}
      </div>
      <button className="button" onClick={handleCopy}>
        {copy?"COPIED":"COPY"}
      </button>
     </div>}
      <Slider length={length} setLength={setLength}/>
      <div className="checkbox">
          {options.map((option,index)=>{
            return <Checkbox key={index} index={index} option={option} checkbox={checkbox} setCheckbox={setCheckbox}/>
          })}
      </div>
       {error && <div className="error">{error}</div>}
      <div className="strength">
        <div>Strength:</div>
        <div>poor</div>
      </div>

      <button onClick={()=>generatePassword(length,checkbox)} className="generateButton">GENERATE PASSWORD</button>
    </div>
  )
}

export default App
