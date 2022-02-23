import {React,useEffect,useState} from "react";
import moment from 'moment';
import 'moment/locale/es';

let Reloj=()=>{
    const [time, setTime] = useState(moment().locale('es').format('llll'));
    useEffect(() => {
        const intervalo = setInterval(
            () => setTime(moment().locale('es').format('llll')), 1000
        );
        return () => clearInterval(intervalo);
    });
    return(
        <h5>{time}</h5>
    );
}

export default Reloj;