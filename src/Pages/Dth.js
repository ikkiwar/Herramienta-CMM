import React from 'react';
import Topbar from '../Components/Topbar';
import BuscadorDTH from '../Components/BuscadorDTH';

class Dth extends React.Component{
    render(){
        const  valores=  [
            { value: 'descuento', label: 'Descuento' },
            { value: 'vigente', label: 'sol vigente' },
            { value: 'vencida', label: 'sol vencida' },

          ]
        return (
            <div className="wf">
                <Topbar/>
                <h4 style={{color: 'white' , textAlign: 'center'}}>CLARO TV DTH</h4>
                <BuscadorDTH 
                valores={valores} 
                defecto={'Descuentito'}
                ruta={"Linea Fija Alambrico > Reclamos > Reclamos de facturacion > CTE solicita descuento de cuota fija"}
                />
            </div>
        )
    }

}

export default Dth;