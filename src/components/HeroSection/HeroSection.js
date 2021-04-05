import React, { Fragment } from 'react';
import styled from 'styled-components';
import logo from '../../images/site-logo.png';

const HeroSectionWrapper = styled.div`
    min-height:50vh;
    // background:pink;
    display:flex;
    width:100%;
    background-image: linear-gradient(to bottom, rgba(255,0,0,0.4), rgba(255,0,0,0.5));
    .left-content {
        width:50vw;
        margin:auto;
    }
    
    .right-content {
        width:50wv;
        margin:auto;

        .image {
            max-height:200px;
        }
    }
`;

const HeroSection = () => {
    return (
        <HeroSectionWrapper>
            <div className="left-content">
                <h1>Products</h1>
                {/* <h2>Portfolio section</h2> */}
            </div>
            <div className="right-content">
                <img src={logo} className="image"></img>
            </div>
        </HeroSectionWrapper>
    );
}
export default HeroSection;