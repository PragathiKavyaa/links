function gradecalculator(maths, tamil, english, social, science){
    let mark = maths + tamil + english + social + science;
    console.log("Mark", mark);
    
    let average = mark / 5;
    console.log("Average", average);
    
    if(average>90){
        console.log("A");
    }
    else if(average>=75 && average<89){
        console.log("B");
        
    }
    else if(average>=50 && average<74){
        console.log("C");
        
    }
    else{
        console.log("F");
        
    }
}
gradecalculator( 90, 95, 97, 100, 100)