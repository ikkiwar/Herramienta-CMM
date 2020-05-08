import React , {useState} from 'react';
import './Styles/Plantillas.css';


const Plantillas = () => {

    const [ texto, setTexto] = useState("NOMBRE:\nNUMERO DEL QUE LLAMA:\nNUMERO DEL SERVICIO:" +
    "\nCONTACTOS:\nFACTURA:\nCOMENTARIO DEL RECLAMO:")

    
    return (
        <div>
            <textarea className="plantilla" rows="4" cols="40" >
                {texto}
            </textarea>
        </div>
    )

}


export default Plantillas;
