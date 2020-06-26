import React from 'react';
import Topbar from '../Components/Topbar';
import BuscadorTurbo from '../Components/BuscadorTurbo';

class Turbonett extends React.Component{

    render(){
        const  valores=  [
            { value: 'descuento', label: 'Descuento' },
            { value: 'vigente', label: 'Cables Bajos' },
            { value: 'vencida', label: 'Servicios Class' },

          ]
        return (
            <div className="wf">
                <Topbar/>
                <h4 style={{color: 'white' , textAlign: 'center'}}>TURBONETT</h4>
                <BuscadorTurbo 
                valores={valores} 
                defecto={'Descuento'}
                ruta= {"Internet fijo > reclamos > averia > WF Lentitud"}
                />
            </div>
        )
    }
}

export default Turbonett;