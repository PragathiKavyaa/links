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

    this.getAge = function() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    };
}

let myCar = new Car("Ford", "Mustang", 2018);

myCar.displayDetails();

console.log("Car Age: " + myCar.getAge() + " years");