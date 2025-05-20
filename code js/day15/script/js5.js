function checkIfNumber(input){
    if (typeof input !== 'number') {
        throw new TypeError('Input must be a number');
    }
    return input;
}
checkIfNumber('hello');