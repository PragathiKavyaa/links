function Person(name = "John Doe", age = 30) {
    this.name = name;
    this.age = age;
  
    this.display = function() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    };
  }
 
  const person1 = new Person();              
  const person2 = new Person("Alice", 25); 
  
  person1.display(); 
  person2.display(); 