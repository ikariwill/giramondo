import React, { useState, useEffect, useContext, useRef } from "react";
import Head from "next/head";

import styled, { ThemeProvider } from "styled-components";
import AOS from "aos";

import Header from "../Header";
import Footer from "../Footer";

import ModalVideo from "../ModalVideo";

import GlobalContext from "../../context/GlobalContext";

import GlobalStyle from "../../utils/globalStyle";

import imgFavicon from "../../assets/favicon.png";

import { get, merge } from "lodash";

// the full theme object
import { theme as baseTheme } from "../../utils";

const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
  z-index: 9999999999;
  opacity: 1;
  visibility: visible;
  transition: all 1s ease-out 0.5s;
  &.inActive {
    opacity: 0;
    visibility: hidden;
  }
`;

// options for different color modes
const modes = { light: "light", dark: "dark" };

// merge the color mode with the base theme
// to create a new theme object
const getTheme = (mode) =>
  merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
  });

const Layout = ({ children, pageContext }) => {
  const gContext = useContext(GlobalContext);

  const [visibleLoader, setVisibleLoader] = useState(true);

  useEffect(() => {
    AOS.init({ once: true });
    setVisibleLoader(false);
  }, []);

  // Navbar style based on scroll
  const eleRef = useRef();

  useEffect(() => {
    window.addEventListener(
      "popstate",
      function (event) {
        // The popstate event is fired each time when the current history entry changes.
        gContext.closeOffCanvas();
      },
      false
    );
    window.addEventListener(
      "pushState",
      function (event) {
        // The pushstate event is fired each time when the current history entry changes.
        gContext.closeOffCanvas();
      },
      false
    );
  }, [gContext]);

  if (pageContext.layout === "bare") {
    return (
      <ThemeProvider
        theme={
          gContext.themeDark ? getTheme(modes.dark) : getTheme(modes.light)
        }
      >
        <div data-theme-mode-panel-active data-theme="light">
          <GlobalStyle />
          <Head>
            <meta charset="utf-8"/>
            <title>GIRAMONDO BIKESHOP</title>
            <meta name="description" content="Giramondo Bikeshop a sua nova experiência no ciclismo"/>
            <meta name="image" content="https://i.imgur.com/WiF8rPz.jpg"/>
            <meta itemprop="name" content="GIRAMONDO BIKESHOP"/>
            <meta itemprop="description" content="Giramondo Bikeshop a sua nova experiência no ciclismo"/>
            <meta itemprop="image" content="https://i.imgur.com/WiF8rPz.jpg"/>
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:title" content="GIRAMONDO BIKESHOP"/>
            <meta name="twitter:description" content="Giramondo Bikeshop a sua nova experiência no ciclismo"/>
            <meta name="og:title" content="GIRAMONDO BIKESHOP"/>
            <meta name="og:description" content="Giramondo Bikeshop a sua nova experiência no ciclismo"/>
            <meta name="og:image" content="https://i.imgur.com/WiF8rPz.jpg"/>
            <meta name="og:url" content="https://giramondobike.com"/>
            <meta name="og:site_name" content="GIRAMONDO BIKESHOP"/>
            <meta name="og:locale" content="pt_BR"/>
            <meta name="og:type" content="website"/>
            <meta name="keywords" content="giramondo bikeshop, bianchi brasil, bianchi moema, bianchi são paulo, sense moema, sense são paulo, bike elétrica Five"></meta>
            <link rel="icon" type="image/png" href={imgFavicon} />
          </Head>
          <Loader id="loading" className={visibleLoader ? "" : "inActive"}>
            <div className="load-circle">
              <span className="one"></span>
            </div>
          </Loader>
          <div className="site-wrapper overflow-hidden" ref={eleRef}>
            {children}
            <Footer isDark={gContext.footerDark} />
          </div>

          <ModalVideo />
        </div>
      </ThemeProvider>
    );
  }

  return (
    <>
      <ThemeProvider
        theme={
          gContext.themeDark ? getTheme(modes.dark) : getTheme(modes.light)
        }
      >
        <div data-theme-mode-panel-active data-theme="light">
          <GlobalStyle />
          <Head>
            <title>GIRAMONDO BIKE SHOP</title>
            <link rel="icon" type="image/png" href={imgFavicon} />
          </Head>
          <Loader id="loading" className={visibleLoader ? "" : "inActive"} />
          <div className="site-wrapper overflow-hidden" ref={eleRef}>
            <Header isDark={gContext.headerDark} />
            {children}

            <Footer isDark={gContext.footerDark} />
          </div>

          <ModalVideo />
        </div>
      </ThemeProvider>
    </>
  );
};

export default Layout;
