import React, { useEffect, useState } from 'react'
import axios from 'axios'
const useApi = (url) => {
  const [data,setData] = useState([])
    useEffect(()=>{
        axios.get(url)
        .then((msg)=>{
            console.log(msg.data);
            setData(msg.data)
        })
    },[url])
    return [data]
}

export default useApi
