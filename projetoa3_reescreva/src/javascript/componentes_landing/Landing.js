import React from 'react'
import Velocidade from "/Users/Matheus/Desktop/ProjetoA3_Reescreva/projetoa3_reescreva/src/images/first-section-card/velocidade.png"
import Eficiencia from "/Users/Matheus/Desktop/ProjetoA3_Reescreva/projetoa3_reescreva/src/images/first-section-card/alvo.png"
import Facil from "/Users/Matheus/Desktop/ProjetoA3_Reescreva/projetoa3_reescreva/src/images/first-section-card/facil.png"


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
     
                  </article>

         </main>

    )


}
export default Landing;