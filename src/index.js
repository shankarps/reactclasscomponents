import React from "react";
import ReactDOM from "react-dom";
import GobalDisplay from "./display";
import Loader from "./loader.js";

class App extends React.Component {
  //A generic Javascript meethod. similar to Java constructor.
  //props mandatory.
  constructor(props) {
    //similar to Java super(). Calls the base class constructor.
    super(props);
    //init state object
    this.state = { lat: null, long: null, errorMsg: null };
  }

  //redundant - state is also set in the constructor.
  state = { lat: null };

  componentDidMount() {
    console.log("component mount method called");
    //load the eo location
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

  componentDidUpdate() {
    console.log("component update method called");
  }

  //Default mandatory method for every react class based component.
  render() {
    //Conditionally display html
    if (this.state.errorMsg && !this.state.lat) {
      return (
        <div>
          <div>Error message: {this.state.errorMsg}</div>
        </div>
      );
    }
    if (!this.state.errorMsg && this.state.lat) {
      return (
        <GobalDisplay
          lat={this.state.lat}
          long={this.state.long}
        ></GobalDisplay>
      );
    }
    return <Loader message="Waiting for loacation"></Loader>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
