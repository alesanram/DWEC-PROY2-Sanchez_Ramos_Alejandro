import React from "react";

let Recuperacion=()=>{
    document.addEventListener('keydown', (event) => {
        let articulo=document.getElementById("articulo");
        if (event.key === "r" || event.key === "R") {
            articulo.classList.remove("oculto");
        }
        if (event.key === "g" || event.key === "G") {
            window.scrollTo(0, 0);
        }
        if ((event.key === "n" || event.key === "N") && !articulo.classList.contains("oculto") ) {
            articulo.classList.add("oculto");
        }
    }, false);
    return(
        <div id="Recuperacion" className="espacio">
            <h3>Presiona R para ver el articulo o G para volver al juego</h3>
            <div id="articulo" className="oculto">
                <h3>Pulse N para cerrar el articulo</h3>
            </div>
        </div>
    )
}
export default Recuperacion;