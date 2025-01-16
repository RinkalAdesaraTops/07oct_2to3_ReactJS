import React from 'react'

const Contextexample = ({name}) => {
  return (
    <div>
      <h3>Usecontext Example</h3>
      <h4>Name is -- {name}</h4>
      <Component2 name={name} />
    </div>
  )
}
const Component2 = ({name})=>{
 return (
    <div>
        <h3>Component 2 called..</h3>
        <Component3 name={name} />

    </div>
 )   
}
const Component3 = ({name})=>{
    return (
       <div>
           <h3>Component 3 called..</h3>
           <Component4 name={name} />
   
       </div>
    )   
   }
   const Component4 = ({name})=>{
    return (
       <div>
           <h3>Component 4 called..</h3>
           <h4>Name is -- {name}</h4>
   
       </div>
    )   
   }

export default Contextexample
