import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./display";

class App extends React.Component {
  render() {
    //Get the user's browser location
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );

    return <div>Latitude:</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
