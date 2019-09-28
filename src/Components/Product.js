import React, { Component } from 'react';
import Title from './Title';
import SingleProduct from './SingleProduct';
import { ProductConsumer } from '../Context';

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="product" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.storeProducts.map(info => {
                    return <SingleProduct key={info.id} ProductInfo={info} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
