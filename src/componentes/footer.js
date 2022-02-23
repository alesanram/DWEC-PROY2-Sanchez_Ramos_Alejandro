import React from "react";
import {Container,Navbar} from 'react-bootstrap'
import '../index.css';


let Footer=()=>{
    //Footer creado con el nav de boostrap para que tenga el mismo aspcto que el header contiene datos de contacto
    return(
        <Navbar bg="success" expand="lg" variant="dark" >
            <Container>
                <ul className="footer">
                    <li>
                        <p>Github: <a href="https://github.com/alesanram">alesanram</a></p>
                    </li>
                    <li>
                        <p>Correo: alejsanzram@gmail.com</p>
                    </li>
                    <li>
                        <p>telefono: 684269375</p>
                    </li>
                </ul>
            </Container>
        </Navbar>
    )
    
}
export default Footer;