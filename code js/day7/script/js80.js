function createPerson(name, age) { 
    return { 
        name, 
        age, 
        greet() { 
            return `Hello, my name is ${this.name}`; 
        } 
    }; 
} 
let person = createPerson("Bob", 30); 
console.log(person.greet()); 