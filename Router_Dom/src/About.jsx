
import { useNavigate } from 'react-router-dom'

export default function About() {
    let nav=useNavigate()
    function contactpage(){
        nav('/contact')
    }
  return (<>
    <div>
      <h1>About page</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero eveniet optio ipsum assumenda, maxime dolore molestiae nam exercitationem consequuntur. Incidunt repellat voluptates sit laboriosam necessitatibus nostrum, beatae maxime? Aut, fuga!
      Earum consequuntur voluptate consectetur rerum hic nam in explicabo beatae quos harum iste velit tenetur est sint dolor aut error, dolorum minus nostrum quam quidem. Tenetur magni quibusdam earum quaerat!
      Magnam ad eligendi et, consequatur exercitationem saepe porro sed ratione? Veritatis voluptates, ducimus ipsum magni consectetur quos harum reiciendis amet maiores expedita quam vel possimus quia molestias consequuntur architecto numquam?
      Saepe placeat illum optio soluta, quo in, enim laborum a nesciunt dolore repellendus culpa explicabo doloribus nostrum, atque ullam quas ratione earum eligendi laboriosam? Odio illum pariatur odit sunt aspernatur!
      Hic sint ab impedit pariatur numquam mollitia neque quidem dolore ducimus asperiores iusto quisquam qui tempore voluptatem quam accusamus dolor, dolorum expedita, repellendus corrupti. Vero odio sunt distinctio veritatis numquam!
      Ab doloremque dolorum, laudantium sunt inventore consequuntur modi culpa fugiat, tempora exercitationem nesciunt a maxime magni earum iure unde quasi, optio odit adipisci assumenda suscipit libero id? Dicta, iure architecto.
      Corporis alias sint laudantium cum sunt soluta odit hic voluptates! Quod provident at voluptatum, praesentium unde, dolorem ipsam, ut a qui ab suscipit in voluptatibus nobis eveniet debitis omnis? Error.</p>
    </div>
    <button onClick={contactpage}>click me </button>
    </>
  )
}
