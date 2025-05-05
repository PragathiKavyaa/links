function Employee(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  
  Employee.prototype.getDetails = function() {
    return `${this.name} earns $${this.salary}`;
  };
  
  function Manager(name, salary, department) {
    Employee.call(this, name, salary);
    this.department = department;
  }
  
  Manager.prototype = Object.create(Employee.prototype);
  Manager.prototype.constructor = Manager;
  
  Manager.prototype.getDepartment = function() {
    return `${this.name} manages the ${this.department} department`;
  };
  
  let manager = new Manager("Alice", 5000, "HR");
  console.log(manager.getDetails());  
  console.log(manager.getDepartment());