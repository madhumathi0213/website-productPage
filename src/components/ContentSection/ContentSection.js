import React, { Fragment } from 'react';
import styled from 'styled-components';
import data from '../../../content/products.json';
import { Link } from 'gatsby';
import image from '../../images/cart.svg';
import Button from '../customComponents/CustomButton'

export const ContentSectionWrapper = styled.div`
    padding-top:32px;
    .middle-content {
        display: flex;
    }
    .left-col {
        width:60vw;
        margin:auto;
    }
    .right-col {
        width:40vw;
        .image-card
        {
            img {
                width:300px;
            }  
        }
    }
    h3 {
        font-size: 28px;
        line-height: 1.45;
        margin: 0px 0px 8px;
        font-weight: 500;
    }
    p {
        font-size: 14px;
        line-height: 1.45;
        color: #19181d;
        margin: 0px 0px 20px;
    }
`;
const ContentSection = () => {
    return (
        <ContentSectionWrapper>
            <div className="container">
                {
                    data.map((item, i) => {
                        return (
                            i % 2 == 0 ? (
                                <Fragment>
                                    <div className="middle-content">
                                        <div className="left-col">
                                            <h3>{item.title}</h3>
                                            <p>{item.content}</p>
                                            <div className="button">
                                                <Button bgColor={"white"} child={"View Details"} hoverColor={"white"} hoverBg={"black"} />
                                                <Button bgColor={"white"} child={"Demo"} hoverColor={"white"} hoverBg={"black"}/>
                                            </div>
                                        </div>
                                        <div className="right-col">
                                            <div className="image-card">
                                                <img src={image}></img>
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
                                                <img src={image}></img>
                                            </div>
                                        </div >
                                        <div className="left-col"  style={{marginLeft:"50px"}}>
                                            <h3>{item.title}</h3>
                                            <p>{item.content}</p>
                                            <div className="button">
                                            <Button bgColor={"white"} child={"View Details"} hoverColor={"white"} hoverBg={"black"}/>
                                            <Button bgColor={"white"} child={"Demo"} hoverColor={"white"} hoverBg={"black"}/>
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