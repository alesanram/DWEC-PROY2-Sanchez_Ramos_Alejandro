import React from "react";
import Topo from './topo';
import Reloj from './reloj';

let Utility=()=>{
    //Componente donde se montan un reloj y un juego 
    return(
        <div id="Utylitis" className="utility">
            <Reloj/>
            <Topo/>
        </div>
    )
}

export default Utility;