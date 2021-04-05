import React, { Fragment } from "react";
import "../components/styles/global.css";
import ContentSection from "../components/ContentSection/ContentSection";
import Header from "../components/header";
import HeroSection from "../components/HeroSection/HeroSection";
import image1 from "../images/undraw1.png";
import image2 from "../images/undraw2.png"


const IndexPage = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <ContentSection
      image={image1}
      title="Heading"
      description="demo description"
      indexValue={1}
      />
      <ContentSection
      image={image2}
      title="Heading"
      description="demo description"
      indexValue={2}
      />
      <ContentSection
      image={image1}
      title="Heading"
      description="demo description"
      indexValue={3}
      />
    </Fragment>
  )
}

export default IndexPage
