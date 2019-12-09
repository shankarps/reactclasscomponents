import React from "react";

const Spinner = props => {
  return (
    <div class="ui active dimmer">
      <div class="ui big text loader">{props.message}</div>
    </div>
  );
};

//Set default props for the component - used when the component is loaded without a prop.
Spinner.defaultProps = { message: "Loading page...." };

export default Spinner;
