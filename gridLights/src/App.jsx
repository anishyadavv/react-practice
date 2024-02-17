import Box from './components/Box'
import './App.css'
import { useState } from 'react'

function App() {
  const [order,setOrder] = useState([]);
  const [isDeactivating, setDeactivating] = useState(false);

  const config = [
    [1,1,1],
    [1,0,1],
    [1,1,1]
  ]

  const handleLights = (index)=>{
      const newOrder = [...order,index];
      setOrder(newOrder);
      if(newOrder.length === config.flat(1).filter(Boolean).length){
        deactivate();
        setDeactivating(true);
      }
  }

  const deactivate = ()=>{

    const timer = setInterval(()=>{
      setOrder(order=>{
        const newOrder = [...order]
        newOrder.pop();

        if(newOrder.length === 0){
          clearInterval(timer);
        }

        return newOrder;
      })
    },300);
  }

  return (
    <>
    <div className='container'>
      {config.flat(1).map((box,index) =>{
        return <Box
                  key={index}
                  value={box}
                  filled={order.includes(index)}
                  onClick = {()=>handleLights(index)}
                  isDisabled={order.includes(index)||isDeactivating}
                />
      })}
    </div>
    </>
  )
}

export default App
