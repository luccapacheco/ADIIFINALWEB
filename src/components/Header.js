import React from "react";
import { Link } from "react-router-dom";
function Header(){
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Pagina Inicial</Link></li>
                    <li><Link to="/cadastro">Reservar Vaga de Garagem</Link></li>
                    <li><Link to="/lista">Vagas Reservadas</Link></li>
                    
                </ul>

            </nav>
         </header>
    );
}

export default Header;