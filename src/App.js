import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Product from './Components/Product';
import Details from './Components/Details';
import Cart from './Components/Cart';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
  super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Product} />
          <Route path="/cart" component={Cart} />
          <Route path="/details/:id" component={Details} />
          <Route path="/product" component={Product} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
