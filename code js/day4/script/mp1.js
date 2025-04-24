
let number = prompt("Enter the multiplication number");
number = parseInt(number);

for(let val=1; val<=10; val++){
    let sum=val*number;
    console.log(number, " * ", val, "= ",sum);
}