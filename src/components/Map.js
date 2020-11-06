import React from "react";
import { GoogleMap } from "@react-google-maps/api";

const Map = ({ coordinates }) => {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={coordinates}
      zoom={8}
    ></GoogleMap>
  );
};

export default React.memo(Map);
