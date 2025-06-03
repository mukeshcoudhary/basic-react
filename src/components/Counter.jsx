import React, { useState } from 'react'



function Counter() {

  const [count,setCount]=useState(0);

  const incCount=()=>{
    setCount(count+1)

  }
  const decCount=()=>{
    setCount(count-1)

  }

  return (
    <div>
       <div className='container flex gap-3'>
        <button onClick={decCount}><h1>-</h1></button>
        <h1>{count}</h1>
         <button onClick={incCount}><h1>+</h1></button>
       </div>
    </div>
  )
}

export default Counter