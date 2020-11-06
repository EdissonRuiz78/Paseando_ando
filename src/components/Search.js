import React, { useState } from "react";

const Search = ({ name, setRoutes }) => {
  const [search, setSearch] = useState({
    origin: "",
    travelMode: "",
  });
  const [error, setError] = useState({
    state: false,
    message: "",
  });
  const { origin, travelMode } = search;

  const handleOnChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (origin.trim() === "") {
      setError({
        state: true,
        message: "Debes seleccionar un origen",
      });
      document.getElementById("origin").focus();
      return;
    }
    if (origin.trim() === name.trim()) {
      setError({
        state: true,
        message: "El origen y destino deben ser diferentes",
      });
      document.getElementById("origin").focus();
      return;
    }
    if (travelMode.trim() === "") {
      setError({
        state: true,
        message: "Debes seleccionar un modo de viaje",
      });
      document.getElementById("travelMode").focus();
      return;
    }

    setError({
      state: false,
      message: "",
    });
    setRoutes(search);
    setSearch({
      origin: "",
      travelMode: "",
    });
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h6 className="lead text-center mb-3">
        ¿Quieres ir? Recuerda debes estar en el mismo país
      </h6>
      <div className="row">
        <div className="form-group col-md-4">
          <input
            className="form-control"
            type="text"
            id="origin"
            placeholder="Punto de origen"
            name="origin"
            value={origin}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div className="form-group col-md-4">
          <select
            className="form-control"
            id="travelMode"
            name="travelMode"
            value={travelMode}
            onChange={(e) => handleOnChange(e)}
          >
            <option value="">Seleccione modo de viaje</option>
            <option value="DRIVING">Automovil</option>
            <option value="TRANSIT">Bus</option>
            <option value="BICYCLING">Bicicleta</option>
            <option value="WALKING">Caminando</option>
          </select>
        </div>
        <div className="form-group col-md-4">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Buscar"
          />
        </div>
      </div>
      {error.state ? (
        <div className="text-center text-white bg-secondary p-2">
          <strong>{error.message}</strong>
        </div>
      ) : null}
    </form>
  );
};

export default Search;
