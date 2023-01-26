import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
