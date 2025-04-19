import "./EXP_Content.css"

export const EXP_Nav = ({id, active, img, tittle, type}) =>{
  return(
    <li data-exp-target={`#${id}`} className={active}>
      <img className="experiencia_nav_img" src={img}/>
      <div className="experiencia_nav_text">
        <h2>{tittle}</h2>
        <p>{type}</p>
      </div>
    </li>
  )
}

export const EXP_Content = ({id, cover, tittle, desc, link, poster, active}) =>{
  return(
    <section id={id} data-exp-content className={active}>
    <img className="experiencia_content_cover" src={cover} alt="Demo" />
    <div className="experiencia_content_text">
      <h1>{tittle}</h1>
      <p dangerouslySetInnerHTML={{ __html: desc }}/>
      <a href={link} target="_blank" className="content_text_button">Da uma olhada!</a>
    </div>
    <div className="experiencia_content_poster">
      <img className="poster_img" src={"/public/shinypants-pose.png"} />
    </div>
  </section>
  )
}
