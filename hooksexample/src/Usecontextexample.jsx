import React, { createContext, useContext } from 'react'
const Userdata = createContext()
const Usecontextexample = ({name}) => {
  return (
    <div>
      <h3>Usecontext Example</h3>
      <h4>Name is -- {name}</h4>
      <Userdata.Provider value={name}>
      <Component2 />
      </Userdata.Provider>
    </div>
  )
}
const Component2 = ()=>{
 return (
    <div>
        <h3>Component 2 called..</h3>
        <Component3 />

    </div>
 )   
}
const Component3 = ()=>{
    return (
       <div>
           <h3>Component 3 called..</h3>
           <Component4  />
   
       </div>
    )   
   }
   const Component4 = ()=>{
    let name = useContext(Userdata)
    return (
       <div>
           <h3>Component 4 called..</h3>
           <h4>Name is -- {name}</h4>   
       </div>
    )   
   }

export default Usecontextexample
