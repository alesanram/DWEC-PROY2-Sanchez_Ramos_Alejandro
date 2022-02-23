import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./componentes/header"
import Footer from './componentes/footer';
import About from './componentes/about';
import Jobs from './componentes/jobs';
import Topo from './componentes/topo';
import Academics from './componentes/academics';
import Recuperacion from './componentes/ud1_recuperacion';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <div className='contenedor'>
    <Header/>
    <Topo/>
    <About/>
    <Academics/>
    <Jobs/>
    <Recuperacion/>
    <Footer/>
  </div>
,document.getElementById('root'));
