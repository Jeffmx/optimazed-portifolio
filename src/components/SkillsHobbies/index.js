import SkillsList from "../SkillsHobbiesList/index.js"
import {skills, hobbies} from "../../SkillsHobbies.js"
import "./SkillsHobbies.css"

const SkillsHobbies = () =>{
  return(
    <section className="skills_container">
      <ul className="skills_list">
        {skills.map(item => (
          <SkillsList
            src={item.src}
            nome={item.nome}
            type={"skills"}
          />
        ))}
        {skills.map(item => (
          <SkillsList
            src={item.src}
            nome={item.nome}
            type={"skills"}
          />
        ))}
      </ul>

      <div className="skills_logo">
        <img className="logo_skill" src="/Logo.ico" alt="logo" height="300px"/>
      </div>
      
      <ul className="skills_hobbies">
        {hobbies.map(item => (
          <SkillsList
            src={item.src}
            nome={item.nome}
            type={"hobbies"}
          />
        ))}
        {hobbies.map(item => (
          <SkillsList
            src={item.src}
            nome={item.nome}
            type={"hobbies"}
          />
        ))}
      </ul>
      <div className="snap_target"></div>
    </section>
  )
}

export default SkillsHobbies