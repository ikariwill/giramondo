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
              url: '/produtos/bianchi',
              src: 'bianchi.png',
            },
            {
              name: 'five',
              url: '/produtos/five-bikes',
              src: 'five.png',
            }
        ]}
        />

        <Brand
          id="vestuarios"
          title="Vestuário" 
          brands={[
            {
              name: 'giramondo',
              src: 'giramondo.png',
            },
            {
              name: 'bianchi',
              src: 'bianchi.png'
            },
            {
              name: 'giro',
              src: 'giro.jpg'
            },
            {
              name: 'cemporcento',
              src: 'cemporcento.jpg'
            },
            {
              name: 'sidi',
              src: 'sidi.jpg'
            },
            {
              name: 'mauro-ribeiro',
              src: 'mauro-ribeiro.jpg'
            },
            {
              name: 'campagnolo',
              src: 'campagnolo.png'
            },
            {
              name: 'castelli',
              src: 'castelli.jpg'
            }
        ]}
        />
        <Brand 
          id="componentes"
          title="Componentes" 
          brands={[
            {
              name: 'campagnolo',
              src: 'campagnolo.png'
            },
            {
              name: 'shimano',
              src: 'shimano.jpg',
            },
            {
              name: 'sram',
              src: 'sram.jpg'
            },
            {
              name: 'continental',
              src: 'continental.jpg',
            },
            {
              name: 'kenda',
              src: 'kenda.jpg',
            },
            //{ deixar continental e kenda juntos}

          ]}
        />
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
