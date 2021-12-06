import React, { Component } from 'react';
import '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


class Navbar extends Component {
    render() {
        return (
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="index.html">
              <img src="https://cdn.discordapp.com/attachments/874463648884592681/915790573754019861/logonova.png" width="230"
                height="40" className=" align-top" alt=""/></a>
            <a className="nav-item direita nav-link active" href="/inicio">Início</a>
            <a className="nav-item nav-link active" href="/">Sair</a>
          </nav>
        );
    }
}

export default Navbar;
