import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing1/Hero";
import Services from "../sections/landing1/Services";
import Brand from "../sections/landing2/Brand";
import Content2 from "../sections/landing2/Content";
import Feature from "../sections/landing1/Feature";

import CaseStudies from "../sections/landing1/CaseStudies";
import ProductRelated from "../sections/landing1/ProductRelated";
import CTA2 from "../sections/landing1/CTA2";

const IndexPage = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          theme: "dark",
        }}
        footerConfig={{
          style: "style1", //style1, style2
        }}
      >
        <Hero />
        <Services />
        <Content2 />
        <Brand />
        <ProductRelated />
        <Feature />
        <CaseStudies />
        <CTA2 />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
