import React,{useRef, useState} from 'react'

const Userefexample = () => {
    const [count, setCount] = useState(0)  
    let a = useRef(10)
    const addCounter = ()=>{
        setCount(count + 1)
        a.current = a.current+1
        console.log(a);      
    }
  return (
    <div>
      <h3>Use ref Example</h3>
      <button onClick={addCounter}>
          count is {count}
        </button>
        <h4>A is --- {a.current}</h4>
    </div>
  )
}

export default Userefexample
