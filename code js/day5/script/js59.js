let number = 12321;
let originalnum = number;
let reversenum;

function palindrome(number){
    originalnum = number;
    reversenum=0;

    while(number>0){
        let rem = number%10;
        reversenum = reversenum * 10 + rem;
        number = Math.floor(number / 10);
    }
    if(originalnum === reversenum){
        console.log("palindrome");
        
    }    
    else{
        console.log("Not a palindrome");
        
    }
}
palindrome(number);
