import React, { Fragment } from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image'
import image1 from '../../images/undraw1.png';
import { Link } from 'gatsby';

export const ContentSectionWrapper = styled.div`
padding:32px;
text-align:center;
.middle-content {
    display: flex;
}
.left-col {
    margin:40px;
    width:50vw;
}
.right-col {
    width:50vw;
    .image-card
    {
        img {
            width:400px;
        }  
    }
}
}
`;

const ContentSection = ({
    title,
    description,
    image,
    indexValue
}) => {
    return (
        <ContentSectionWrapper>
            <div className="container">
                {
                    indexValue % 2 !== 0 ? (
                        <Fragment>
                            <div className="middle-content">
                                <div className="left-col">
                                    <h1>{title}</h1>
                                    <p>{description}</p>
                                    <Link to="/">Click here for a demo</Link>
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
                                    <div className="image-card">
                                        <img src={image}></img>
                                    </div>
                                </div>
                                <div className="left-col">
                                    <h1>{title}</h1>
                                    <p>{description}</p>
                                    <Link to="/">Click here for a demo</Link>
                                </div>
                            </div>
                            <hr />
                        </Fragment>

                    )
                }

            </div>

        </ContentSectionWrapper>
    );
}
export default ContentSection;