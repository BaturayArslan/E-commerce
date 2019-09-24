import React, { Component } from 'react';
import Title from './Title';

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Title name="Product" title="List"></Title>
        </div>
      </React.Fragment>
    );
  }
}
