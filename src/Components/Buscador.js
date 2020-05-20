import React, { useState } from 'react';
import Select from 'react-select';
import './Styles/Buscador.css';
import Plantillas from '../Components/Plantillas';



const Buscador = (props) => {

  const defecto = props.defecto;

  const [item, setItem] = useState({defecto})
  const [ruta, setRuta] = useState("Linea Fija Alambrico > Reclamos >" +
    "Reclamos de facturacion > CTE solicita descuento de cuota fija")
  const options = props.valores ;

  

  function handleItem(item) {
    console.log(item.value)
    setItem(item.value);
    if (item.value === "descuento") {
      setRuta("Linea Fija Alambrico > Reclamos >" +
        "Reclamos de facturacion > CTE solicita descuento de cuota fija")
    } else if (item.value === "vigente") {

      setRuta("ruta vigente");
     


    } else if (item.value === "vencida") {
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