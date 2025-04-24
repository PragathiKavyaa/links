let val= [10, 50, 30, 60, 40];
let max=val[0];
for(let i=1; i<val.length; i++){
    if(val[i]>max){
        max=val[i];
    }
}
console.log(max);