import React from "react";
import apiKey from "./apiKey";

const Photos = ({ photos, name }) => {
  const baseURL = "https://maps.googleapis.com/maps/api/place/photo?";
  const width = 200;
  const photo_reference = [];
  const photo = [];

  for (let i = 0; i < 6; i++) {
    photo_reference.push(photos[i].photo_reference);
    photo.push(
      `${baseURL}maxwidth=${width}&photoreference=${photo_reference[i]}&key=${apiKey}`
    );
  }

  return (
    <div className="row justify-content-center mb-3">
      {photo.map((item) => (
        <div className="col-12 col-md-4 mb-3 text-center" key={item}>
          <img className="rounded" src={item} alt={name} />
        </div>
      ))}
    </div>
  );
};

export default Photos;
