import React, { Component } from 'react';
import '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="index.html">
              <img src="https://cdn.discordapp.com/attachments/874463648884592681/915790573754019861/logonova.png" width="230"
                height="40" className="d-inline-block align-top" alt=""/></a>
          </nav>
        );
    }
}

export default Navbar;
