import PropTypes from "prop-types";
import React from "react";
import Header from "./header";
import { Helmet } from "react-helmet";
import ReactTooltip from "react-tooltip";
import { CookiesProvider } from "react-cookie";
import { Location } from "@reach/router";
import Footer from "./Footer";
import Cookies from "./Cookies";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-default">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/css/line-awesome.min.css"
        />
      </Helmet>
      <CookiesProvider>
        <Cookies />
      </CookiesProvider>
      <ReactTooltip className="text-primary bg-primary" />
      <Header />
      <main className="text-default ">{children}</main>
      <Location>{(locationProps) => <Footer {...locationProps} />}</Location>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
