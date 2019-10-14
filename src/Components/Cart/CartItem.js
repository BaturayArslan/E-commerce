import React from 'react';
import { BlackButton } from '../ButtonWrapper';

export default function CartItem({ cartinfo , value }) {
  const { price, img, title, count, total, id } = cartinfo;
  const { increment, decrement, removeItem } = value;

  return (
    <div className="row my-2 text-center">

      <div className="col-10 col-lg-2">
        <img src={img} className="img-fluid" alt="phone" style= {{width: "5 rem", height: "5 rem"}} />
      </div>

      <div className="col-10 col-lg-2">
        <div className="d-lg-none d-inline">
          <span> <strong> Product Name: </strong> </span>
        </div>
        { title }
      </div>

      <div className="col-10 col-lg-2">
        <div className="d-lg-none d-inline">
          <span> <strong> Price:</strong> </span>
        </div>
        ${ price } 
      </div>

      <div className="col-10 col-lg-2">
        <div className="d-lg-inline d-block">
          <BlackButton onClick={() => { decrement(id); }} >
            -
          </BlackButton>

          <BlackButton>
            { count }
          </BlackButton>

          <BlackButton onClick={() => { increment(id); }} >
            +
          </BlackButton>
       </div>
      </div>

      <div className="col-10 col-lg-2">
        <div className="remove-icon">
          <i className="fas fa-trash" onClick={() => { removeItem(id); }}  ></i>
        </div>
      </div>

      <div className="col-10 col-lg-2">
        { total }
      </div>

    </div>
  );  
}
