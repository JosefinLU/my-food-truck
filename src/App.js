//import logo from "./logo.svg";
//import styles from "./App.module.css";
import React, { Component } from "react";
import TruckCell from "./Components/trucks/TruckCell";
import Truck from "./Models/Truck";
//import React from "react";

// created a objects for the array
const listOfTrucks = [
  new Truck("Bastard Burgers", "Slussen", "American"),
  new Truck("La Neta", "Götgatan", "Mexican"),
  new Truck("Moshi Moshi", "Strandvägen", "Japanese"),
];

class App extends Component {
  constructor(props) {
    super(props);
    // array with trucks
    this.state = {
      listOfTrucks,
    };
  }

  //if we want to clear the array with a button click, we set the arry to empty
  // function to clear the array
  onClearArray = () => {
    this.setState({ listOfTrucks: [] });
  };

  //to reset the state of the array again - reinitialize the inital stat again
  // function to reset the state again
  onResetArray = () => {
    this.setState({ listOfTrucks });
  };

  // everything here is so in renders in the browser
  render() {
    return (
      <div>
        <h1>Josefin's Food Truck Finder</h1>
        <div>
          {this.state.listOfTrucks.map((aTruck) => (
            <TruckCell truck={aTruck} />
          ))}
        </div>
        <button type="button" onClick={this.onClearArray}>
          Clear Array
        </button>
        <button type="button" onClick={this.onResetArray}>
          Reset Array of Food Trucks
        </button>
      </div>
    );
  }
}

export default App;
