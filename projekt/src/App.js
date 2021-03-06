import React from 'react';
import Products from './Products';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddProduct from './AddProduct';
import Meals from './Meals';
import Nav from './Nav';
import Context from './Context';


function App() {
  return (

      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/meals" component={Meals} />
            <Route path="/products" component={Products} />
            <Route path="/addproduct" component={AddProduct} />
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
