function reverseArray(arr) {
    let reversed = [];
    let j = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
        reversed[j] = arr[i];
        j++;
    }
    
    return reversed;
}

let originalArray = [1, 2, 3, 4, 5];
let reversedArray = reverseArray(originalArray);

console.log("Original Array:", originalArray);
console.log("Reversed Array:", reversedArray);