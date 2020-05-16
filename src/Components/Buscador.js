import React, { useState } from 'react';
import Select from 'react-select';
import './Styles/Buscador.css';
import Plantillas from '../Components/Plantillas';



const Buscador = () => {

  const [item, setItem] = useState("Descuento")
  const [ruta, setRuta] = useState("Linea Fija Alambrico > Reclamos >" +
    "Reclamos de facturacion > CTE solicita descuento de cuota fija")
  const options = [
    { value: 'descuento', label: 'Descuento' },
    { value: 'vigente', label: 'Solicitud Vigente' },
    { value: 'vencida', label: 'Solicitud Vencida' }
  ]

  

  function handleItem(item) {
    console.log(item.value)
    setItem(item.value);
    if (item.value == "descuento") {
      setRuta("Linea Fija Alambrico > Reclamos >" +
        "Reclamos de facturacion > CTE solicita descuento de cuota fija")
    } else if (item.value == "vigente") {

      setRuta("ruta vigente");
     


    } else if (item.value == "vencida") {
      setRuta("ruta vencida")
      
    }
  }



  return (
    <div className="buscador">
      <Select id="lista" options={options} placeholder="Selecione el Reclamo"
        className="mb-3" onChange={handleItem} defaultValue={options[0]} />
      <label className="ruta">{ruta}</label>
      <br/>
     <Plantillas plantilla= {item}/>
    </div>
  )

}

export default Buscador;