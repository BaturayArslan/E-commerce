import React from 'react';
import { ProductConsumer } from '../Context';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ButtonWrapper } from './ButtonWrapper';

export default class Model extends React.Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          if(value.isModelOpen) {
            const { id, price, title, img, company } = {...value.detailProduct};
            console.log(value.detailProduct)
            return(
             <ModelWrapper>
               <div className="container">
                 <div className="row">
                   <div  id="model-col" className="col-9 col-md-6 col-lg-3 mx-auto text-center ">
                      <h3 className= "text-capitalize mb-0"> { title }</h3>
                      <div className="img-container">
                        <img src={img} alt="phone" className="img-fluid" />
                      </div>
                      <h5> Price: ${ price } </h5>

                      <Link to="/">
                        <ButtonWrapper onClick={() => {value.closeModel();}}>
                          Return Product
                        </ButtonWrapper>
                      </Link>

                      <Link to="/cart">
                        <ButtonWrapper cart className="mt-1" onClick={() => { value.closeModel(); }} >
                          Cart
                        </ButtonWrapper>
                      </Link>

                   </div>
                 </div>
               </div>
             </ModelWrapper> 
            );
          }else{
            return null;
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModelWrapper = styled.div `
  position: fixed;
  top:0;
  right:0;
  left:0;
  bottom:0;
  background: rgba(0,0,0,0.2);
  display:flex;
  justify-content:center;
  align-items: center;
  #model-col{
    background:white;
  }
`