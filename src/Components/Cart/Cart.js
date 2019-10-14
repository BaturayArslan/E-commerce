import React, { PureComponent } from 'react';
import Title from '../Title';
import CartCol from './CartCol';
import CartList from './CartList';
import { ProductConsumer } from '../../Context';

export default class Cart extends PureComponent {
  render() {
    return (
      <ProductConsumer>
        {value => {
          if (value.cart.length > 0) {
            return (
              <div>
                <Title name="your" title="cart" />
                <CartCol />
                <CartList cart={value.cart} value={value} />
              </div>
            );
          } else {
            return <Title name="your" title="cart is empty." />;
          }
        }}
      </ProductConsumer>
    );
  }
}
