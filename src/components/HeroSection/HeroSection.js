import React from 'react';
import styled from 'styled-components';
import "@fontsource/open-sans";
import "@fontsource/poppins";
import Header from '../header';
import BgImage from '../../images/banner.png';
import Button from '../customComponents/CustomButton';
import icon1 from '../../images/icon_group.svg';

const HeroSectionWrapper = styled.div`
    color : #F5F5F7;
    background: url(${BgImage}) no-repeat;
    background-size:100% 100%;
    min-height:60vh;
    @media screen and (max-width: 760px) {
        width:100%;
        text-align:center;
        background: linear-gradient(180deg, #FF3E3E 13.03%, #CB2929 92.69%);
        min-height:40vh;
    }
    @media screen and (max-width: 768px) {
        min-height:35vh;
        background: linear-gradient(180deg, #FF3E3E 13.03%, #CB2929 92.69%);   
    }
    .content {
        display:flex;
    }
    .left-content {
        width:50%;
        @media screen and (max-width: 760px) {
            width:100%;
          }
    }
    .right-content {
        margin:auto auto;
        width:20%;
        .image {
            max-height:200px;
        }
        @media screen and (max-width: 760px) {
            display:none;
          }
    }
    h2 {
        margin-bottom :20px;
        font-family:poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 28px;
        line-height: 1.45;
        @media screen and (max-width: 760px) {
            margin-bottom:10px;
            font-size:20px;
        }
     }
     p {
        font-family:open-sans;
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
                        <Button bgColor={"white"} child={"For Demo"} hoverColor={"white"} hoverBg={"black"} />
                    </div>
                    <div className="right-content">
                        <div>
                            <img className="image1" src={icon1} alt="icon" />
                        </div>
                    </div>
                </div>
            </div>
        </HeroSectionWrapper>
    );
}
export default HeroSection;