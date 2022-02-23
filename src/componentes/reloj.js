import {React,useEffect,useState} from "react";
import moment from 'moment';
import 'moment/locale/es';

let Reloj=()=>{
    const [time, setTime] = useState(moment().locale('es').format('llll'));
    useEffect(() => {
        const interval = setInterval(
            () => setTime(time => moment().locale('es').format('llll')), 1000
        );
        return () => clearInterval(interval);
    });
    return(
        <h5>{time}</h5>
    );
}

export default Reloj;