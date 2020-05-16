import React from 'react';
import Buscador from '../Components/Buscador';
import '../Components/Styles/WF.css';



class WF extends React.Component {

    render() {
        return (
            <div className="wf">
                <style>{'body { background-color: #9E2723; }'}</style>
                <br/>
                <Buscador/>
            </div>
        )

    }

}

export default WF;