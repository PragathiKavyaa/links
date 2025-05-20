function checkAge(age) { 
if (age < 18) { 
throw new Error("Age must be 18 or above!"); 
} 
return "Access Granted"; 
} 
try { 
console.log(checkAge(16)); 
} catch (error) { 
console.log("Error:", error.message); 
} 