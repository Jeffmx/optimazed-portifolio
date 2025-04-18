import SkillsList from "../Skills_Hobbies_List/index.js"
import {skills, hobbies} from "../../Skills_Hobbies.js"

import "./Skills_Hobbies.css"

const Skills_Hobbies = () =>{
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

export default Skills_Hobbies