import React from "react";
import moment from 'moment';
import 'moment/locale/es';

let Reloj=()=>{
    return(
        <h5>{moment().locale('es').format('llll')}</h5>
    );
}

export default Reloj;