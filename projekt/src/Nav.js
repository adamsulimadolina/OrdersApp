import React from 'react';
import './App.css';

import logo from './img/logo.png'


class Nav extends React.Component {
    render() {
        return (
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">

                    <img className="App-logo" alt="logo" src={logo}></img>
                    
                        <div className="nav-item "><a className="text-white mx-3" href="/meals">Meals</a></div>
                        <div className="nav-item "><a className="text-white mx-3" href="/orders">Orders</a></div>
                   
                </nav>
        )

    }
}

export default Nav;
