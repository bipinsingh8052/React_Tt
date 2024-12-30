import { useState } from "react"
import LoginPage from "./LoginPage";

function New_form() {
    let [input,Setinput]=useState({
        UserName:"",
        Address:"",
        No:"",
        Email:"",
        password:""
    })
    let [Status,setStatus]=useState(false)
    function inputvalue(e){
        let {name,value}=e.target;
        Setinput({
            ...input,
            [name]:value,
        })
        

    }
    function submit(e){
       
        if(input.UserName === ""){
            e.preventDefault();
            alert("fill it this Username filled")
        }
        if(input.UserName === ""){
            e.preventDefault();
            alert("fill it this Username filled")
        }
        // console.log(input);
       else{
        let a=localStorage.setItem("react",JSON.stringify(input));
        console.log(a);
        setStatus(true)
        e.preventDefault();
       }
    }
    if(Status){
        return <LoginPage/>
    }
  return (
    <>
    <form onSubmit={submit}>
        <label htmlFor="">Name</label>
        <input type="text" value={input.Username} placeholder="Enter the Name" name="UserName"  onChange={inputvalue}/>
        <br />
        <br />
        <label htmlFor="">Address</label>
        <input type="text" value={input.Address} placeholder="Enter the Address"  name="Address"  onChange={inputvalue}/>
        <br /><br />
        <label htmlFor="">Number</label>
        <input type="tel" value={input.No} placeholder="Enter the number" name="No" onChange={inputvalue} />
        <br />
        <br />
        <label htmlFor="">Email</label>
        <input type="email" value={input.Email} name="Email" placeholder="Enter the email" onChange={inputvalue} />
        <br /><br />
        <label htmlFor="">Password</label>
        <input type="password" value={input.password} name="password" placeholder="Enter the password" onChange={inputvalue} />
        <br /><br />
        <button type="submit">Submit</button>
    </form>
      
    </>
  )
}

export default New_form
