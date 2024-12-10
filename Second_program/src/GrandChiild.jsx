
export default function GrandChiild(props) {

  // desturing in props
  let {Fname,Fage,FId}=props;
  return (
    <div>
        <h1>Name of this student {Fname}</h1>
        <h1>Student Age {Fage}</h1>
    <h1>student id{FId}</h1>
    </div>
  )
}
