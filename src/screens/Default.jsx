import React from "react";
import Logo from "./_components/Logo";
import Description from "./_components/Description";
import OpenLink from "../components/OpenLink";
import Contador from "./_components/Contador";

const Default = () => (
  <div className="app-container">
    <header className="app-header">
      <Contador />
      <Logo width={50} height={50} />
      <Description />
      <div className="links-container">
        <OpenLink title="Learn React" url="https://react.dev/" />
        <OpenLink
          title="Mi proyecto React (GitHub)"
          url="https://github.com/dheeyi/desarrollo-frontend-react"
        />
      </div>
    </header>
  </div>
);

export default Default;
