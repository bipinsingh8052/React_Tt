import  { useState } from 'react'

export default function IF_and_else() {

    let [para ,setPara]=useState(false);
    // let p=" ";

        // (para)?p=<h1>time is know it </h1>" : p=''
        // if(para){
        //     p=<h1>the su how your time</h1>
        // }
        // else{
        //     p=" "
        // }

  return (
    <>
     <div>
      <button onClick={()=>setPara(!para)}>Paragraph</button>
      {/* when you do it same task in one button then you use it like it  */}
      {/* <button onClick={()=>setPara(false)}> close</button> */}
    </div>


    {/* in line condection */}
  








    {/* {p} */}
    </>
   
  )
}




