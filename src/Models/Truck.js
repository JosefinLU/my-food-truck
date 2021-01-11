// here in the modle we structure/modle the object
//we give it properties
//add rating and img + css

class Truck {
  constructor(name, address, typeOfFood, rating, imgTruck) {
    this.name = name;
    this.address = address;
    this.typeOfFood = typeOfFood;
    this.rating = rating;
    this.imgTruck = imgTruck;
  }
}

export default Truck;
