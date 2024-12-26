import { useState } from "react"

function From_Validation() {
    const [Input,setInput]=useState({
        username:'',
        address:'',
        Email:'',
        no:'',
        password:''
    })
    function Inputbtn(event){
        const {name,value}=event.target
        setInput({
            ...Input,
            [name]:value
        })
        // console.log(Input.name,I)
        // console.log(event);
        
    }
    function InputValue(e){
        e.preventDefault();
        console.log(Input);
    }
  return (
    <>
    <form onSubmit={InputValue}>
        <label htmlFor="">Name</label>
        <input type="text" name="username" value={Input.username} placeholder="Enter the name" onChange={Inputbtn}/>
        <br />
        <br />
        <label htmlFor="">Address</label>
        <input type="text" name="address" value={Input.address} placeholder="Enter the address" onChange={Inputbtn} />
        <br />
        <br />
        <label htmlFor="">Email</label>
        <input type="email" name="Email" value={Input.Email} placeholder="Enter the name" onChange={Inputbtn}/>
        <br />
        <br />
        <label htmlFor="">number</label>
        <input type="tel" name="no" value={Input.no} placeholder="Enter the name" onChange={Inputbtn}/>
        <br />
        <br />
        <label htmlFor="">password</label>
        <input type="password" name="password" value={Input.password} placeholder="Enter the name" onChange={Inputbtn}/>
        <br />
        <br />
        <button type="submit" >Submit</button>
    </form>
      
    </>
  )
}

export default From_Validation
