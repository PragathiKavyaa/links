function processNumbers(arr, callback) { 
    for (let num of arr) { 
    callback(num); 
    } 
    } 
    processNumbers([1, 2, 3], (num) => { 
    console.log(num * 2); 
    }); 
    