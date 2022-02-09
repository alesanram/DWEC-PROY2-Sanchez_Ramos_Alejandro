import {React,useState,useEffect} from "react";

let Cuadrado=({boo,puntos,onPuntosChange})=>{
    let entrada=null;
        if(boo){
            entrada="casilla--topo"
        }
        else{
            entrada="casilla"
        }
        return (
            <button className={entrada} 
            onClick={(e)=>{
                e.preventDefault();
                if(e.target.matches('.casilla--topo')){
                    onPuntosChange(puntos+1);
                }
                else{
                    alert("casi")
                }
            }}>
            "Topo"
            </button>
        );
}

let Topo=()=>{
    let [score,setScore]=useState(0);
    let [rejilla,setRejilla]=useState(Array(81).fill(< Cuadrado boo={false} puntos={score}
        onPuntosChange={point=>setScore(point)}/>));

    function randomPosicion(){
        return(Math.floor( Math.random() * (81 - 1) + 1));

    }
    useEffect(() => {
        let speed=2000;
        if(score>10){
            speed=1000
        }
        const interval = setInterval(() => setRejilla(tablero()), speed);
        return () => {
            clearInterval(interval);
        };
    });
    function tablero(){
        let tablero=Array(81).fill(<Cuadrado boo={false} puntos={score}
            onPuntosChange={point=>setScore(point)}/>);
        let random=randomPosicion();
        tablero[random]=<Cuadrado boo={true} puntos={score}
        onPuntosChange={point=>setScore(point)}/>
        return tablero;
    }
    function render(){
        let number=[8,17,26,35,44,53,62,71,80]
        let filas=number.map((numero)=>
        <div key={numero} className="board-row">
            {rejilla[numero-8]}
            {rejilla[numero-7]}
            {rejilla[numero-6]}
            {rejilla[numero-5]}
            {rejilla[numero-4]}
            {rejilla[numero-3]}
            {rejilla[numero-2]}
            {rejilla[numero-1]}
            {rejilla[numero]}
        </div>);
        return filas;
    }
    return(
        <div className="game">
            {render()}
        </div>
    )
}
export default Topo;