import React, { useState } from 'react';
import Select from 'react-select';



const Buscador = () => {

  const [item, setItem] = useState([])
  const options = [
    { value: 'Descuento', label: 'Descuento' },
    { value: 'vigente', label: 'Solicitud Vigente' },
    { value: 'vencida', label: 'Solicitud Vencida' }
  ]

  function handleItem(item) {
    console.log(item.value)
     setItem(item.value)
}
  return (
    <div>
      <Select id="lista" options={options} placeholder="Selecione el Reclamo"
        className="mb-3" onChange={handleItem} />
      {/*  <label>{item}</label> */}
    </div>
  )

}

export default Buscador;