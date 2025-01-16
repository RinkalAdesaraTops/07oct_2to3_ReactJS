import React, { useEffect, useState } from 'react'

const Lifecyclefunc = () => {
    const [color,setColor]=useState("red")
    useEffect(()=>{
        setTimeout(()=>{
            setColor("blue")
        },3000)
    })
  return (
    <div>
      <h3>Color is -- {color}</h3>
    </div>
  )
}

export default Lifecyclefunc
