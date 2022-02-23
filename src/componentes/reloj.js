import {React,useEffect,useState} from "react";
import moment from 'moment';
import 'moment/locale/es';

//Reloj creado con la libreria moments
let Reloj=()=>{
    //Estado del reloj cuyo valor inicial es la hora actual
    const [time, setTime] = useState(moment().locale('es').format('llll'));
    //Funcion que cambia el estada cunado la hora actual es diferente
    useEffect(() => {
        //Se comprueba la diferenia etre hora actual y estado cada segundo ya que no se sabe en que momento el usuaria a abierto la pagina
        const intervalo = setInterval(
            () => setTime(moment().locale('es').format('llll')), 1000
        );
        return () => clearInterval(intervalo);
    });
    //Imprime el reloj
    return(
        <h5>{time}</h5>
    );
}

export default Reloj;