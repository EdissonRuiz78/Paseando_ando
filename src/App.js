import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import apiKey from "./apiKey";

import Form from "./components/Form";
import Header from "./components/Header";
import Name from "./components/Name";
import Schedule from "./components/Schedule";
import Ratings from "./components/Ratings";
import Photos from "./components/Photos";
import Map from "./components/Map";
import Reviews from "./components/Reviews";
import Directions from "./components/Directions";
import Search from "./components/Search";
import Nearby from "./components/Nearby";

function App() {
  const [place, setPlace] = useState("");
  const [results, setResults] = useState([]);
  const [routes, setRoutes] = useState({});
  const [coordinates, setCoordinates] = useState({
    lat: 0,
    lng: 0,
  });
  const {
    name,
    formatted_address,
    photos,
    opening_hours,
    rating,
    reviews,
    geometry,
  } = results;

  navigator.geolocation.getCurrentPosition(function (pos) {
    setCoordinates({
      lat: pos.coords.latitude,
      lng: pos.coords.longitude,
    });
  });

  useEffect(() => {
    if (place === "") {
      return;
    }
    const getDetails = async () => {
      try {
        const baseURL =
          "https://maps.googleapis.com/maps/api/place/details/json?";
        const place_id = place;
        const fields = [
          "name",
          "formatted_address",
          "photos",
          "opening_hours",
          "rating",
          "reviews",
          "geometry",
        ];
        const url = `${baseURL}place_id=${place_id}&fields=${fields}&key=${apiKey}`;
        const response = await axios(url);
        setResults(response.data.result);
      } catch (error) {
        console.log(error.response);
      }
    };
    getDetails();
    // eslint-disable-next-line
  }, [place]);

  return (
    <div className="container app">
      <Header />
      <Form setPlace={setPlace} />
      <div>
        {results.length === 0 ? null : (
          <Fragment>
            <div className="row mb-3">
              <Name name={name} address={formatted_address} />
              <Ratings rating={rating} position="text-center" />
            </div>
            <div className="row justify-content-center mb-3">
              <Schedule opening_hours={opening_hours} />
              <Reviews reviews={reviews} />
              <Nearby location={geometry.location} setPlace={setPlace} />
            </div>
            <Photos photos={photos} name={name} />
          </Fragment>
        )}
      </div>
      <div>
        {geometry === undefined ? (
          <Map coordinates={coordinates} />
        ) : (
          <div>
            <Search name={name} setRoutes={setRoutes} />
            <Directions
              center={geometry.location}
              coordinates={coordinates}
              destination={name}
              routes={routes}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
