import React from "react";

//here we add all the properties for the component that we want to show/in the render
//add tag for img, the array int he App.js will then render it, because we passing the whole object
class TruckCell extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.truck.name}</h2>
        <h3>{this.props.truck.address}</h3>
        <h4>{this.props.truck.typeOfFood}</h4>
      </div>
    );
  }
}

export default TruckCell;
