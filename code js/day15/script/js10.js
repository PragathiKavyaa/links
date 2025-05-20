async function fetchData() { 
try { 
let response = await fetch("https://jsonplaceholder.typicode.com/users"); 
if (!response.ok) { 
throw new Error("API Error: Unable to fetch data!"); 
} 
let data = await response.json(); 
console.log(data); 
} catch (error) { 
console.error("Error:", error.message); 
} 
} 
 
fetchData();