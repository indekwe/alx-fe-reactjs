import React from 'react'
import { useState } from 'react'
function Counter() {
    const [count, setCount] = useState(0)
    function increment(){
      setCount(count+1)
    }
    function reset(){
      setCount(count*0)
    }
    function decrement(){
      setCount(count-1)
    }
  return (
    <>
    <div>{count}</div>
    <button onClick={increment}>Increment</button>
    <button onClick={reset}>Reset</button>
    <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default Counter
