import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from "./Context";

import App from './App';

const Root = () => (
  <ProductProvider>
    <Router>
      <App />
    </Router>
  </ProductProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
