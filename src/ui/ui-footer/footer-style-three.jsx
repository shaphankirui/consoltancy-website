import Link from "next/link";
import React from "react";
import { SocialLinks } from "../../components/social-links";

const FooterStyleThree = () => {
  return (
    <footer className="theme-footer-three" data-aos="fade-up">
      <div className="container">
        <div className="logo">
          <Link href="/">
            <a>
              <img src="/assets/images/logo/logo3.svg" alt="" />
            </a>
          </Link>
        </div>
        <p>
          <a href="#" className="email">
            Ag-Smartsolutions@gmail.com
          </a>
        </p>
        <p>
          <a href="#" className="phone">
            +254 110427990
          </a>
        </p>
        <ul className="social-icon">
          <SocialLinks />
        </ul>
        <p className="copy-right">
          &copy; {new Date().getFullYear()} copyright all right reserved
        </p>
      </div>
    </footer>
  );
};

export default FooterStyleThree;
