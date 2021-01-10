//import logo from "./logo.svg";
//import styles from "./App.module.css";
import React, { Component } from "react";
import foodTruckImage from "./Images/food-truck-img.jpg";
//import React from "react";

// created a variable for the array
const listOfTrucks = ["Truck 1", "Truck 2", "Truck 3"];

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
        <ul>
          {this.state.listOfTrucks.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <button type="button" onClick={this.onClearArray}>
          Clear Array
        </button>
        <button type="button" onClick={this.onResetArray}>
          Reset Array of Food Trucks
        </button>
        <img
          src={foodTruckImage}
          alt="foodTruckImage"
          width="1500"
          height="1000"
        />
      </div>
    );
  }
}

export default App;
