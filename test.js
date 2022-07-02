//part 1
class Vehicle {
  constructor(make, model, year) {
    (this.make = make), (this.model = model), (this.year = year);
  }
  honk() {
    return "beep";
  }
  toString() {
    return `My first car was a  ${this.year} ${this.make} ${this.model}`;
  }
}

//part 2
class Car extends Vehicle {
  constructor(make, model, year) {
      super(make, model, year);
    (this.make = make), (this.model = model), (this.year = year);
    this.numWheels = 4;
  }
}

//part 3
class Motorcycle extends Car {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        return 'VROOM'
    }
}

//part 4
class Garage {
    constructor(capacity){
        this.vehicles = []
        this.capacity = capacity;
    }
    add(newVehicle){
        console.log(newVehicle);
    }
}

