import Link from 'next/link';
import React from 'react';

const PagesMenuDrop = () => {
  return (
    <li className="nav-item dropdown position-relative">
      <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Pages.</a>
      <ul className="dropdown-menu">
        <li className="dropdown-submenu dropdown">
          <a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">About Us</a>
          <ul className="dropdown-menu">
            <li>
              <Link href="/about-us-agency">
                <a className="dropdown-item">About Us agency</a>
              </Link>
            </li>
            <li>
              <Link href="/about-us-agency">
                <a className="dropdown-item">About Us standard</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="dropdown-submenu dropdown">
          <a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Project</a>
          <ul className="dropdown-menu">
            <li>
              <Link href="/project-full-width">
                <a className="dropdown-item">Project Full width</a>
              </Link>
            </li>
            <li>
              <Link href="/project-minimal">
                <a className="dropdown-item">Project minimal</a>
              </Link>
            </li>
            <li className="dropdown-submenu dropdown">
              <a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Project Details</a>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/project-details-standard">
                    <a className="dropdown-item">Project Details standard</a>
                  </Link>
                </li>
                <li>
                  <Link href="/project-details-agency">
                    <a className="dropdown-item">Project Details agency</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="dropdown-submenu dropdown">
          <a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Services</a>
          <ul className="dropdown-menu">
            <li>
              <Link href="/consultancy">
                <a className="dropdown-item">Service creative</a>
              </Link>
            </li>
            <li>
              <Link href="/service-minimal">
                <a className="dropdown-item">service minimal</a>
              </Link>
            </li>
            <li>
              <Link href="/food-market">
                <a className="dropdown-item">Food Market</a>
              </Link>
            </li>
            <li>
              <Link href="/Job-creation">
                <a className="dropdown-item">Job Creation</a>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  );
};

export default PagesMenuDrop;