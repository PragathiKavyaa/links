function reverseString(str) { 
    let str2=str.toLowerCase();
    let str1= str2.split("").reverse().join(""); 
    if(str2===str1)
        console.log("palindrome");
        else
        console.log("not a palindrome");
        
    } 
    console.log(reverseString("dad"));