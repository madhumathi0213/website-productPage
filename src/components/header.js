import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import logo from '../images/logo.svg';


export const HeaderWrapper = styled.header`
  background-color:#353839;
  text:white;
  padding:12px;  
  img {
    height:40px;
  }
`;


const Header = () => {
  return (
    <HeaderWrapper>
      <div className="container">
        <Link to="/"><img src={logo} className="img"></img></Link>
      </div>
    </HeaderWrapper>
  );


}

export default Header;
