import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  border: 0.1rem solid var(--fontBlue);
  border-radius: 0.7rem ;
  background: transparent;
  padding: 0.3rem 1.2rem;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: bold; 
  font-size: 1.4rem;
  cursor:pointer;
  color: var(--fontBlue);
  transition: all 0.3s linear;
  &:hover{
    background: var(--fontBlue);
    border-color: white;
    color: var(--navBlue);
  } 
  &:focus{
    outline: none;
  }
`