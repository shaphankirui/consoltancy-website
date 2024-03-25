import Link from "next/link";
import React from "react";
import { SocialLinks } from "../../components/social-links";

function Widget({ title, lists }) {
  return (
    <div className="col-lg-3 col-sm-6 col-12 footer-list">
      <h5 className="title">{title}</h5>
      <ul>
        {lists.map((l, i) => (
          <li key={i}>
            <Link href={`${l.link}`}>
              <a>{l.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const Footer = ({ top_border }) => {
  return (
    <>
      <footer
        className={`theme-footer-one ${top_border ? "top-border" : ""}`}
        id="footer"
      >
        <div className="shape-one" data-aos="zoom-in-right"></div>
        <img
          src="/assets/images/shape/shape-67.svg"
          alt=""
          className="shape-two"
        />
        <div className="top-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-12 about-widget">
                <Link href="/">
                  <a className="logo">
                    <img src="/assets/images/logo/logo2.svg" alt="logo" />
                  </a>
                </Link>
                <a href="#" className="email">
                  Ag-Smartsolutions@gmail.com
                </a>
                <a href="#" className="phone">
                  +254 110427990
                </a>
              </div>
              <Widget
                title="Services"
                lists={[
                  { link: "consultancy", text: "Consultancy" },
                  { link: "consultancy", text: "consultancy" },
                  { link: "food-market", text: "Food Markets" },
                  { link: "food-market", text: " Marketing" },
                  { link: "Job-creation", text: "Job Finding" },
                ]}
              />
              <Widget
                title="About us"
                lists={[
                  { link: "/about-us", text: "About us" },
                  { link: "/our-team", text: "Team" },
                  { link: "our-patners", text: "Patners" },
                  { link: "/blogs", text: "News & Blog" },
                  { link: "/contact", text: "Contact Us" },
                ]}
              />
              <div className="col-lg-3 col-lg-2 col-sm-6 col-12 footer-information">
                <h5 className="title">Our Address</h5>
                <p>
                  PO Box 420 <br />
                  Busia , Kenya
                </p>
                <ul>
                  <SocialLinks />
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="bottom-footer">
            <div className="clearfix">
              <p>
                &copy; {new Date().getFullYear()} copyright all right reserved
              </p>
              {/* <ul>
                <li><a href="#">Privace & Policy.</a></li>
                
                <li><a href="#">Terms.</a></li>
              </ul> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
