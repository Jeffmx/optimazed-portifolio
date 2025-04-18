import "./start.css"
import artstation from "../../assets/artstation.png"
import pinterest from "../../assets/pinterest.png"
import linkedin from "../../assets/linkedin.png"
import github from "../../assets/github.png"

const Start = () =>{
  return(
    <section className="start_container" id="top">
      <h1 className="titulo">Modelador 3D & <br/>Programador Front-End</h1>
      <img className="logo" src="/Logo.ico" alt="logo"/>
      <div className="follow">
          <h2 className="follow_up">Da um Follow!</h2>
          <ul className="follow_content">
            <a className="follow_content_item" href="https://github.com/Jeffmx">         <img className="follow_content_img" src={github}     alt="github"/>    </a>
            <a className="follow_content_item" href="https://linkedin.com/in/jeffmx-3d/"><img className="follow_content_img" src={linkedin}   alt="linkedin"/>  </a>
            <a className="follow_content_item" href="https://br.pinterest.com/Jeff_MX9/"><img className="follow_content_img" src={pinterest}  alt="pinterest"/> </a>
            <a className="follow_content_item" href="https://artstation.com/jeff-mx3">   <img className="follow_content_img" src={artstation} alt="artstation"/></a>
          </ul>
      </div>
      <div className="sobre_mim">
        <h2 className="sobre_mim_up">Sobre Mim</h2>
        <h3 className="texto_sobre">Sou um grande entusiasta da tecnologia e sempre tive esse desejo de criar coisas interessantes. Adoro explorar novas ideias e aperfeiçoar meu campo de imaginação para criar design mais diversos ou ajudar a torna-los realidade. E é isso que eu trago nos projetos que desenvolvo! Dá uma olhada abaixo e veja o que eu tenho a oferecer!</h3>
      </div>
      <div className="snap_target"></div>
    </section>
  )
}

export default Start;