import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCounter, minusCounter } from './redux/CounterAction'

const CounterComponent = () => {
    const count = useSelector((state)=>state.count)
    const dispatch = useDispatch()
    const minusFunc = ()=>{
        dispatch(minusCounter())
    }
  return (
    <div>
      <h3>Counter Example</h3>
      <h4>Count is -- {count}</h4>
        <button onClick={()=>dispatch(addCounter())}>Add</button>
        <button onClick={minusFunc}>Minus</button>
    </div>
  )
}

export default CounterComponent
