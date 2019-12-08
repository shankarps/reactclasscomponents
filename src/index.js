import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./display";

class App extends React.Component {
  //A generic Javascript meethod. similar to Java constructor.
  //props mandatory.
  constructor(props) {
    //similar to Java super(). Calls the base class constructor.
    super(props);
    //init state
    this.state = { lat: null };

    //Two callbacks - first for success, second in case of failure
    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position.coords.latitude);
        this.setState({ lat: position.coords.latitude });
      },
      err => console.log(err)
    );
  }

  //Default mandatory method for every react class based component.
  render() {
    //Get the user's browser location

    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
