import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import logo from '../images/site-logo.png';


export const HeaderWrapper = styled.header`
  background: transparent;
  left: 0;
  padding: 12px;
  background-image: linear-gradient(to bottom, rgba(255,0,0,0.2), rgba(255,0,0,0.4));
  @media(max-width: 991px) {
    top: 32px;
    min-height: 72px;
  }
  a {
    display: inline-block;
  }
  img {
    height:40px;
  }
`;


const Header = () => {
  return (
    <HeaderWrapper>
      <div className="m-auto w-full sm:container">
        <Link to="/"><img src={logo} className="img"></img></Link>
      </div>
    </HeaderWrapper>
  );


}

export default Header;
