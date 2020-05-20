import React from 'react';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
import Home from '../Pages/Home';
import Fija from '../Pages/LineaFija';
import Turbonett from '../Pages/Turbonett';
import Hfc from '../Pages/Hfc';
import Ctv from '../Pages/Ctv';
import Dth from '../Pages/Dth';
import Inalambrico from '../Pages/Inalambrico';

function App(){

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/Inicio' component={Home} ></Route>
                <Route exact path='/LineaFija' component={Fija} ></Route>
                <Route exact path='/Turbonett' component={Turbonett} ></Route>
                <Route exact path='/Hfc' component={Hfc} ></Route>
                <Route exact path='/Ctv' component={Ctv} ></Route>
                <Route exact path='/Dth' component={Dth} ></Route>
                <Route exact path='/Inalambrico' component={Inalambrico} ></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;