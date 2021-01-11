import React from "react";
import styles from "./TruckCell.css";
import pic from "./Images/Food-Delivery-2.jpeg";

//here we add all the properties for the component that we want to show/in the render
//truck in small letters!? what is it refering to?? just a name
//add tag for img, the array int he App.js will then render it, because we passing the whole object

class TruckCell extends React.Component {
  render() {
    return (
      <div className={StyleSheet.container}>
        <h2>{this.props.truck.name}</h2>
        <img className={styles.imgfoodtruck} src={pic} alt="img-food-truck" />
        <h3>{this.props.truck.address}</h3>
        <h4>{this.props.truck.typeOfFood}</h4>
        <h4>{this.props.truck.rating}</h4>
      </div>
    );
  }
}

export default TruckCell;
/*
we use truck here as a parameter as we in App.js has named it:
        <div>
          {this.state.listOfTrucks.map((aTruck) => (
            <TruckCell truck={aTruck} />
          ))}
        </div>
*/
