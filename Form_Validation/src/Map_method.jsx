
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
    console.log(data);
  return (
    <>
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
