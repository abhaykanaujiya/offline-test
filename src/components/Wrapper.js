import React from "react";
import Header from "./header";

const MainWrapper = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default MainWrapper;
