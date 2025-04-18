import './App.css'
import { useEffect } from 'react'
import Start from './components/Start'
import Skills_Hobbies from './components/Skills_Hobbies'
import Formacao from './components/Formacao'
import Experiencia from './components/Experiencia'

function App() {
  useEffect(() => {
    const s = document.createElement('script');
    // Ajuste o caminho se precisar, aqui assumo que está em public/script.js
    s.src = '/script.js';
    s.defer = true;   // garante que só execute depois do parsing do HTML/JS do React
    document.body.appendChild(s);

    return () => {
      document.body.removeChild(s);
    };
  }, []);

  return (
    <main className='main_conteiner'>
      <header>'</header>
      <Start/>
      <Skills_Hobbies/>
      <Formacao/>
      <Experiencia/>
      <div className="mensagem">
        <img src="/rotate.svg" alt="Rotate your device"/>
      </div>
    </main>
  )
}

export default App
