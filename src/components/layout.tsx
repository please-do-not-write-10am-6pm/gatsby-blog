import * as React from "react";
import { Link } from "gatsby";
import * as layout from "./layout.module.scss";

interface props {
  pageTitle?: string;
  children?: string;
}

const Layout = ({ pageTitle, children }: props) => {
  return (
    <div className={layout.container}>
      <nav>
        <ul className={layout.navLinks}>
          <li className={layout.navLinkItem}>
            <Link to="/" className={layout.navLinkText}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={layout.heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
