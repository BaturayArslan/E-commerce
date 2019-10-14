import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    storeProducts: [],
    detailProduct: detailProduct,
    cart: storeProducts,
    isModelOpen: false,
    subTotal: 0,
    taxTotal: 0,
  };

  increment = (id) => {
    console.log("this is increment");
  }

  decrement = (id) => {
    console.log("this is decrement");
  }

  removeItem = (id) => {
    console.log("this is removeItem");
  }

  componentDidMount() {
    this.productHandler();
  }

  productHandler = () => {
    let tempProduct = [];
    storeProducts.forEach(item => {
      const single = { ...item };
      tempProduct.push(single);
    });
    this.setState({
      storeProducts: tempProduct,
    });
  };

  getProduct = id => {
    const tempProduct = this.state.storeProducts.find(object => {
      if (object.id === id) {
        return object;
      }
    });
    return tempProduct;
  };

  addToCart = id => {
    let tempStore = [...this.state.storeProducts];
    const index = tempStore.indexOf(this.getProduct(id));
    const tempProduct = tempStore[index];
    tempProduct.inCart = true;
    tempProduct.count = 1;
    tempProduct.total = tempProduct.price;
    this.setState(() => {
      return { storeProducts: tempStore ,cart: [...this.state.cart,tempProduct], };
    });
  };

  openModel = id => {
    const obj = this.getProduct(id);
    this.setState({
      detailProduct: obj,
      isModelOpen: true,
    });
  };

  closeModel = () => {
    this.setState({
      isModelOpen: false,
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleProduct: this.handleProduct,
          addToCart: this.addToCart,
          openModel: this.openModel,
          closeModel: this.closeModel,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
