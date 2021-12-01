import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing1/Hero";
import Services from "../sections/landing1/Services";
import Brand from "../sections/landing2/Brand";

import CaseStudies from "../sections/landing1/CaseStudies";
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
        {/* <Brand 
          id="bikes" 
          title="Bikes"
          brands={[
            {
              name: 'bianchi',
              url: '/produtos/bianchi',
              src: 'bianchi.png',
            },
            {
              name: 'five',
              url: '/produtos/five-bikes',
              src: 'five.png',
            }
        ]}
        /> */}

        <Brand
          id="acessorios"
          title="Acessórios"
          brands={[
            {
              name: 'elite',
              src: 'elite.jpg',
            },

            {
              name: 'garmin',
              src: 'garmin.jpg',
            },
            {
              name: 'look',
              src: 'look.jpg',
            },

            {
              name: 'topeak',
              src: 'topeak.jpg',
            },

            {
              name: 'parktool',
              src: 'parktool.jpg',
            },
            
        
        ]}
        />

        {/* <CaseStudies /> */}
        <CTA2 />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
