import { useState } from 'react'
import './App.css'
import Cell from './components/Cell'
function App() {
  const [id, setId] = useState();
  const data = [
    {
      text:"hello"
    },
    {
      text:" "
    },
    {
      text:"bye"
    },
    {
      text:"what"
    },
    {
      text:" "
    },
    {
      text:""
    },
    {
      text:""
    },
    {
      text:""
    },
    {
      text:""
    },
    {
      text:""
    }
  ]

  const handleClick = (e)=>{
    const cells = document.getElementsByClassName("cell");
    Array.from(cells).forEach(cell=>cell.classList.remove("selected"));
    const cell = e.target;
    setId(cell.getAttribute("id"));
    cell.classList.toggle("selected");
  }

  const handleDoubleClick = (e)=>{
    const cell = e.target;
    const cells = document.getElementsByClassName("cell");
    Array.from(cells).forEach(cell=>cell.removeAttribute("contentEditable"));
    cell.setAttribute("contentEditable","true");
  }

  const handleColor = (color)=>{
    const cell= document.getElementById(id);
    cell.style.backgroundColor = color;
  }
  return (
    <>
      <h1>Spread Sheet</h1>
      <div>
        <button onClick={()=>handleColor("red")}>Change to Red</button>
        <button onClick={()=>handleColor("yellow")}>Change to Yellow</button>
        <button onClick={()=>handleColor("green")}>Change to Green</button>
        <button onClick={()=>handleColor("blue")}>Change to Blue</button>
      </div>
      <div className='cells'>
        {data.map((cell,index)=>{
          return <Cell key={index} data={cell.text} id={index} onSingleClick={handleClick} handleDoubleClick={handleDoubleClick}/>
        })}
      </div>
    </>
  )
}

export default App
