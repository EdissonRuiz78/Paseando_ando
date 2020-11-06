import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
} from "react-places-autocomplete";

const Form = ({ setPlace }) => {
  const [address, setAddress] = useState("");

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    setPlace(results[0].place_id);
  };

  return (
    <div className="row justify-content-center mb-3">
      <div className="form-group col-md-8">
        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <input
                {...getInputProps({
                  className: "form-control",
                  type: "text",
                  placeholder: "Busca tu lugar favorito",
                })}
              />
              <div>
                {loading ? <div>Cargando...</div> : null}
                {suggestions.map((suggestion) => {
                  const style = {
                    backgroundColor: suggestion.active ? "#78c2ad" : "#fff",
                  };
                  return (
                    <div
                      key={suggestion.index}
                      {...getSuggestionItemProps(suggestion, { style })}
                    >
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
    </div>
  );
};

export default Form;
