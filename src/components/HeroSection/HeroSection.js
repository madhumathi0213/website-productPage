import React from 'react';
import styled from 'styled-components';
import logo from '../../images/site-logo.png';
import "@fontsource/open-sans";
import "@fontsource/poppins";
import Header from '../header';
import BgImage from '../../images/banner.svg';
import Button from '../customComponents/CustomButton';

const HeroSectionWrapper = styled.div`
    color : #F5F5F7;
    background: linear-gradient(180deg, #FF3E3E 13.03%, #CB2929 92.69%);
    .content {
        display:flex;
    }
    .left-content {
        padding:50px 0 0 0px;
        width:50%;
    }
    .right-content {
        margin:auto auto;
        padding:50px 10px;
        .image {
            max-height:200px;
        }
    }
    h2 {
        margin-bottom :20px;
        font-family:poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 44px;
        line-height: 66px;
     }
     p {
        font-family:open-sans;
        font-size: 16px;
     }
     
`;

const HeroSection = () => {
    return (
        <HeroSectionWrapper>
            <Header />
            <div className="container">
                <div className="content">
                    <div className="left-content">
                        <h2>Products</h2>
                        <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter. </p>
                        <Button bgColor={"white"} child={"For Demo"} hoverColor={"white"} hoverBg={"black"}/>
                    </div>
                    <div className="right-content">
                        <img src={logo} className="image" alt="alterr"></img>
                    </div>
                </div>
            </div>
        </HeroSectionWrapper>
    );
}
export default HeroSection;