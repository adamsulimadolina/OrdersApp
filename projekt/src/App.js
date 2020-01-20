import React from 'react';
import Products from './Products';
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
            <Route path="/meals" component={Meals} />
            <Route path="/products" component={Products} />
            <Route path="/finishorder" component={OrderConfirm} />
            <Route path="/orders" component={Orders} />
          </Switch>
          </div>
          
      </Router>
    
  );
}

export default App;

// const prods = [
//   {
//       productName: 'koperek',
//       number: 3,
//       shop: 'biedronka'
//   },
//   {
//       productName: 'pomidor',
//       number: 3,
//       shop: 'biedronka'
//   },
//   {
//       productName: 'ogorek',
//       number: 3,
//       shop: "biedronka"
//   }
// ];
