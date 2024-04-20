import React from "react";
import { Circles } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="centering w-full h-full fixed top-0 z-50 backdrop-blur-sm">
      <div className="mr-8">
        <Circles height="130" width="130" color="#CCE1FF" />
      </div>
    </div>
  );
};

export default Loader;
