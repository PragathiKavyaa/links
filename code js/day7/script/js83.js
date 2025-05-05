function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;


    this.displayDetails = function() {
        console.log("Brand: " + this.brand + ", Model: " + this.model + ", Year: " + this.year);
    };

 
    this.getAge = function() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    };

    this.updateModel = function(newModel) {
        this.model = newModel;
        console.log("Model updated to: " + this.model);
    };


    this.updateYear = function(newYear) {
        this.year = newYear;
        console.log("Year updated to: " + this.year);
    };
}


let myCar = new Car("Hyundai", "Elantra", 2020);
myCar.displayDetails();
myCar.updateModel("Sonata");
myCar.updateYear(2022);
myCar.displayDetails();
console.log("Car Age: " + myCar.getAge() + " years");