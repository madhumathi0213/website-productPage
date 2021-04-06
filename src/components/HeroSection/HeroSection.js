import React, { Fragment } from 'react';
import styled from 'styled-components';
import logo from '../../images/site-logo.png';

const HeroSectionWrapper = styled.div`
    color : #F5F5F7;
    min-height:55vh;
    background:#353839;
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
     }
     
`;

const HeroSection = () => {
    return (
        <HeroSectionWrapper>
            <div className="container">
                <div className="content">
                    <div className="left-content">
                        <h2>Empower yourself</h2>
                        <p>Pentafox Technologies is a Data age IT product solutions startup focused on transforming all kinds of business to the next level with the power of Cloud embedded with intelligence from wide range of AI/ML capabilities. Let’s discuss over a cup of coffee if you have an interesting usecase to solve!Pentafox Technologies is a Data age IT product solutions startup focused on transforming all kinds of business to the next level with the power of Cloud embedded with intelligence from wide range of AI/ML capabilities</p>
                    </div>
                    <div className="right-content">
                        <img src={logo} className="image"></img>
                    </div>
                </div>
            </div>
        </HeroSectionWrapper>
    );
}
export default HeroSection;