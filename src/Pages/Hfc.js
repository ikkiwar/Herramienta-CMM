import React from 'react';
import Topbar from '../Components/Topbar';
import BuscadorHFC from '../Components/BuscadorHFC';

class Hfc extends React.Component{

    render(){
        const  valores=  [
            { value: 'descuento', label: 'Descuento' },
            { value: 'vigente', label: 'sol vigente' },
            { value: 'vencida', label: 'sol vencida' },

          ]
        return (
            <div className="wf">
                <Topbar/>
                <h4 style={{color: 'white' , textAlign: 'center'}}>INTERNET HFC</h4>
                <BuscadorHFC
                valores={valores} 
                defecto={'Descuentito'}
                ruta={"Internet HFC > Gestiones > Modificaciones > WF > Asignacion de Ip Fija "}
                />
            </div>
        )
    }

}

export default Hfc;