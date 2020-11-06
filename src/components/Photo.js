import React from "react";
import apiKey from "../apiKey";

const Photo = ({ photos, name }) => {
  const baseURL = "https://maps.googleapis.com/maps/api/place/photo?";
  const width = 200;
  const photo = `${baseURL}maxwidth=${width}&photoreference=${photos[0].photo_reference}&key=${apiKey}`;

  return <img className="rounded" src={photo} alt={name} />;
};

export default Photo;
