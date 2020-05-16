import React from 'react';
import '../Components/Styles/Home.css';
import Claro from '../Components/Img/claro.png';
import Dth from '../Components/Img/dth.jpg';
import Inalambrico from '../Components/Img/inalambrico.jpeg';
import Inter from '../Components/Img/internet.jpeg';
import Server from '../Components/Img/internet2.jpeg';
import Phone from '../Components/Img/phone.jpeg';
import Hfc from '../Components/Img/tvhfc.jpeg';

class Home extends React.Component{


    render(){
        return(
            <div>
                 <div className="menu-btn">
        <i className="fas fa-bars fa-2x"></i>
    </div>

    <div className="container">
     
        <nav className="nav-main">
           
            <img src={Claro} alt="Claro" className="nav-brand"/>
        
            <ul className="nav-menu">
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="./lf/lf.html">Linea Fija</a>
                </li>
                <li>
                    <a href="#">Turbonett</a>
                </li>
                <li>
                    <a href="#">Internet HFC</a>
                </li>
                <li>
                    <a href="#">Claro TV HFC</a>
                </li>
                <li>
                    <a href="#">Claro TV DTH</a>
                </li>
                <li>
                    <a href="#">Servicios Inalambricos</a>
                </li>              
            </ul>

           
            <ul className="nav-menu-right">
                <li>
                    <a href="#">
                        <i className="fas fa-search"></i>
                    </a>
                </li>
            </ul>
        </nav>
      <hr className="hr"/>

       
        <header className="novedades">
                <h2>Novedades</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde exercitationem reiciendis, libero alias perspiciatis ratione fugiat, optio cumque odio voluptate eum, architecto adipisci consectetur sapiente atque molestiae quasi dolor totam.</p>

                <a href="#" className="btn"> Mas Novedades <i className="fas fa-angle-double-right"></i></a>

        </header>

      

        <div className="procesos-list">
            <div>
                <img src={Phone} alt="Linea Fija"/>
                <h3>Lorem, ipsum dolor.</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae quam facilis enim nihil hic cum magnam repudiandae similique eaque temporibus.</p>
                <a href="/lf/lf.html">Detalles <i className="fas fa-angle-double-right"></i></a>
            </div>
            <div>
                <img src={Inter} alt="Internet"/>
                <h3>Lorem, ipsum dolor.</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae quam facilis enim nihil hic cum magnam repudiandae similique eaque temporibus.</p>
                <a href="#">Detalles <i className="fas fa-angle-double-right"></i></a>
            </div>
            <div>
                <img src={Server} alt="Internet HFC"/>
                <h3>Lorem, ipsum dolor.</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae quam facilis enim nihil hic cum magnam repudiandae similique eaque temporibus.</p>
                <a href="#">Detalles <i className="fas fa-angle-double-right"></i></a>
            </div>
            <div>
                <img src={Hfc} alt="Claro TV"/>
                <h3>Lorem, ipsum dolor.</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae quam facilis enim nihil hic cum magnam repudiandae similique eaque temporibus.</p>
                <a href="#">Detalles <i className="fas fa-angle-double-right"></i></a>
            </div>
            <div>
                <img src={Dth} alt="DTH"/>
                <h3>Lorem, ipsum dolor.</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae quam facilis enim nihil hic cum magnam repudiandae similique eaque temporibus.</p>
                <a href="#">Detalles <i className="fas fa-angle-double-right"></i></a>
            </div>
            <div>
                <img src={Inalambrico} alt="Inalambrico"/>
                <h3>Lorem, ipsum dolor.</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae quam facilis enim nihil hic cum magnam repudiandae similique eaque temporibus.</p>
                <a href="#">Detalles <i className="fas fa-angle-double-right"></i></a>
            </div>


        </div>




    </div>

    <section className="social">
        <p>Visitanos</p>
        <div className="links">
            <a href="#">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
                <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
                <i className="fab fa-instagram"></i>
            </a>

        </div>


    </section>

    <footer className="footer">
        <h5>Elaborado por: Pedro Canjura</h5>
        
    </footer>
            </div>
        )

    }


}


export default Home;