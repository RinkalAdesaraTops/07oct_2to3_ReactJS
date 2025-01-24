import { useEffect, useState } from "react"
import axios from "axios"
const useFetch = (url) => {
  const [userdata,setUserData] = useState([])
  useEffect(()=>{
        axios.get(url)
            .then((res)=>setUserData(res.data))
  },[url])
  return [userdata]
}
export default useFetch
