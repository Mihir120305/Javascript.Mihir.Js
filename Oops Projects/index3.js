class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    getInfo() {
        return `Make: ${this.make}, Model: ${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model);
        this.year = year;
    }
    getInfo() {
        return `${super.getInfo()}, Year: ${this.year}`;
    }
}

let myCar = new Car('Toyota', 'Camry', 2020);
console.log(myCar.getInfo());

/*The output of the console.log(myCar.getInfo()) statement will be:

Make: Toyota, Model: Camry, Year: 2020

This is because the myCar object is an instance of the Car class, which extends the Vehicle class. The getInfo() method in the Car class returns the string generated by the getInfo() method in the Vehicle class, along with the year of the car. */