import React, { useState } from "react";
import {
  GoogleMap,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

const Directions = ({ center, coordinates, destination, routes }) => {
  const [result, setResult] = useState("");
  const { origin, travelMode } = routes;

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const directionsCallback = (response) => {
    if (response !== null) {
      if (response.status === "OK") {
        setResult(response);
      } else {
        console.log("response: ", response);
      }
    }
  };

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
      <DirectionsService
        options={{
          destination: destination,
          origin: origin,
          travelMode: travelMode,
        }}
        callback={(e) => directionsCallback(e)}
      />
      {result !== null ? (
        <DirectionsRenderer
          options={{
            directions: result,
          }}
        />
      ) : null}
    </GoogleMap>
  );
};

export default React.memo(Directions);
