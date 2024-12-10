import GrandChiild from "./GrandChiild"
export default function Child({Name,Age,id}) {
    return (
      <div>
        <h1> first{Name}</h1>
        <h2>first{Age}</h2>
        <h3>first {id}</h3>
        <GrandChiild Fname={Name} Fage={Age} FId={id} />
      </div>
    )
  }
   
