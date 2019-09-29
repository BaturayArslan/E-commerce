import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    storeProducts: [],
    detailProduct: detailProduct,
  };

  handleProduct = () => {
    console.log('hello world');
  };

  handleDetals = () => {
    console.log(this.state.detailProduct);
  };
  componentDidMount() {
    this.productHandler();
  }
  productHandler = () =>{
    let tempProduct = [];
    storeProducts.forEach((item) => {
      const single = {...item};
      tempProduct.push(single);
    });
    this.setState({
      storeProducts: tempProduct
    });
  }
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleProduct: this.handleProduct,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
