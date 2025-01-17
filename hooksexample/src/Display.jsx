import React, { memo } from 'react'

const Display = ({data}) => {
    console.log("display component called..");
    
  return (
    <div>
       <table border={2}>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((i,index)=>{
                    return(
                        <tr>
                        <td>{index+1}</td>
                        <td>{i.name}</td>
                        <td>{i.age}</td>
                        
                        </tr>
                    )
                })
            }
        
        </tbody>
      </table>
    </div>
  )
}

export default memo(Display)
