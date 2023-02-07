import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children, theme, toggleTheme, themeStyles }) {
  return (
    <React.Fragment>
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        themeStyles={themeStyles}
      />
      <div className="content relative">{children}</div>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
