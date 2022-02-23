import React from "react";
import {Accordion} from 'react-bootstrap';
import clienteServidor from '../img/Cliente-Servidor.png';
import kube from "../img/Kubernetes.png";
import libreia from  "../img/libreia.png";
import frame from "../img/framework.png";
import nav from "../img/nav.png";
import github from "../img/github.png";
import ide from "../img/ide.png";


let Recuperacion=()=>{
    //Evnetos de teclado cunado se presiona una tecla
    document.addEventListener('keydown', (event) => {
        let articulo=document.getElementById("articulo");
        //Cunado se presiona r o R se muestra el articulo
        if (event.key === "r" || event.key === "R") {
            articulo.classList.remove("oculto");
        }
        //Cunado se presiona g o G se vuelve al juego
        if (event.key === "g" || event.key === "G") {
            window.scrollTo(0, 0);
        }
        //Cunado se presiona n o N y el articulo esta visible se cierra el articulo
        if ((event.key === "n" || event.key === "N") && !articulo.classList.contains("oculto") ) {
            articulo.classList.add("oculto");
        }
    }, false);
    return(
        <div id="Recuperacion" className=" articulo espacio">
            {/*  Contendero con el articulo para la recuperacion del tema se divide en 3 partes diferienciadas por su titulo*/}
            <h3 className="espacio">Presiona R para ver el articulo o G para volver al juego</h3>
            <div id="articulo" className="oculto">
                <h3 className="espacio">Articulo sobre el desarrollo web en cliente</h3>
                <h4>Modelo de ejecución del cliente y servidor</h4>
                <p>
                    El modelo cliente-servidor, es la arquitectura que domina la web, aunque existen otras arquitecturas como 2P2 o Cliente-Cola-Cliente. 
                    El modelo cliente-servidor consiste en que los promovedores de servicios (Servidores) sean demandados por otro programa o maquina (Cliente)
                    a los que tiene que dar una respuesta, actualmente este intercambio de demanda y respuesta tiene que pasar por un protocolo HTTP o HTTPS para 
                    la seguridad de los datos transferidos en el intercambio. 
                </p>
                <img src={clienteServidor} alt="Esquema modelo cliente servidor"/>
                <p>
                Las ventajas de esta arquitecta consiste e en la capacidad de separar el fronted de una web de su backend de una manera lógica, 
                siendo capaz de centralizar gestión de la información y la separación de responsabilidades, aunque no siempre el servidor sea un solo programa o maquina. 
                Un fácil mantenimiento del software y hardware  , la facilidad de escalar los servicios y el ocultamiento de las IP  al resto de los clientes.
                </p>
                <p>
                Aunque también existen desventajas como el trafico de la web, la recistencia del modelo ante la caída del servidor, 
                la dependencia del  software y el hardware y la incapacidad de obtener recursos sin pasar por un servidor. 
                Pero estas desventajas en la actualidad se han ido reduciendo, con la llegada de kubernetes en 2015.
                </p>
                <img src={kube} alt="esquema de kubernetes"/>
                <p>
                Este sistema favoreció la aparición  de los microservicios que en corporación de las Arquitectura monolítica, 
                en la que todos los procesos están estrechamente asociados y se ejecutan como un solo servicio. Los Microservicios permite la creación de 
                la aplicación con componentes independientes que se encarga de un único servicio o una parte funcional del servidor. 
                Las ventajas de estos es la facilidad de escalar solo los servicio demandados en vez de todo el servidor cuando hay una gran influencia de trafico, 
                una menor dependencia del  software y el hardware ya que se puede elegir la mejor herramienta para cada servicio y una gran resistencia ya que 
                la caída o fallo de un servicio no provoca la caída del resto y pueden seguir funcionando con normalidad.
                </p>
                <h4>Lenguajes más relevantes en la actualidad para la programación de clientes Web </h4>
                <p>
                    Al hablar de lenguajes en web, hay que hacer una distinción entre si se utiliza en el lado del cliente o en el lado del servidor. 
                    En el lado del cliente web actualmente existen solo tres lenguajes que lo dominan: JavaScript, HTML y CSS. 
                    Aunque estos dos lenguajes no son lenguaje de programación sino de marcas. 
                </p>
                <p>
                    Estos tres lenguajes son los estándares actuales en la  parte de cliente y son regulados Html y Css son regulados por la W3C 
                    y JavaScript tiene su estándar en  ECMAScript. Aunque cambien existen otros lenguajes como WebAsembly o TypeScript pero todavía 
                    no son estándar el la industria.
                </p>
                <p>
                    Según MDN Web Docs: <q>JavaScript es un lenguaje de programación ligero, interpretado, o compilado justo-a-tiempo con funciones de primera clase. 
                    Si bien es más conocido como un lenguaje de scripting (secuencias de comandos) para páginas web, y es usado en muchos entornos fuera del navegador. 
                    JavaScript es un lenguaje de programación basada en prototipos, multiparadigma, de un solo hilo, dinámico, 
                    con soporte para programación orientada a objetos, imperativa y declarativa</q>
                </p>
                <p>
                    Pero en la actualidad lo mas común no es utilizar JS puro sino sus librerías o framework que no son lo mismo. 
                    Una librería es básicamente una librería de programas, sin contemplar si lo que contiene son clases o componentes o otra librería. 
                    Las librerías siempre alojan subprogramas para facilitar la programación . 
                    A diferencia de un framework, están creadas para un uso determinado y por ello tienen funciones que se adaptan entre ellas.
                </p>
                <p>
                    Y un framework es un tipo especial de biblioteca de clases. Los frameworks representan la arquitectura de software de una aplicación y 
                    determinan fundamentalmente el proceso de desarrollo. Los frameworks poseen unos modelos concretos de desarrollo que, a su vez, 
                    cuentan con diversas funciones y sirven para desarrollar aplicaciones nuevas e independientes. Las librerias y framewroks mas utilizados son  :
                    <br></br> <br></br>
                    Librerias: <br></br> <img src={libreia} alt="tabla comparativa de libreias js"/>
                    <br></br>
                    Frameworks: <br></br> <img src={frame} alt="tabla comparativa de framework js"/>
                </p>
                <h4>Herramientas utilizadas en la programación de clientes Web</h4>
                <p>
                Se necesitan varias herramientas, pero vamos por pasos, primero lo mas importante es en que navegador web vas ha desarrollar, 
                aunque no lo parezca los navegadores web son grandes herramientas para mirar el funcionamiento de la aplicación, su rendimiento, etc. 
                Ademas de servir para depurar el código. 
                Pero lo mas importante es que no todos lo navegadores funcionan igual, por lo que es conveniente utilizar mas de uno para desarrollar.
                </p>
                <img src={nav} alt="logo de diferentes navegadores"/>
                <br></br>
                <p> 
                Aunque la utilización de uno o otro navegador varia :
                    <q>
                    En la revista Net del mes de Abril, encontramos el resumen de una encuesta interesante con la pregunta: 
                    Qué Navegador utilizas para el desarrollo Web?. No es de sorprender que la mayoría de los encuestados, 
                    un 69% para ser exactos, contestan que Chrome es el navegador que más utilizan, seguido de Firefox con un 26%, y 
                    luego, de forma residual tenemos Safari con un 3%, y Opera y Microsoft Edge con un 1%.
                    </q>
                    cita del blog imaginanet.
                </p>
                <p>
                    Otra herramienta seria el controlador de versiones, que es un sistema que nos permite hacer un seguimiento a nuestro desarrollo, 
                    ademas que normalmente este se realiza en equipo. Por lo que es necesaria para evitar líos a la hora de unificar el código. 
                    Incluso si se desarrolla solo es una excelente opción en caso que necesites volver a una versión anterior de tu código por cualquier problema. 
                    Los mas utilizados son Git, CVS, SVN, Mercurial y Monotone. Aunque el mas utilizado es git pero lo mas correcto que lo mas utilizado es github un portal donde subir código que se utiliza git.
                </p>
                <img src={github} alt="logo de github"/>
                <br></br>
                <p>
                Y nos faltarían los IDE o un entorno de desarrollo, aunque para escribir código lo único que nos haría falta seria un simple editor de texto, 
                pero no es algo recomendable. Los ide tiene como objetivo mejorar su productividad, ayudar a minimizar los errores, 
                facilitar el proceso de depuración, etc. En otras palabras facilitarnos la vida a la hora de “picar” código. 
                Existen diferentes ide cada uno con sus ventajas y desventajas y los lenguajes para lo que sirven, aunque el mas 
                popular es visual studio code un ide universal y ligero, aunque su populalidad viene de los numeros pluggins que se pueden instalzar, 
                personalizandolo a tu gusto y necesidades.
                </p>
                <img src={ide} alt="Comparacion entre ide"/>
                <br></br>
                <Accordion  bg="success" className="acordeon" id="Academics">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Fuentes</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>
                                <a href="https://es.wikipedia.org/wiki/Cliente-servidor">cliente servidor e imagen</a>
                            </li>
                            <li>
                                <a href="https://aws.amazon.com/es/microservices/">microservicios</a>
                            </li>
                            <li>
                                <a href="https://es.wikipedia.org/wiki/Kubernetes">Kubernetes imagen </a>
                            </li>
                            <li>
                                <a href="https://developer.mozilla.org/es/docs/Web/JavaScript">MDN JS </a>
                            </li>
                            <li>
                                <a href="https://developer.mozilla.org/en-US/docs/Glossary/W3C">W3C</a>
                            </li>
                            <li>
                                <a href="https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/frameworks-javascript-y-librerias-populares/">libreias y framework JS e imagenes</a>
                            </li>
                            <li>
                                <a href="https://www.imaginanet.com/blog/que-navegador-utilizas-para-el-desarrollo-web.html#:~:text=No%20es%20de%20sorprender%20que,Microsoft%20Edge%20con%20un%201%25.">Navegadores web e imagen</a>
                            </li>
                            <li>
                                <a href="https://www.drauta.com/5-softwares-de-control-de-versiones">control de versiones</a>
                            </li>
                            <li>
                                <a href="https://www.hackaboss.com/blog/que-es-github-y-por-que-es-util-al-aprender-programacion">github e imagen</a>
                            </li>
                            <li>
                                <a href="https://ourcodeworld.co/articulos/leer/200/top-7-los-mejores-entornos-de-desarrollo-integrado-ide-para-javascript-html-y-css">ide 1</a>
                                <a href="https://marquesfernandes.com/es/tecnologia-es/mejores-identificadores-de-texto-a-desarrollo-web-en-2020-best-editors/">ide 2</a>
                                <a href="https://es.bitdegree.org/tutoriales/mejor-ide-para-javascript/">ide 3</a>
                            </li>
                            <li>
                                <a href="https://es.quora.com/Por-qu%C3%A9-el-IDE-de-Vistual-Studio-de-Microsoft-se-est%C3%A1-volviendo-tan-popular-entre-los-desarrolladores">VS code </a>
                            </li>
                            <li>
                                <a href="https://trends.google.es/trends/explore?q=%2Fm%2F0134xwrk,%2Fm%2F0_x5x3g,%2Fm%2F03v0mn,%2Fm%2F0k2kj45,%2Fm%2F0979t4">grafico ide</a>
                            </li>
                        </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <h3>Pulse N para cerrar el articulo</h3>
            </div>
        </div>
    )
}
export default Recuperacion;