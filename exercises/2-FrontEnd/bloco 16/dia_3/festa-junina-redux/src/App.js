import React, { Component } from 'react';
import ItemsCart from './components/ItemsCart';
import ProductsList from './components/ProductsList';

class App extends Component {
  render() {
    return (
      <div>
        <ProductsList />
        <ItemsCart />
      </div>
    );
  }
}

export default App;
