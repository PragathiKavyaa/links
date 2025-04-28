const doubleInPlace = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    }
};

let numbers = [1, 2, 3, 4, 5];
doubleInPlace(numbers);

console.log("Doubled Array:", numbers);