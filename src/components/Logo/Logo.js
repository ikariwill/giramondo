import React from "react";
import Link from "next/link";

import imgL1Logo from "../../assets/image/logo-main-black.png";
import giraMondoBikeShopImg from "../../assets/image/giramondo-bikeshop.png"

const Logo = ({ alternative = false, white, height, className = "", ...rest }) => {
  return (
    <Link href="/">
      <a className={`d-block ${className}`} {...rest}>
        {white ? (
          <img className="logo-main-dark" src={alternative ? giraMondoBikeShopImg : imgL1Logo} alt="" />
        ) : (
            <img className="logo-main" src={alternative ? giraMondoBikeShopImg : imgL1Logo} alt="" />
        )}
      </a>
    </Link>
  );
};

export default Logo;
