import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './javascript/componentes_extras/routes';
import Header from './javascript/Header';
import Footer from './javascript/Footer'
import Planos from './javascript/componentes_planos/Planos'
import './styles/index.css'
import './styles/header.css'
import './styles/footer.css'
import './styles/index_styles/planos.css'

ReactDOM.render(
  <React.StrictMode>
    {/* CABEÇALHO */}
    <Routes />

    {/* LANDING PAGE */}
    <Planos />


    {/* RODAPÉ */}
    <Footer />
    
  </React.StrictMode>,
  document.getElementById('root')
)