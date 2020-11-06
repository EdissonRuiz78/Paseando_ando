import React from "react";
import Rating from "react-rating";

const Ratings = ({ rating, position }) => {
  if (rating === undefined) {
    return (
      <div className={`col-12 col-md-6 mb-3 ${position}`}>
        <h4>Calificaci&oacute;n</h4>
        <p className="lead">Sin Calificaci&oacute;n</p>
      </div>
    );
  }
  return (
    <div className={`col-12 col-md-6 mb-3 ${position}`}>
      <div>
        <h4>Calificaci&oacute;n</h4>
        <span className="mr-2">{rating}</span>
        <Rating
          readonly={true}
          initialRating={rating}
          emptySymbol={<i className="far fa-star"></i>}
          fullSymbol={<i className="fas fa-star"></i>}
        />
      </div>
    </div>
  );
};

export default Ratings;
