import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./componentes/header"
import Footer from './componentes/footer';
import AboutMe from './componentes/about_me';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <div>
    <Header/>
    <AboutMe/>
    <Footer/>
  </div>
,document.getElementById('root'));
