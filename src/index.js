import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./display";

const App = () => {
  //Get the user's browser location
  window.navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    err => console.log(err)
  );
  return <div>Hi there</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
