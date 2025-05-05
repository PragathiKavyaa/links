function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;

    this.displayDetails = function() {
        console.log("Car Details:");
        console.log("Brand: " + this.brand);
        console.log("Model: " + this.model);
        console.log("Year: " + this.year);
    };
}

let myCar = new Car("Toyota", "Corolla", 2023);

myCar.displayDetails();