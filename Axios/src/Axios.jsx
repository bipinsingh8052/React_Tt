import { useEffect, useState } from "react"
import axios from 'axios'
function Axios() {
    let [apidata,setapidata]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
        .then(res=>{
            console.log(res)
            console.log(res.data);
            setapidata(res.data)
        })

        .catch
    },[])
  return (
    <>
    <ul>
            {/* <h1>All data</h1> */}
        {/* {
            apidata.map((e,index)=>{return(
                  <li key={index}>{e.name}</li>
                //  <li key={e.id}>{e.body}</li>
                )
                })
        } */}
    </ul>
    <table style={{border:"2px solid black"}} border="2px">
        <thead>
            <th>Id</th>
            <th>Email</th>
            <th>body</th>
            <th>Name</th>
        </thead>
    

        <tbody>
         {
            apidata.map((e,index)=>{return(
                <tr key={index}>
                  <td >{e.id}</td>
                  <td>{e.email}</td>
                  <td>{e.body}</td>
                  <td>{e.name}</td>
                  </tr>
                )
                })
        }
        </tbody>
    </table>
      
    </>
  )
}

export default Axios
