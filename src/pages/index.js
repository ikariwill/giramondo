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
        <Brand 
          id="bikes" 
          title="Bikes"
          brands={[
            {
              name: 'bianchi',
              url: 'https://www.bianchi.com/?store=global'
            },
            {
              name: 'five',
              url: '/produtos/five-bikes'
            }
        ]}
        />

        <Brand
          id="vestuarios"
          title="Vestuário" 
          brands={[{
                name: 'giramondo',
                url: '/'
          }]}
        />
        <Brand 
          id="componentes"
          title="Componentes" 
          brands={[{
                name: 'giramondo',
                url: '/'
          }]}
        />
        <Brand
          id="acessorios"
          title="Acessórios"
          brands={[{
                name: 'giramondo',
                url: '/'
          }]}
        />

        <Brand
          id="giramondo"
          title="Linha Giramondo"
          brands={[{
                name: 'giramondo',
                url: '/'
          }]}
        />

        <CaseStudies />
        <CTA2 />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
