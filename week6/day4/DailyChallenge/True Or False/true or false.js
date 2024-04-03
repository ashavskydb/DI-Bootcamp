// Examples
// allTruthy(true, true, true) ➞ true

// allTruthy(true, false, true) ➞ false

// allTruthy(5, 4, 3, 2, 1, 0) ➞ false

function allTruthy(values) {
    for (let value of values) {
        if(!value) {
            return false;
        }
    }
    return true;  
}

console.log(allTruthy([true, true, true])); 
console.log(allTruthy([true, false, true])); 
console.log(allTruthy([5, 4, 3, 2, 1, 0]));