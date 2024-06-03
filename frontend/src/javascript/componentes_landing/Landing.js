import React from 'react'
import {useState} from 'react'
import axios from "axios";
import Velocidade from "./images/first-section-card/velocidade.png"
import Eficiencia from "./images/first-section-card/alvo.png"
import Facil from "./images/first-section-card/facil.png"

function App() {
    const [result,setResult] = useState('');
    const [prompt,setPrompt] = useState('');
  
  
    const handleClick = async() =>{
        // envia uma requisição do tipo POST para o endpoint programado no backend 
        // a pergunta está guardada na constante prompt
        // a constante response guarda a resposta enviada pelo backend
    const response = await axios.post(
        "http://localhost:4000/pergunte-ao-chatgpt",
        { prompt: prompt }
      );
      // atribui a constante resposta para o campo result na tela
      setResult(response.data);  
  
    }
  
    
    
  
    return (
    <div className='container'>
        <div className='inside-container'> 
            <input className='label-dec' type="text" placeholder='Reescreva:' onChange={(e) => setPrompt("Reescreva este texto mais formalmente: " + e.target.value)}/>
            <button className='button' onClick={handleClick}>Enviar</button>
            <div className='resultDiv'>
                <b>Resultado: </b>{result}
            </div>

        </div>

        
      
    </div>
    );
  }
  
  


const Landing = (props) => {
    return (

         /* CONTEÚDO PRINCIPAL */
         <main>

            {/* PRIMEIRA SEÇÃO */}
             <article className="first-article">
             <h1 className="first-article-title">Sua opção ágil e eficiente</h1>
             <p className="first-article-text">Com uma equipe de designers e desenvolvedores, criamos a ferramenta que te auxilia á repaginar a escrita e a semântica de suas palavras, frases e textos. Uma combinação poderosa entre ferramentas de desenvolvimento, Chat GPT e Open AI 3.0.</p>
             </article>

             {/* SETOR DOS ICONES */}
             <section className="main-section">

                <article className="section-models">
                    <img src={Velocidade } alt="velocidade"/>
                    <p className="models-title_1">Velocidade</p>
                    <p className="models-description">Respostas rápidas e ágeis</p>
                </article>

                <article className="section-models">
                    <img src={Eficiencia } alt="precisão"/>
                    <p className="models-title_2">Eficiência</p>
                    <p className="models-description">Eficaz e preciso</p>
                </article>

                <article className="section-models">
                    <img src={Facil } alt="facil"/>
                    <p className="models-title_3">Fácil</p>
                    <p className="models-description">Ácessivel e intuitivo</p>
                </article>
            </section>

            {/* SEGUNDA SEÇÃO (CHATGPT) */}
                 <article className="image-box">
                    <h1 className="image-title">Transforme e crie</h1>
                    <p className="image-text">Insira o contéudo desejado abaixo e viva a experiência de transformar</p>

                    < App />
                  </article>

                 {/* SEÇÃO DOS NOMES */} 
                 <article className="first-article">
                    <h1 className="first-article-title">Sobre o projeto</h1>
                    <p className="first-article-text">Conheça os criadores do projeto</p>
                </article>

                  <section className="main-section">

                  <article className="section-names">
                    <p className="names-title_3">João Victor Bonini</p>
                    <p className="names-description">823124529</p>
                </article>

                <article className="section-names">
                    <p className="names-title_3">Gabriel Ribeiro Sales</p>
                    <p className="names-description">822220317</p>
                </article>

                <article className="section-names">
                    <p className="names-title_3">Mateus Chaves Broll</p>
                    <p className="names-description">822226355</p>
                </article>

                <article className="section-names">
                    <p className="names-title_3">Matheus Araujo de Carvalho</p>
                    <p className="names-description">822223290</p>
                </article>
            </section>

            

         </main>

    )


}
export default Landing;