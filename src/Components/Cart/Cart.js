import React, { PureComponent } from 'react';
import Title from '../Title';
import CartCol from './CartCol';
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
