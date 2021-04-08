import React, { Fragment } from 'react';
import styled from 'styled-components';
import data from '../../../content/products.json';
import image from '../../images/cart.svg';
import "@fontsource/poppins";
import "@fontsource/open-sans";
import Button from '../customComponents/CustomButton';

export const ContentSectionWrapper = styled.div`
    padding-top:32px;
    .middle-content {
        display: flex;
        @media screen and (max-width: 760px) {
            display: flex;
            flex-direction: column;
        }
    }
    .button {
        @media screen and (max-width: 760px) {
            text-align:center;
        }
    }
    
    .left-col {
        width:65vw;
        @media screen and (max-width: 760px) {
            width:100%;
            margin:0px;
        }
    }
    .right-col {
        width:35vw;
        margin:auto;
        .image-card
        {
            img {
                width:280px;
                @media screen and (max-width: 760px) {
                    display:none;                   
                  }
            }
        }
        @media screen and (max-width: 760px) {
            margin:0px;
        }
    }
    .mobile-image {
        visibility:hidden;
        .mobile-image-card
        {
            img {
                width:0px;
                @media screen and (max-width: 760px) {
                    visibility:visible;
                    width:280px;
                    margin-bottom:20px;                     
                }
            }
        }
        @media screen and (max-width: 760px) {
            margin:0px;
        }
    }
    h3 {
        font-weight: 500;
        font-size: 44px;
        line-height: 66px;
        color: #000000;
        font-family:poppins;
        font-size: 28px;
        @media screen and (max-width: 760px) {
            margin-bottom:16px;
            font-size: 20px;
            width:100%;
        }
    }
    p {
        font-family : open-sans;
        font-size: 14px;
        line-height: 1.45;
        color: #19181d;
        margin: 0px 0px 20px;
        @media screen and (max-width: 760px) {
            width:100%;
            margin-bottom:0px;
        }
    }
`;
const ContentSection = () => {
    return (
        <ContentSectionWrapper>
            <div key={1} className="container">
                {
                    data.map((item, i) => {
                        return (
                            i % 2 === 0 ? (
                                <Fragment>
                                    <div key={123} className="middle-content">
                                        <div className="left-col">
                                            <h3>{item.title}</h3>
                                            <div className="mobile-image">
                                                <div className="mobile-image-card">
                                                    <img src={image} alt="logo"></img>
                                                </div>
                                            </div>
                                            <p>{item.content}</p>
                                            <div className="button">
                                                {/* <Button bgColor={"white"} child={"View Details"} hoverColor={"white"} hoverBg={"black"} /> */}
                                                <Button bgColor={"white"} child={"Know more"} hoverColor={"white"} hoverBg={"black"} />
                                            </div>
                                        </div>
                                        <div className="right-col">
                                            <div className="image-card">
                                                <img src={image} alt="logo"></img>
                                            </div>
                                        </div>
                                    </div>

                                    <hr />
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <div className="middle-content">
                                        <div className="right-col">
                                            <div className="image-card" >
                                                <img src={image} alt="logo"></img>
                                            </div>
                                        </div >
                                        <div className="left-col">
                                            <h3>{item.title}</h3>
                                            <div className="mobile-image">
                                                <div className="mobile-image-card">
                                                    <img src={image} alt="logo"></img>
                                                </div>
                                            </div>
                                            <p>{item.content}</p>
                                            <div className="button">
                                                {/* <Button bgColor={"white"} child={"View Details"} hoverColor={"white"} hoverBg={"black"}/> */}
                                                <Button bgColor={"white"} child={"Know more"} hoverColor={"white"} hoverBg={"black"} />
                                            </div>
                                        </div>
                                    </div >
                                    <hr />
                                </Fragment >
                            )
                        )
                    })
                }
            </div>
        </ContentSectionWrapper >
    );
}
export default ContentSection;