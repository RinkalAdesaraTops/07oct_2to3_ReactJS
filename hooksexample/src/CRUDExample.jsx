import React, { useCallback, useState } from 'react'
import Display from './Display'

const CRUDExample = () => {
    //name,age
    //save
    //onchange
    //display - table
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [data,setData] = useState([])
    const saveData= useCallback((e)=>{
        e.preventDefault()
        setData([
        
            ...data,
            {name:name,
                age:age
            }

        ])
    })
  return (
    <div>
      <form action="" onSubmit={saveData}>
        <label htmlFor="Name">Name:</label>
        <input type="text" name='name' id='name' value={name} onChange={(e)=>setName(e.target.value)} />
        <label htmlFor="">Age:</label>
        <input type="number" name='' id='' value={age} onChange={(e)=>setAge(e.target.value)} />
        <button>Submit</button>

      </form>
     <Display data={data}/>
    </div>
  )
}

export default CRUDExample
