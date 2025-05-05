function Employee(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  
    this.increaseSalary = function(amount) {
      this.salary = this.salary + amount;
    };
  }
  
  const emp1 = new Employee("Alice", "Developer", 60000);
  const emp2 = new Employee("Bob", "Designer", 50000);
  const emp3 = new Employee("Charlie", "Manager", 70000);
  
  const employees = [emp1, emp2, emp3];
  
  emp1.increaseSalary(5000);

  console.log("Employee Records:");
  console.log("Name\t\tPosition\tSalary");
  employees.forEach(emp => {
    console.log(`${emp.name}\t\t${emp.position}\t\t$${emp.salary}`);
  });