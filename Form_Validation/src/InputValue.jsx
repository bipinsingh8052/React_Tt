import { useState } from "react";
function InputValue() {
    const [Input,setInput]=useState("");
    const [SecondInput,setSecondInput]=useState("");
    const [In,setIn]=useState("")
    const [t,sett]=useState(false)

      function InputValue(event){
          setInput(event.target.value);
      }
      function SecondInputvalue(event){
        setSecondInput(event.target.value);
      }



      function Submit(){
        
        console.log(In);
        if(In==""){
            console.log(false)
            sett(false);
        }
        else{
            console.log(true)
            // return true
            sett(true);

        }
      }
      function INputValueBtn(event){
        setIn(event.target.value);
      }


    return (
        <>
             <div>
        <h1>This is your name</h1>
          <h1 style={{fontSize:"30px"}}>{Input}</h1>
         <input type="text" placeholder="Enter the Name" onChange={InputValue} />
         <p>Enter the Surname</p>
         <h1>{SecondInput}</h1>
         <input type="text" placeholder="Enter the surname name"  onChange={SecondInputvalue}/>
       
      </div>
      <div>
        {(In == "")?<h1>{In}</h1>:"para"}
        <input type="text"  placeholder="Enter the value" onChange={INputValueBtn} />

        <button onClick={Submit}>Submit</button>
      </div>
      </>
 
  )
}

export default InputValue
