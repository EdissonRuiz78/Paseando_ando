import React, { useState, useEffect } from "react";
import axios from "axios";
import apiKey from "../apiKey";
import { Button, Modal } from "react-bootstrap";

import Ratings from "./Ratings";
import Photo from "./Photo";

const Nearby = ({ location, setPlace }) => {
  const [nearbyPlaces, setNearbyPlaces] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const getNearbyPlaces = async () => {
      try {
        const baseURL =
          "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
        const locations = `${location.lat},${location.lng}`;
        const radius = 1500;
        const url = `${baseURL}location=${locations}&radius=${radius}&key=${apiKey}`;
        const response = await axios(url);
        setNearbyPlaces(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getNearbyPlaces();
  }, [location]);

  const handleOnClick = (place_id) => {
    setPlace(place_id);
    handleClose();
  };

  return (
    <div className="col-12 col-md-4 text-center mb-3">
      <Button variant="primary" onClick={handleShow}>
        Lugares Cercanos
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Lugares Cercanos
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {nearbyPlaces.map((place) => (
            <div className="border border-primary mb-3 p-2">
              <div className="row">
                <div className="col-12 col-md-6">
                  <h6>Nombre: {place.name} </h6>
                  <Photo photos={place.photos} name={place.name} />
                </div>
                <div className="col-12 col-md-6 mt-5">
                  <Ratings rating={place.rating} position="" />
                  <Button
                    className="ml-2"
                    onClick={(e) => handleOnClick(place.place_id)}
                  >
                    Ir a {place.name}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Nearby;
