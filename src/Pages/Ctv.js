import React from 'react';
import Topbar from '../Components/Topbar';
import BuscadorCTV from '../Components/BuscadorCTV';

class Ctv extends React.Component{
    render(){
        const  valores=  [
            { value: 'descuento', label: 'Descuento' },
            { value: 'vigente', label: 'Sol Vigente' },
            { value: 'vencida', label: 'Sol Vencida' },

          ]
        return (
            <div className="wf">
                <Topbar/>
                <h4 style={{color: 'white' , textAlign: 'center'}}>CLARO TV HFC</h4>
                <BuscadorCTV
                valores={valores} 
                defecto={'Descuentito'}
                ruta= {"Linea Fija Alambrico > Reclamos > Reclamos de facturacion > CTE solicita descuento de cuota fija"}
                />
            </div>
        )
    }

}

export default Ctv;