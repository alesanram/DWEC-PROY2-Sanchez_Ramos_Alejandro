import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./componentes/header"
import Footer from './componentes/footer';
import About from './componentes/about';
import Porfolio from './componentes/porfolio';
import Utility from './componentes/utility';
import Academics from './componentes/academics';
import Recuperacion from './componentes/ud1_recuperacion';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  //Componente donde se monta la pagina con el resto de los componentes esta en un div porque a react no le gustan los componentes sueltos
  <div className='contenedor'>
    <Header/>
    <Utility/>  
    <About/>
    <Porfolio/>
    <Academics/>
    <Recuperacion/>
    <Footer/>
  </div>
,document.getElementById('root'));
