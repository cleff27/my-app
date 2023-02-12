import React from "react";
import LikedPanel from "../../containers/likedPanel/LikedPanel";
import HorizontalLine from "../../components/horizontal line/Horizontal_line";
import AboutPanel from "../../containers/about-panel/About_panel";
import RecentPanel from "../../containers/recentPanel/RecentPanel";

const HomePage = () => {
  return (
    <div>
      <LikedPanel />
      <HorizontalLine />
      <RecentPanel />
      <HorizontalLine />
      <AboutPanel />
    </div>
  );
};

export default HomePage;
