import React from "react";
import "../components/styles/global.css";
import Header from "../components/header";
import HeroSection from "../components/HeroSection/HeroSection";
// import styled from "styled-components";
import ContentSection from "../components/ContentSection/ContentSection";


// export const ProductPageWrapper = styled.div`

// `;
const IndexPage = () => {
  return (
    <>
        {/* <Header /> */}
        <HeroSection />
        <ContentSection />
    </>

  )
}

export default IndexPage;
