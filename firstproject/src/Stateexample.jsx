import React, { useState } from 'react'

const Stateexample = () => {
    const [name,setName] = useState("abc")
    const [age,setAge] = useState(25)
    const changeName = ()=>{
        setName("XYZ")
    }
  return (
    <div>
      <h3>State Example</h3>
      <h4>Name is -- {name}</h4>
      <button onClick={changeName}>Change Name</button>
      <h4>Age is -- {age}</h4>
      <button onClick={()=>setAge(31)}>Change Name</button>
    </div>
  )
}

export default Stateexample
