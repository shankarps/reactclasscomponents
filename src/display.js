import "./display.css";
import React from "react";

const getHemisphere = lat => {
  if (lat > 0) return "Northern Hemisphere";
  else return "Southern Hemisphere";
};
const GobalDisplay = props => {
  console.log(props);
  return (
    <div className="global-display">
      <div>Latitude: {props.lat}</div>
      <div>Longitude: {props.long}</div>
      <div>
        <h3>
          <i className="icon-style huge icon globe"></i> Hemisphere:
          {getHemisphere(props.lat)}
        </h3>
      </div>
    </div>
  );
};

export default GobalDisplay;
