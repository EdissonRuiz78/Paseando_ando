import React from "react";

const Name = ({ name, address }) => {
  return (
    <div className="col-12 col-md-6 text-center">
      <h4>Nombre: {name}</h4>
      <p>Direcci&oacute;n: {address}</p>
    </div>
  );
};

export default Name;
