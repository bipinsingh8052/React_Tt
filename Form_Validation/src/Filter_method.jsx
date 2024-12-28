
function Filter_method() {
    let arr= [2,3,4,5,6,7,8,9,0,33,22,44,2222,222]
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
    let filter =arr.filter((e)=>{return e>3})
    let real_data =filter.map((e,index)=>{return <h1 key={index}>{e}</h1>})
    console.log(filter)
  return (
    <>
      <div>
        <ul>
        {arr_data}
        </ul>
      </div>
      <div>
        data real
        {real_data}
      </div>
    </>
  )
}

export default Filter_method
