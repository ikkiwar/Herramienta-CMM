import React from 'react';

class Home extends React.Component{


    render(){
        return(
            <div>
                 <div class="menu-btn">
        <i class="fas fa-bars fa-2x"></i>
    </div>

    <div class="container">
     
        <nav class="nav-main">
           
            <img src="img/claro.png" alt="Claro" class="nav-brand">
        
            <ul class="nav-menu">
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

           
            <ul class="nav-menu-right">
                <li>
                    <a href="#">
                        <i class="fas fa-search"></i>
                    </a>
                </li>
            </ul>
        </nav>
        <hr>

       
        <header class="novedades">
                <h2>Novedades</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde exercitationem reiciendis, libero alias perspiciatis ratione fugiat, optio cumque odio voluptate eum, architecto adipisci consectetur sapiente atque molestiae quasi dolor totam.</p>

                <a href="#" class="btn"> Mas Novedades <i class="fas fa-angle-double-right"></i></a>

        </header>

      

        <div class="procesos-list">
            <div>
                <img src="img/phone.jpeg" alt="Linea Fija">
                <h3>Lorem, ipsum dolor.</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae quam facilis enim nihil hic cum magnam repudiandae similique eaque temporibus.</p>
                <a href="/lf/lf.html">Detalles <i class="fas fa-angle-double-right"></i></a>
            </div>
            <div>
                <img src="img/internet.jpeg" alt="Internet">
                <h3>Lorem, ipsum dolor.</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae quam facilis enim nihil hic cum magnam repudiandae similique eaque temporibus.</p>
                <a href="#">Detalles <i class="fas fa-angle-double-right"></i></a>
            </div>
            <div>
                <img src="img/internet2.jpeg" alt="Internet HFC">
                <h3>Lorem, ipsum dolor.</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae quam facilis enim nihil hic cum magnam repudiandae similique eaque temporibus.</p>
                <a href="#">Detalles <i class="fas fa-angle-double-right"></i></a>
            </div>
            <div>
                <img src="img/tvhfc.jpeg" alt="Claro TV">
                <h3>Lorem, ipsum dolor.</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae quam facilis enim nihil hic cum magnam repudiandae similique eaque temporibus.</p>
                <a href="#">Detalles <i class="fas fa-angle-double-right"></i></a>
            </div>
            <div>
                <img src="img/dth.jpg" alt="DTH">
                <h3>Lorem, ipsum dolor.</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae quam facilis enim nihil hic cum magnam repudiandae similique eaque temporibus.</p>
                <a href="#">Detalles <i class="fas fa-angle-double-right"></i></a>
            </div>
            <div>
                <img src="img/inalambrico.jpeg" alt="Inalambrico">
                <h3>Lorem, ipsum dolor.</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae quam facilis enim nihil hic cum magnam repudiandae similique eaque temporibus.</p>
                <a href="#">Detalles <i class="fas fa-angle-double-right"></i></a>
            </div>


        </div>




    </div>

    <section class="social">
        <p>Visitanos</p>
        <div class="links">
            <a href="#">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
                <i class="fab fa-instagram"></i>
            </a>

        </div>


    </section>

    <footer class="footer">
        <h3>Elaborado por: Pedro Canjura</h3>
        
    </footer>
            </div>
        )

    }


}


export default Home;