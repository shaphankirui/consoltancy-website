import Link from 'next/link';
import React from 'react';
import CartAction from '../component/cart-action';
import ElementMenuDrop from '../component/dropdown-menus/element-drop';
import FeatureMenuDrop from '../component/dropdown-menus/feature-drop';
import HomeMenuDrop from '../component/dropdown-menus/home-drop';
import NewsMenuDrop from '../component/dropdown-menus/news-drop';
import PagesMenuDrop from '../component/dropdown-menus/pages-drop';
import HeaderSearch from '../component/header-search';
import MenuSocial from '../component/menu-social';

const HeaderLightTwo = ({ dark }) => {
  return (
    <>
      <div className={`shrt-menu shrt-menu-two ${dark ? 'dark-bg text-light' : 'light-bg text-dark'} mt-70`}>
        <div className="d-flex justify-content-between align-items-center main-header">
          <div className="logo">
            <Link href="/">
              <a>
                <img src="/assets/images/logo/logo8.svg" alt="" />
              </a>
            </Link>
          </div>
          <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
            <div className="nav-container">
              <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
                <i className="flaticon-setup"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent2">
                <ul className="navbar-nav">
                  {/* home dropdown menu start */}
                  <HomeMenuDrop />
                  {/* home dropdown menu end */}

                  {/* pages dropdown menu start */}
                  <PagesMenuDrop />
                  {/* pages dropdown menu end */}

                  {/* Feature dropdown menu start */}
                  <FeatureMenuDrop />
                  {/* Feature dropdown menu end */}

                  {/* element dropdown menu start */}
                  <ElementMenuDrop />
                  {/* element dropdown menu end */}

                  {/* news dropdown menu start */}
                  <NewsMenuDrop />
                  {/* news dropdown menu end */}
                </ul>
              </div>
            </div>
          </nav>

          {/* <!-- Search/cart Option/Social icon --> */}
          <div className="widget-container">
            <ul className="d-flex align-items-center">
              <HeaderSearch />
              <CartAction dark={dark} />
              <MenuSocial />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderLightTwo;