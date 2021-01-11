//import logo from "./logo.svg";
import styles from "./App.css";
import React, { Component } from "react";
//import TruckCell from "./Components/trucks/TruckCell";
import Truck from "./Models/Truck";
import Card from "./Components/trucks/Card";
import { Grid, Button } from "@material-ui/core";
//import React from "react";

//Questions:
// if we want address and rating as heading, where do we put ex address and rating ?

// created an objects for the array
const listOfTrucks = [
  new Truck(
    "Bastard Burgers",
    "Slussen",
    "American",
    "Rating: 4.5",
    "https://img.koket.se/standard-mega/friggin-burger.jpg"
  ),
  new Truck(
    "La Neta",
    "Götgatan",
    "Mexican",
    "Rating: 4.7",
    "https://static.onecms.io/wp-content/uploads/sites/9/2020/03/19/fideos-secos-tacos-FT-RECIPE0420-1.jpg"
  ),
  new Truck(
    "Moshi Moshi",
    "Strandvägen",
    "Japanese",
    "Rating: 3.8",
    "https://godream-cdn9.scdn4.secure.raxcdn.com/media/44940/sushi-foer-2-master.jpg?anchor=center&mode=crop&width=1050&height=650&quality=60"
  ),
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
  // we passed the array into the Grid Container so it would render as many as the element as in the array
  // And now truck is added to the card Card truck={aTruck}
  render() {
    return (
      <div>
        <h1>Josefin's Food Truck Finder</h1>
        <div>
          <Grid container spacing={4}>
            {this.state.listOfTrucks.map((aTruck) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card truck={aTruck} />
              </Grid>
            ))}
          </Grid>
        </div>
        <Button color="primary" onClick={this.onClearArray}>
          Clear Food Cards
        </Button>
        <Button color="secondary" onClick={this.onResetArray}>
          See Food Cards
        </Button>
      </div>
    );
  }
}

export default App;
