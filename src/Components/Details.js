import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import { Link } from 'react-router-dom';
import  { ButtonWrapper }  from './ButtonWrapper';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ProductConsumer> 
        {value => {
          const productObj = value.storeProducts.find(object => {
            if(object.id === parseInt(this.props.match.params.id))
              return object;
          });
          console.log(this.props);
          const {title, img, inCart, price, company, info, id} = {...productObj};
   

          return(
            <div className="container">
              <div className="row">

                {/* Main Title */}
                <div className="col-10 mx-auto">
                  <h3 className="text-title text-center my-4"> {title} </h3>
                </div>

                {/*  image  */}
                <div className="col-10 col-md-6 mx-auto">
                  <div className="img-container">
                    <img src={ img }alt="phone" className="img-fluid" />
                  </div>
                </div>

                {/* Product info Part and Buttons */}
                <div className="col-10 col-md-6 mx-auto">
                <h4 className="text-blue"> <strong> Price: ${price} </strong> </h4>
                  <h3 className="text-title mt-3"> Company: {company}</h3>
                  <h2 className="mt-3"> Some info about Product:</h2>
                  <h5 className="text-muted lead ">{info}</h5>
                  <Link to="/">
                    <ButtonWrapper>
                      Return Product
                    </ButtonWrapper>
                  </Link>
                  <ButtonWrapper 
                  cart
                  disabled={inCart? true:false} 
                  onClick={() => {value.addToCart(id); value.openModel(id)}} 
                  >
                    {inCart? "In Cart": "Add To Cart"}
                  </ButtonWrapper>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
