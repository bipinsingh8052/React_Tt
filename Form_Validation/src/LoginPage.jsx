import { useEffect, useState } from "react"
import First_main_page from "./First_main_page";

function LoginPage() {
    let [input,setinput]=useState({
        Username:"",
        Password:""
    })
    let [Data,setData]=useState(null)
    let [stautus ,setStatus]=useState(false);
    function Inputvalue(e){
        let {name,value}=e.target
        setinput({
            ...input,
            [name]:value
        })
    }


    function submitform(e){
        e.preventDefault();
        // let a=JSON.parse(localStorage.getItem("react"));
        // console.log(a)
        // let email=a.Email;
        // let pass=a.password;
        console.log(Data.Email,Data.password)
        console.log(input.Username)
        if(input.Username== ""){
           alert("given the input is currect!!!");
        }
        else if(input.Username === Data.Email){
            console.log("matching on this ")
            alert(" not matching the email");
        }
        else if(input.Password === ""){
            alert("3456754");
        }
        else if(input.Password=== Data.password){
            alert("given the password it is this ");
        }
        else{
            setStatus(true)
        }
    }

useEffect(()=>{
    let a =JSON.parse( localStorage.getItem("react"))
    setData(a);

},[])

    if(stautus){
        return <First_main_page/>
    }
    // useEffect(()=>{
    //     let a= JSON.parse(localStorage.getItem("react"));
    //     setData(a)
    // },[])


  return (
    <>
     <div>
        <form onSubmit={submitform}>
            <label htmlFor="">UserName</label>
            <input type="email" value={input.Username} name="Username" placeholder="Enter the Email " onChange={Inputvalue}/>
            <br /><br />
            <label htmlFor="">Password</label>
            <input type="password" value={input.Password} name="Password" placeholder="Enter the password" onChange={Inputvalue} />
            <br /><br />
            <button type="submit">Submit</button>
        </form>
        </div> 
    </>
  )
}

export default LoginPage
