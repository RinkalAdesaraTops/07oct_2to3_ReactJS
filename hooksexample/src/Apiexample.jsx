import React, { useEffect, useState } from 'react'
import axios from 'axios'
import useApi from './useApi'
import useFetch from './useFetch'
const Apiexample = () => {
    const [data,setData] = useState({
        name:"",
        age:""
    })
    const [id,setId]  = useState('')
    const [allData] = useFetch('http://localhost:3000/users')

    // const [alldata,setAllData] = useState([])
    const handleChange = (e)=>{
        const {name,value}=e.target
        setData({
            ...data,
            [name]:value
        })
    }   
    const saveData= (e)=>{
        e.preventDefault()
        if(id!=''){
            axios.put('http://localhost:3000/users/'+id,data)
            .then(()=>console.log("Data updated..."))
        } else {
            axios.post('http://localhost:3000/users',data)
            .then(()=>console.log("Data added..."))
        }
        
           
            disp()
            setId("")
            setData({
                name:"",
                age:""
            })
    }
    const disp = ()=>{
        setData(data)
        // axios.get('http://localhost:3000/users')
        // .then((msg)=>setAllData(msg.data))
     
    }
    useEffect(()=>{
        disp()
    },[])
    const editData = (id)=>{
        axios.patch("http://localhost:3000/users/"+id)
            .then((res)=>setData(res.data))
        setId(id)
    }
    const delData = (id)=>{
        axios.delete("http://localhost:3000/users/"+id)
            .then(()=>console.log("data deleted"))
        disp()
    }
  return (
    <div>
      <form action="#" method='post' onSubmit={saveData}>
        <label htmlFor="Name">Name:</label>
        <input type="text" name='name' id='name' value={data.name} onChange={handleChange} />
        <label htmlFor="">Age:</label>
        <input type="number" name='age' id='age' value={data.age} onChange={handleChange} />
        <button type='submit'>Submit</button>

      </form>
      <br /><br />
      <table border={2}>
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
                allData.map((i,index)=>{
                    return(
                        <tr>
                        <td>{i.id}</td>
                        <td>{i.name}</td>
                        <td>{i.age}</td>
                        <td>
                        <button onClick={()=>editData(i.id)}>Edit</button>
                        <button onClick={()=>delData(i.id)}>Delete</button>
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

export default Apiexample
