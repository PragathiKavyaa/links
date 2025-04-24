let number = prompt("Enter a positive number");
number = parseInt(number);
let sum=0;
while(number>0){
    let rem=number%10;
    number= parseInt(number/10);
    sum=sum+rem;
}
console.log("sum fo value is ",sum);