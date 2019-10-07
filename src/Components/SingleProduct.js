import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default class SingleProduct extends Component {
  render() {
    const { id, title, img, inCart, price } = this.props.ProductInfo;
    return (
      <ProductWrapper className="col-9 col-md-6 col-lg-3 mx-auto my-3">
          <div className="card">
            <div className="img-container p-4">

              {/* Cart image */}
              <Link to={ `/details/${id} ` }>
                <img src={img} alt="phone" className="card-img-top" />
              </Link>
              {/* Add Cart Button */}
              <button
               className="card-link" 
               disabled={inCart?true:false} 
               onClick={() => {this.props.addtocart(id);this.props.openModel(id);}}
               >
                {inCart?(<p className="text-capitilazed mb-0">in card</p>):(<span className="fas fa-shopping-cart" />)}
              </button>

            </div>
            <div className="card-footer flex content-space-between">
              {title}   <h5 className="text-blue">${price}</h5>
            </div>
          </div>
      </ProductWrapper>
    );
  }
}

SingleProduct.propTypes = {
  ProductInfo: PropTypes.shape({
    id:PropTypes.number,
    title:PropTypes.string,
    img:PropTypes.string,
    inCart:PropTypes.bool,
    price:PropTypes.number
  }).isRequired,
  addtocart: PropTypes.func.isRequired,
  openModel: PropTypes.func.isRequired
}

const ProductWrapper = styled.div`
  .card{
    border:transparent;
    transition: all 0.3s linear;
  }
  .card-footer{
    background: transparent;
    border-top: transparent;
  }
  &:hover{
    .card{
      box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.2);
      border: 0.04rem solid rgba(0,0,0,0.2);
    }
    .card-footer{
      background: rgba(247,247,247);
    }
  }
  .img-container{
    position:relative;
    overflow:hidden; 
  }
  .img-container:hover .card-link{
    transform: translate(0,0);
  }
  .card-link{
    position: absolute;
    bottom: 0;
    right:0;
    border:none;
    border-radius: 0.5rem 0 0 0;
    background : var(--fontBlue);
    color: var(--white);
    transition: all 0.3s linear;
    transform: translate(100%,100%);
    font-size: 1.9rem;
  }
  .card-link:hover{
    background: var(--navBlue);
    color: rgba(0,0,0);
    cursor:pointer:
  }



`	