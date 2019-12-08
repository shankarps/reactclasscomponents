import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./display";

class App extends React.Component {
  //A generic Javascript meethod. similar to Java constructor.
  //props mandatory.
  constructor(props) {
    //similar to Java super(). Calls the base class constructor.
    super(props);
    //init state object
    this.state = { lat: null, long: null, errorMsg: null };

    //Two callbacks - first for success, second in case of failure
    window.navigator.geolocation.getCurrentPosition(
      //runs asynchronously
      position => {
        console.log(position);
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        });
      },
      err => {
        console.log(err);
        this.setState({ errorMsg: err.message });
      }
    );
  }

  //Default mandatory method for every react class based component.
  render() {
    //Get the user's browser location

    if (this.state.errorMsg && !this.state.lat) {
      return (
        <div>
          <div>Error message: {this.state.errorMsg}</div>
        </div>
      );
    }
    if (!this.state.errorMsg && this.state.lat) {
      return (
        <div>
          <div>Latitude: {this.state.lat}</div>
          <div>Longitude: {this.state.long}</div>
        </div>
      );
    }
    return <div>Loading....</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
