import React from 'react';
import ReactDOM from 'react-dom';
import Header from './javascript/Header';
import Footer from './javascript/Footer'
import Landing from './javascript/componentes_landing/Landing'
import './styles/app_styles/App.css'
import './styles/index.css'
import './styles/header.css'
import './styles/footer.css'
import './styles/index_styles/first-article.css'
import './styles/index_styles/second-article.css'
import './styles/contato_styles/contato.css'

ReactDOM.render(
  <React.StrictMode>
    {/* CABEÇALHO */}
    <Header />

    {/* LANDING PAGE */}
    <Landing />


    {/* RODAPÉ */}
    <Footer />
    
  </React.StrictMode>,
  document.getElementById('root')
)