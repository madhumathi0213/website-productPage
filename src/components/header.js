import React from 'react';
import styled from 'styled-components';
// import { Link } from 'gatsby';
import logo from '../images/logo.svg';


export const HeaderWrapper = styled.header`
  text:white;
  padding:12px;  
  img {
    height:40px;
  }
`;


const Header = () => {
  return (
    <HeaderWrapper>
      <div key={1} className="container">
        <img src={logo} className="img" alt=" alter"></img>
        <p></p>
      </div>
    </HeaderWrapper>
  );


}

export default Header;
