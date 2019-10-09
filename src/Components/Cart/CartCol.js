import React from 'react';

export default function CartCol() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <div class="col-10 col-lg-2 mx-auto">
          <p class="text-uppercase">product</p>
        </div>
        <div class="col-10 col-lg-2 mx-auto">
          <p class="text-uppercase">name of product</p>
        </div>
        <div class="col-10 col-lg-2 mx-auto">
          <p class="text-uppercase">price</p>
        </div>
        <div class="col-10 col-lg-2 mx-auto">
          <p class="text-uppercase">quantity</p>
        </div>
        <div class="col-10 col-lg-2 mx-auto">
          <p class="text-uppercase">remove</p>
        </div>
        <div class="col-10 col-lg-2 mx-auto">
          <p class="text-uppercase">total</p>
        </div>
      </div>
    </div>
  );
}
