import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <h3 className="navbar-brand">Logo</h3>
            <ul className="navbar-nav mr-auto">

                    <li className="nav-item"><a className="nav-link" href="/products">Product</a></li>


                    <li className="nav-item"><a className="nav-link" href="/meals">Meals</a></li>

            </ul>
        </nav>
    )
}

export default Nav;
