import React from 'react';
import Buscador from '../Components/Buscador';
import Topbar from '../Components/Topbar';
import '../Components/Styles/WF.css';



class LineaFija extends React.Component {

    render() {
        // estos valores son los que se mostraran en la lista de procesos 
    const  valores=  [
            { value: 'descuento', label: 'Descuento' },
            { value: 'vigente', label: 'Cables Bajos' },
            { value: 'vencida', label: 'Servicios Class' },

          ]
        return (
            <div className="wf">
                <Topbar/>
                <h4 style={{color: 'white' , textAlign: 'center'}}>LINEA FIJA</h4>
                <Buscador 
                valores={valores} 
                defecto={'Descuento'}  
                ruta={'Linea Fija Alambrico > Reclamos > Reclamos de facturacion > CTE solicita descuento de cuota fija'}
                />
            </div>
        )

    }

}

export default LineaFija;