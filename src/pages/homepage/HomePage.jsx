import React from "react";
import Panels from "../../containers/panels/Panels";
import HorizontalLine from "../../components/horizontal line/Horizontal_line";
import AboutPanel from "../../containers/about-panel/About_panel";

const HomePage = () => {
  return (
    <div>
      <Panels />
      <HorizontalLine />
      <Panels />
      <HorizontalLine />
      <AboutPanel />
    </div>
  );
};

export default HomePage;
