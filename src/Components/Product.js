import React, { Component } from 'react';
import Title from './Title';
import { ProductConsumer } from "../Context";

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
            <div class="row">
              <ProductConsumer>
                {value => {
                  return( <h1> {value} </h1> );
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
