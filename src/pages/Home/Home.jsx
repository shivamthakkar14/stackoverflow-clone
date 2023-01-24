import React from "react";
import Leftsidebar from "../../components/Leftsidebar/Leftsidebar";
import Rightsidebar from "../../components/Rightsidebar/Rightsidebar";
import Homemainbar from "../../components/Homemainbar/Homemainbar";

const home = () => {
  return (
    <div className="home-container-1">
      <Leftsidebar />
      <div className="home-container-2">
        <Homemainbar />
        <Rightsidebar />
      </div>
    </div>
  );
};

export default home;
