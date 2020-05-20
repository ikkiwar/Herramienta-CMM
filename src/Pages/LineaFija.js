import React from 'react';
import Buscador from '../Components/Buscador';
import Topbar from '../Components/Topbar';
import '../Components/Styles/WF.css';



class LineaFija extends React.Component {

    render() {
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

export default LineaFija;