import "./Formacao.css"
import hashtag from "../../assets/hashtag.png"
import unibra from "../../assets/unibra.png"
import alura from "../../assets/alura.png"
import saga from "../../assets/saga.png"

const Formacao = () =>{
  return(
    <section className="formacao">
      <div className="formacao_nav">
        <ul>
          <li data-tab-target="#unibra" className="active">
            <a href="#"> <img className="icon" src={unibra} alt="unibra"/> </a>
          </li>
          <li data-tab-target="#hashtag">
            <a href="#"> <img className="icon" src={hashtag} alt="hashtag"/> </a>
          </li>
          <li data-tab-target="#saga">
            <a href="#"> <img className="icon" src={saga} alt="saga"/> </a>
          </li>
          <li data-tab-target="#alura">
            <a href="#"> <img className="icon" src={alura} alt="alura"/> </a>
          </li>
          <div className="seletor"></div>
        </ul>
      </div>

      <div className="snap_target"></div>
      
      <div className="formacao_path"></div>
      <div className="formacao_curso">
        <div id='unibra' data-tab-content className="active">
          <img className="formacao_curso_img" src={unibra} alt="unibra"/>
          <h1  className="formacao_curso_titulo">Ensino<br/>Superior</h1>
        </div>
        <div id='hashtag' data-tab-content>
          <img className="formacao_curso_img" src={hashtag} alt="hashtag"/>
          <h1  className="formacao_curso_titulo">Python<br/>Impressionador</h1>
        </div>
        <div id='saga' data-tab-content>
          <img className="formacao_curso_img" src={saga} alt="saga"/>
          <h1  className="formacao_curso_titulo">Personagens<br/>& Cenários 3D</h1>
        </div>
        <div id='alura' data-tab-content>
          <img className="formacao_curso_img" src={alura} alt="alura"/>
          <h1  className="formacao_curso_titulo">Dev em<br/>Front-End</h1>
        </div>
      </div>
      <div className="formacao_curso_desc">
        <div id="unibra" data-tab-desc className="active">
          <p className="curso_desc_titulo">Unibra</p>
          <p className="curso_desc_status">Status: Concluído「2019-2023」</p>
          <p className="curso_desc_texto" >Foi a faculdade onde eu comecei a aprender principalmente sobre lógica de programação, também tinha alguns cursos extra curriculares que achei interessante e fui atrás, como o de gestão de projeteis.</p>
        </div>
        <div id="hashtag" data-tab-desc>
          <p className="curso_desc_titulo">Equipe Hashtag</p>
          <p className="curso_desc_status">Status: Concluído「02/23-07/23」</p>
          <p className="curso_desc_texto" >Curso online onde aprendi do basico ao avançado sobre python, aprendi bastante sobre gerenciamente de arquivos, API's e até um pouco sobre automação</p>
        </div>
        <div id="saga" data-tab-desc>
          <p className="curso_desc_titulo">Saga</p>
          <p className="curso_desc_status">Status:「Cursando」</p>
          <p className="curso_desc_texto" >Esse eu comecei bem recente, ainda no ano de 2024, nele estou melhorando meu conhecimento sobre 3D e modelação no geral, até agora aprendi sobre criação de cenários e personagem (texturas e animação inclusos!), meu estilo 3D é Cartoon/Anime</p>
        </div>
        <div id="alura" data-tab-desc>
          <p className="curso_desc_titulo">Alura</p>
          <p className="curso_desc_status">Status: Concluído「2024-23/01/2025」</p>
          <p className="curso_desc_texto" >Um dos cursos que comecei em 2024, foi nele onde eu aprendi sobre a trindade HTML / CSS / JS e como criar sites responsivos com design mais conteporâneos e modernos pra fugir da mesmice</p>
        </div>
      </div>
    </section>
  )
}

export default Formacao