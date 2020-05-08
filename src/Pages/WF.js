import React from 'react';
import Buscador from '../Components/Buscador';
import Plantillas from '../Components/Plantillas';


class WF extends React.Component {

    render() {
        return (
            <div>
                <style>{'body { background-color: #9E2723; }'}</style>
                <br/>
                <Buscador/>
                <br/>
                <Plantillas/>
            </div>
        )

    }

}

export default WF;