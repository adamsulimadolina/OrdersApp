import React from 'react';
import Products from './Products';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Meals from './Meals';
import Nav from './Nav';
import OrderConfirm from './OrderConfirm';



function App() {
  return (
    
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/meals" component={Meals} />
            <Route path="/products" component={Products} />
            <Route path="/finishorder" component={OrderConfirm} />
          </Switch>
          </div>          
      </Router>
    
  );
}

export default App;

