function Student(grades) {
    this.grades = grades;
  }
  
  Student.prototype.getAverage = function() {
    let sum = 0;
    for (let i = 0; i < this.grades.length; i++) {
      sum += this.grades[i];
    }
    return sum / this.grades.length;
  };
  
  let student = new Student([70, 80, 90]);
  console.log("Average grade:", student.getAverage());