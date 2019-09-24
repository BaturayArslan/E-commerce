import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../icon.svg';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header>
        {/* LOGO AND NAVİGATİON */}
        <div className="content flex row-nowrap  items-center">
          <Link to="/" className="icon-container">
            <img src={logo} alt="logo.svg" className="icon" />
          </Link>
          <nav>
            <Link to="/" className="navigation-link">
              {' '}
              Anasayfa{' '}
            </Link>
            <Link to="/cart" className="navigation-link">
              {' '}
              Card{' '}
            </Link>
            <Link to="/product" className="navigation-link">
              {' '}
              Ürünler{' '}
            </Link>
          </nav>
        </div>

        {/* MOBİL VERSİON NAVİGATİON İCON */}
        <div className="mobil white  margin-left row-nowrap  items-center">
          <span>
            <i className="fas fa-bars fa-2x" />
          </span>
        </div>

        {/* MOBİL VERSİON NAVİGATİON İCON */}
        <Link to="/" className=" mobil icon-container">
          <img src={logo} alt="logo.svg" className="icon" />
        </Link>

        {/* CART İCON */}
        <div className="flex row-nowrap  items-center">
          <span>
            <Link to="/cart" className="navigation-link">
              <i className="fas fa-shopping-cart fa-2x" />
            </Link>
          </span>
        </div>
      </header>
    );
  }
}
