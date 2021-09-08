import React, { Component } from 'react';
import '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="index.html">
              <img src="https://cdn.discordapp.com/attachments/746027270845759568/845342039252009020/logoexten.png" width="220"
                height="40" class="d-inline-block align-top" alt=""/></a>
            <a class="nav-item nav-link active" href="/index">Inicio</a>
            <a class="nav-item nav-link" href="/cadastromateriais">Materiais / Serviços</a>
            <a class="nav-item nav-link" href="#">Auxiliares</a>
            <a class="nav-item nav-link" href="/orcamento">Orçamento</a>
            <a class="nav-item nav-link" href="/logout">Sair</a>
          </nav>
        );
    }
}

export default Navbar;
