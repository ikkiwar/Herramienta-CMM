import React, { useState, useEffect } from 'react';
import './Styles/Plantillas.css';

class Plantillas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cadena: "NOMBRE:\nNUMERO DEL QUE LLAMA:\nNUMERO DEL SERVICIO:" +
            "\nCONTACTOS:\nFACTURA:\nCOMENTARIO DEL RECLAMO:"
        };
        this.hadleChange = this.hadleChange.bind(this); // y recuerden chicos hay que hacer bind a sus eventos 
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.plantilla === "descuento") {
            this.setState(
                {
                    cadena: "NOMBRE:\nNUMERO DEL QUE LLAMA:\nNUMERO DEL SERVICIO:" +
                    "\nCONTACTOS:\nFACTURA:\nCOMENTARIO DEL RECLAMO:"

                }
            )

        } else if (nextProps.plantilla === "vigente") {
            this.setState(
                {
                    cadena: "NOMBRE:\nNUMERO DEL QUE LLAMA:\nNUMERO DEL SERVICIO:" +
                    "\nCONTACTOS:\nSOLICITUD:\nCOMENTARIO DEL RECLAMO:"

                }
            )
        } else if (nextProps.plantilla === "vencida") {
            this.setState(
                {
                    cadena: "NOMBRE:\nNUMERO DEL QUE LLAMA:\nNUMERO DEL SERVICIO:" +
                    "\nCONTACTOS:\nSOLICITUD:\nDIAS VENCIDOS:\nCOMENTARIO DEL RECLAMO:"

                }
            )
        }
    }

    hadleChange(event){
        console.log(event)
        this.setState({
            cadena: event.target.value
          });
    }

    render() {
        console.log("el valor actual es:", this.state.cadena)
        return (
            <div>
                <textarea className="plantilla" rows="4" cols="40" value={this.state.cadena} 
                onChange={this.hadleChange}
                >

                </textarea>
            </div>
        )
    }

}

/*  const Plantillas = (props) => {

    const [texto, setTexto] = useState("NOMBRE:\nNUMERO DEL QUE LLAMA:\nNUMERO DEL SERVICIO:" +
        "\nCONTACTOS:\nFACTURA:\nCOMENTARIO DEL RECLAMO:")


    useEffect(() => {
        if (props.plantilla == "descuento") {
            setTexto("NOMBRE:\nNUMERO DEL QUE LLAMA:\nNUMERO DEL SERVICIO:" +
                "\nCONTACTOS:\nFACTURA:\nCOMENTARIO DEL RECLAMO:")

        } else if (props.plantilla == "vigente") {
            setTexto("NOMBRE:\nNUMERO DEL QUE LLAMA:\nNUMERO DEL SERVICIO:" +
                "\nCONTACTOS:\nSOLICITUD:\nCOMENTARIO DEL RECLAMO:")
        } else if (props.plantilla == "vencida") {
            setTexto("NOMBRE:\nNUMERO DEL QUE LLAMA:\nNUMERO DEL SERVICIO:" +
                "\nCONTACTOS:\nSOLICITUD:\nDIAS VENCIDOS:\nCOMENTARIO DEL RECLAMO:")
        }

    }
    );


    return (
        <div>
            <textarea className="plantilla" rows="4" cols="40" value={texto} >
                
            </textarea>
        </div>
    )

} */
 

export default Plantillas;
