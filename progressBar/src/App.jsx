import { useEffect, useState } from 'react'
import './App.css'
import ProgressBar from './components/ProgressBar'

function App() {
  const [value, setValue] = useState(0);

  useEffect(()=>{
    setInterval(()=>{
      setValue((value)=>value+1);
    },100)
  },[])

  return (
    <div className='container'>
      <span>Progress Bar</span>
      <ProgressBar value={value}/>
    </div>
  )
}

export default App
