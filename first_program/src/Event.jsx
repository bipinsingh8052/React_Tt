export default function Event() {
    function click(){
        alert("Hello to cliked it now");
    }
    function DoubleClick(){
        alert("here iam double click button")
    }
    function mouseenter(){
        prompt("Mouse enter");
    }
    function mouseleave(){
        prompt("mouse leave");
    }
    function mousemove(){
        prompt("killer mouse move");
    }
    function mouseout(){
        prompt("mouse out");
    }
    

  return (
    <div>
      
      <button style={{backgroundColor:"RED", color:"white" ,margin:"10px"}} onClick={click}>Click me</button>
      <button style={{backgroundColor:"ORANGE", color:"white", margin:"10px"}} onDoubleClick={DoubleClick} > Double click</button>
      <button  style={{backgroundColor:"pink", color:"white", margin:"10px"}} onMouseEnter={mouseenter}>mouse enter</button>
      <button style={{backgroundColor:"blue" ,color:"white", margin:"10px"}} onMouseLeave={mouseleave}>mouse leave</button>
      <button style={{backgroundColor:"mango" ,color:"white", margin:"10px"}} onMouseMove={mousemove}>mouse move</button>
      <button style={{backgroundColor:"black" ,color:"white", margin:"10px"}} onMouseOut={mouseout}>mouse out </button>
    </div>
  )
}

 