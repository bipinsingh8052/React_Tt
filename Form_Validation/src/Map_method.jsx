// Key is given the unique in the array and by the help of key you can updated and delete the element 



function Map_method() {
    let ar=["bipins ",9088,"kumer","singh","ram"]
    let arr_of_object =[
        {
            name:"bipin ",
            age:89,
            year:1009
        },
        {
            name:"bipin ",
            age:89,
            year:1009
        },{
            name:"bipin ",
            age:89,
            year:1009
        },{
            name:"bipin ",
            age:89,
            year:1009
        },{
            name:"bipin ",
            age:89,
            year:1009
        },{
            name:"bipin ",
            age:89,
            year:1009
        },{
            name:"bipin ",
            age:89,
            year:1009
        }
    ]


    let arr_data =arr_of_object.map((e,index)=>{return <li key={index}><p>Name{e.name}</p>Age{e.age}Year{e.year}</li>});
    let data =ar.map((e,index)=>{return <li key={index}>{e}</li>})



    let find= arr_data.map((e)=>{return e.key==1})
    console.log(find);
    console.log(data);
  return (
    <>

    {/* you can also do it direced */}
    {ar.map((e,index)=>{return <h1 key={index}>{e}</h1>})}
    <ul>
        {data}
    </ul>
    <ul>
        <li>{data}</li>
    </ul>
      <ul>
        {arr_data}
      </ul>
    </>
  )
}

export default Map_method
