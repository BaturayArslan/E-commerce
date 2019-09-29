import React, { Component } from 'react';
import { ProductConsumer } from '../Context';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ProductConsumer> 
        {value => {
          const {title, img, inCart, price, company, info} = {...value.detailProduct};
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

                {/* Product info Part */}
                <div className="col-10 col-md-6 mx-auto">
                  <h4 class="text-blue"> <strong> Price: ${price} </strong> </h4>
                  <h3 class="text-title mt-3"> Company: {company}</h3>
                  <h2 class="mt-3"> Some info about Product:</h2>
                  <h5 class="text-muted lead ">{info}</h5>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
