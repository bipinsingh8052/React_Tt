import { useEffect, useState } from "react"
import axios from 'axios'
export default function Fetch_data() {
    let [datainfo,setdatainfo]=useState([]);
    function myDel(id){
        axios.delete(`http://localhost:3000/all_data/${id}`)
        .then(re=>alert("your data is deleted"));
    }
    useEffect(()=>{
        axios.get("http://localhost:3000/all_data")
        .then(res=>{
            console.log(res)
            setdatainfo(res.data);

        })
    },[myDel])
    
  return (
    <>

      <div>
        <table border='2px' style={{border:"2px solid black"}}>
            <thead>
                <th>Name</th>
                <th>city</th>
                <th>contact</th>
                <th>id</th>
                <th>age</th>
                <th></th>
            </thead>
            <tbody>
                {/* {    datainfo.map((e)=>{
                      return (
                        <tr >
                            <td>{e.name}</td>
                            <td>{e.city}</td>
                            <td>{e.contact}</td>
                            <td>{e.id}</td>
                            <td>{e.age}</td>
                        </tr>
                }
                  ) */}
                {/* } */}
                {
                    datainfo.map((e,index)=>{
                        return( 
                        <tr key={index}>
                            <td>{e.name}</td>
                            <td>{e.city}</td>
                            <td>{e.contact}</td>
                            <td>{e.id}</td>
                            <td>{e.age}</td>
                            <td><button onClick={()=>myDel(e.id)}>Deleted</button></td>
                        </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
      </div>
    </>
  )
}
