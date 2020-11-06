import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Reviews = ({ reviews }) => {
  const [show, setShow] = useState(false);

  if (reviews === undefined) {
    return (
      <div className="col-12 col-md-4 mb-3">
        <p className="lead text-center">No Comentarios</p>
      </div>
    );
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="col-12 col-md-4 text-center mb-3">
      <Button variant="primary" onClick={handleShow}>
        Comentarios
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
            Comentarios
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {reviews.map((review) => (
            <div
              key={review.author_url}
              className="border border-primary mb-3 p-2"
            >
              <h6>
                Autor: {review.author_name} ||{" "}
                <span className="text-muted">
                  {" "}
                  {review.relative_time_description}
                </span>{" "}
                ||{" "}
                <span className="text-muted">
                  {" "}
                  Calificaci&oacute;n: {review.rating}
                </span>
              </h6>
              <p className="lead">{review.text}</p>
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

export default Reviews;
