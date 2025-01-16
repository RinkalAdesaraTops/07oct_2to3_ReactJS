import React, { useState } from 'react'

const CrudExample = () => {
    const [name,setName] = useState("")
    const [age,setAge] = useState("")
    const [id,setId] = useState("")
    const [data,setData] = useState([])
    const handleChange = (e)=>{
        // console.log("age is "+e.target.value);
        setAge(e.target.value)
    }  
    const saveData = (e)=>{
        e.preventDefault()
        if(id != ''){
            //update
            let res = data.map((i,index)=>{
                if(index==id){
                    i.name = name
                    i.age = age
                }
                return i
            })
            setData(res)
        } else {
            //insert
            setData([
                ...data,
                {
                    name:name,
                    age:age
                }
            ])
        }
        
        setName("")
        setAge("")
        setId("")
    } 
    const editData = (id)=>{
        let res = data.find((i,index)=>{
                return index==id
        })
       setName(res.name)
       setAge(res.age)
       setId(id)
    }
    const delData = (id)=>{
        let res = data.filter((i,index)=>{
           return index!=id
        })
        setData(res)
    }
  return (
    <div>
      <form action="#" method='post' name='frm' onSubmit={saveData}>
        <label htmlFor="">Name:</label>
        <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)}/><br /><br />
        <label htmlFor="">Age:</label> 
        <input type="number" name="age" id="age" value={age} onChange={handleChange}/><br /><br />
        <input type="submit" name="save" id="save" value="Save" /><br /><br />
      </form>
      <br /><br />
      <table border={'2'}>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((i,index)=>{
                    return (
                        <tr>
                            <td>{index+1}</td>
                            <td>{i.name}</td>
                            <td>{i.age}</td>
                            <td>
                            <button onClick={()=>editData(index)}>Edit</button>
                            <button onClick={()=>delData(index)}>Delete</button>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default CrudExample
