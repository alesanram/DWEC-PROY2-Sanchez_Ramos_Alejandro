import {React,useState,useEffect} from "react";
import {Table} from 'react-bootstrap';

/*Variable que indica la puntuacion del jugador, no es estado para que el juego no tenga demasiado retraso*/
let score=0;
//Componente que forma el tablero, solo recibe un parametro que indica sie es el topo o no
let Cuadrado=({boo})=>{
    let entrada=null;
        //Bucle que comprueba que el componente es el topo y le da una clase deifrente al resto
        if(boo){
            entrada="casilla casilla--topo"
        }
        else{
            entrada="casilla"
        }
        return (
            <td>
                <button className={entrada} 
                onClick={(e)=>{
                    //Si se presiona el boton con la clase del topo se suma uno a la puntuaciom
                    e.preventDefault();
                    if(e.target.classList.contains('casilla--topo')){
                        score+=1;
                    }
                }}>
                </button>
            </td>
        );
}
//Componente que genrera un juego vasado en el juego de golpear un topo con un martillo
let Topo=()=>{
    //Estado con el tablero del juego
    let [rejilla,setRejilla]=useState(Array(36).fill(< Cuadrado boo={false}/>));

    //Funcion que devuelve un numero al azar del 1 al 36
    function randomPosicion(){
        return(Math.floor( Math.random() * (36 - 1) + 1));

    }
    useEffect(() => {
        //Variable que indica la velocidad a la que se cambia las clases de los botones, variando segun la puntuaciom
        let speed=1500;
        if(score>20){
            speed=1000
        }
        if(score>30){
            speed=750
        }
        if(score>50){
            speed=500
        }
        //Intrbalo que modifica el estado rejilla cada x tiempo
        const interval = setInterval(() => setRejilla(tablero()), speed);
        return () => {
            clearInterval(interval);
        };
    });
    /*Funcion que devuelve el tablero a su estado original 
    y luego pinta un boton de amarillo dandole boo como true*/
    function tablero(){
        let tablero=Array(36).fill(<Cuadrado boo={false}/>);
        let random=randomPosicion();
        tablero[random]=<Cuadrado boo={true}/>
        return tablero;
    }
    //Funcion que imprime el tablero del juego en filas de 6 por 6
    function render(){
        let number=[5,11,17,23,29,35]
        let filas=number.map((numero)=>
        <tr key={numero}>
            {rejilla[numero-5]}
            {rejilla[numero-4]}
            {rejilla[numero-3]}
            {rejilla[numero-2]}
            {rejilla[numero-1]}
            {rejilla[numero]}
        </tr>);
        return filas;
    }
    return(
        <div className="divgame" >
            {/* Este es el titulo del juego, con dos eventos de raton que hacen que se muestre el mensaje explicando el juego solo 
            cuando el raton este sobre el titulo*/}
            <h1 className="titulo" onMouseOver={(e)=>{
                let mensaje= document.getElementById("mensaje_juego");
                mensaje.classList.remove("oculto")}}
                onMouseOut={(e)=>{
                    let mensaje= document.getElementById("mensaje_juego");
                    mensaje.classList.add("oculto")}}
                >Cash the yellow</h1>
            <p id="mensaje_juego" className="mensaje oculto">El juego consiste en clikear en el boton amarillo
                para sumar puntos cunado lleges a cierta puntacion el jeugo aumentara la velocidad
            </p>
            {/*Tabla creada con Boostrap donde se imprime en el thead la puntacion del jugador 
            y en el tbody el tablero de juego que se obtine de una funcion porque cambia cada x tiempo*/}
            <Table size="sm" className="game">
                <thead>
                    <th colSpan="6">Score: {score}</th>
                </thead>
                <tbody>
                    {render()}
                </tbody>
            </Table>
        </div>
    )
}
export default Topo;