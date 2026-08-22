import "./SkillsHobbiesList.css"

const SkillsHobbiesList = ({src, nome, type}) =>{
  return(
    <li className={`${type}_list_item`}>
      <img className={`${type}_img`} src={src} alt={nome}/>
      <h3 className={`${type}_text`}>{nome}</h3>
    </li>
  )
}

export default SkillsHobbiesList