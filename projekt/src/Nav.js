import React from 'react';
import './App.css';

class Nav extends React.Component {
    render() {
        return (
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                    <h3 className="navbar-brand justify-content-center">Logo</h3>
                    <ul className="navbar-nav mr-auto justify-content-center">
                        <li className="nav-item "><a className="nav-link" href="/meals">Meals</a></li>
                        <li className="nav-item "><a className="nav-link" href="/products">Product</a></li>
                    </ul>
                </nav>
        )

    }
}

export default Nav;
