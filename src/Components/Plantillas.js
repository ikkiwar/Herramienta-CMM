import React from 'react';
import './Styles/Plantillas.css';

class Plantillas extends React.Component{

    render(){
        let plantilla = "NOMBRE:\nNUMERO DEL QUE LLAMA:\nNUMERO DEL SERVICIO:" + 
        "\nCONTACTOS:\nFACTURA:\nCOMENTARIO DEL RECLAMO:";
        return(
            <div>
                <textarea  className="plantilla" rows="4" cols="40" >
              {plantilla}
                </textarea>
            </div>
        )
    }

}

export default Plantillas;
