import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Schedule = ({ opening_hours }) => {
  const [show, setShow] = useState(false);

  if (opening_hours === undefined) {
    return (
      <div className="col-12 col-md-4 mb-3">
        <p className="lead text-center">No hay horarios disponibles</p>
      </div>
    );
  }

  const { open_now, weekday_text } = opening_hours;
  const open = open_now ? "SI" : "NO";

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="col-12 col-md-4 text-center mb-3">
      <Button variant="primary" onClick={handleShow}>
        Ver Horarios
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Horarios</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="lead">Abierto Ahora: {open}</p>
          {weekday_text.map((day) => (
            <p className="lead" key={day}>
              {day}
            </p>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Schedule;
