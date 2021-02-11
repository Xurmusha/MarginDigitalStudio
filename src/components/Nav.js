import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../main.scss';

class Nav extends Component {
    render() {
        return (
            <div id="Navbar">
               <div className="container">
                   <div className="navbar navbar-expand-sm my-3 justify-content-between">
                       <ul className="navbar-nav justify-content-between">
                           <li className="nav-item">
                               <Link to="/SMMAction" className="nav-link text-dark"><h3>Конструктор
                                   <span className="ml-2">услуг</span></h3>
                               </Link>
                           </li>
                       </ul>

                       <Link to="/" className="navbar-brand">
                           <img src="Logo.svg" alt="" className=""/>
                       </Link>
                   </div>
               </div>
            </div>
        );
    }
}

export default Nav;