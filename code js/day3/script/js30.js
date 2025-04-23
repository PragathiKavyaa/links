let mark=50;
if(mark>0 && mark<=100){
    if(mark>90 && mark<=100){
        console.log("A");
    }
    else if(mark>70 && mark<=90){
        console.log("B");
    }
    else if(mark>50 && mark<=70){
        console.log("C");
    }
    else if(mark>=35 && mark<=50){
        console.log("D");
    }
    else{
        console.log("FAIL");
    }     
}
else{
    console.log("Invalid Number");
    
}