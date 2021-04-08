import React from 'react';
import styled from 'styled-components';
// import { Link } from 'gatsby';
import logo from '../images/logo.svg';
import menu_icon from '../images/menu_icon.svg';


export const HeaderWrapper = styled.header`
  display:flex;
  width:100%;
  text:white;
  padding:20px 0 40px 0;
  .img {
    height:40px;
  }
  .menu {
      width:20px;
      float:right;
  }
  
`;


const Header = () => {
  return (
    <HeaderWrapper>
      <div key={1} className="container">
        <img src={logo} className="img" alt=" alter"></img>
        <img src={menu_icon} className="menu" alt="alter"></img>
      </div>
    </HeaderWrapper>
  );


}

export default Header;
