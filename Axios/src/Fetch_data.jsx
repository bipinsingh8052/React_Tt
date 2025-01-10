import { useEffect, useState } from "react"
import axios from 'axios'
export default function Fetch_data() {
    let [datainfo,setdatainfo]=useState([]);
    let [frmin,setfrmin]=useState({
      name: "",
      age: "",
      contact:"" ,
      city: ""
    })
      // Delete data by the help of id
    function myDel(id){
        axios.delete(`http://localhost:3000/all_data/${id}`)
        .then(re=>alert("your data is deleted"))
    }



    function inputfrom(e){
      let {name,value}=e.target;
      setfrmin({
        ...frmin,
        [name]:value
      })
    }

    // add the data in from that json
    function submitfrom(e){
      e.preventDefault();
      axios.post("http://localhost:3000/all_data",frmin)
      .then(res=>alert("Insert the data okkk"));
    }
    useEffect(()=>{
      // fetch data in the api
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
                {/*Add the data by the help of jsx  */}
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

<br /><br /><br />

      <form onSubmit={submitfrom}>
        <label htmlFor="">Name</label>
        <input type="text" placeholder="Enter the Name:" value={frmin.name} name="name" onChange={inputfrom} />
        <br /><br />
        <label htmlFor="">Age</label>
        <input type="text" placeholder="Enter the Age:"value={frmin.age} name="age" onChange={inputfrom} />
        <br /><br />
        <label htmlFor="">contact</label>
        <input type="text" placeholder="Enter the contact:" value={frmin.contact} name="contact" onChange={inputfrom} />
        <br /><br />

        <label htmlFor="">City</label>
        <input type="text" placeholder="Enter the City:" value={frmin.city} name="city" onChange={inputfrom} />
        <br /><br />
        <button type="submit">submit </button>
      </form>
    </>
  )
}
