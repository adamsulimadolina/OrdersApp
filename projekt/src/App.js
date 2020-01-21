import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Meals from './Meals';
import Nav from './Nav';
import OrderConfirm from './OrderConfirm';
import Orders from './Orders'



function App() {
  return (
    
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Meals} />
            <Route path="/finishorder" component={OrderConfirm} />
            <Route path="/orders" component={Orders} />
          </Switch>
          </div>
          
      </Router>
    
  );
}

export default App;

