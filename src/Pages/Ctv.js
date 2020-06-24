import React from 'react';
import Topbar from '../Components/Topbar';
import Buscador from '../Components/Buscador';

class Ctv extends React.Component{
    render(){
        const  valores=  [
            { value: 'descuento', label: 'Descuento' },
            { value: 'Bajos', label: 'Cables Bajos' },
            { value: 'class', label: 'Servicios Class' },

          ]
        return (
            <div className="wf">
                <Topbar/>
                <br/>
                <Buscador valores={valores} defecto={'Descuentito'}/>
            </div>
        )
    }

}

export default Ctv;