
import { useState } from 'react'
import './App.css'
import OtpInput from './components/OtpInput'
function App() {
  const [showOtpInput, setOtpInput] = useState(true);
  const [phoneNo,setPhoneNo] = useState("");
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(phoneNo.length === 10)
      setOtpInput(false);
    else{
      alert("Please enter a valid number");
    }
  }
  return (
    <div className='container'>
      {showOtpInput?<form onSubmit={handleSubmit}> <h1>Log in with Phone Number</h1>
      <input type="text"
        value={phoneNo}
        onChange={(e)=>setPhoneNo(e.target.value)} />
      <button>Submit</button></form>:<OtpInput phone={phoneNo} length={4}/>}
    </div>
  )
}

export default App
