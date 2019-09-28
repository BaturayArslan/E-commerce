import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SingleProduct extends Component {
  render() {
    const { id, title, img, inCart } = this.props.ProductInfo;
    return (
      <div className="col-9 col-md-6 col-lg-3 p-3 mx-auto">
        <div className="card">
          <div className="img-container">
            <Link to="/details">
              <img src={img} alt="phone" className="card-img-top" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
