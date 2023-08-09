import { useEffect } from "react"
import axios from 'axios'

function TestApi() {
useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{
        console.log(res)
    }).catch(err => console.log(err));
}, []);
  return (
    <div>
      
    </div>
  )
}

export default TestApi
