import {EXP_Content, EXP_Nav} from "../EXP_Content"
import EXP_List from "../../Experiencia_List"
import "./Experiencia.css"

const Experiencia = () => {
  return (
    <section className="experiencia">
      <aside className="experiencia_nav">
        {EXP_List.map(item => (
          <EXP_Nav
            id={item.id}
            img={item.img}
            desc={item.desc}
            type={item.type}
            active={item.active}
            tittle={item.tittle}
          />
        ))}
      </aside>
      <div className="experiencia_content">
        {EXP_List.map(item => (
          <EXP_Content
            id={item.id}
            desc={item.desc}
            link={item.link}
            cover={item.cover}
            tittle={item.tittle}
            poster={item.poster}
            active={item.active}
          />
        ))}
      </div>
      <div className="snap_target"></div>
    </section>
  )
}

export default Experiencia