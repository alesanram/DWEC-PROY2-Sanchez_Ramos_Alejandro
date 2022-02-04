import React, { useState } from "react";
import bootstrap from "bootstrap";
const inicialJob=[
    {
        name: 'Renge',
        type: 'Anime/Manga api page',
        enlace: 'Hoal',
    }
]
let Jobs=()=>{
    let [job,setJob]=useState(inicialJob);
    return(
        <ol>
            {job.map(({name,type,enlace}, i)=>(
                <li key={i}>
                    <a href={enlace}>{name}</a>
                    <ul>
                        <li>tipo: {type}</li>
                    </ul>
                </li>
            ))}
        </ol>
    )
}
export default Jobs;