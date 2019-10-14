import React from 'react';
import CartItem from './CartItem';

export default function CartList({ cart, value }) {

  return (
    <div className="container-fluid">
      {cart.map(item => {
        return <CartItem key={item.id} cartinfo={item} value={value} />;
      })}
    </div>
  );
}
