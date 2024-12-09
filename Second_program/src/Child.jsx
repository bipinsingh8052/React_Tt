import GrandChiild from "./GrandChiild"
export default function Child(props) {
    return (
      <div>
        <h1>{props.Name}</h1>
        <h2>{props.Age}</h2>
        <h3>{props.id}</h3>
        <GrandChiild Fname={props.Name} Fage={props.Age} FId={props.id} />
      </div>
    )
  }
   
