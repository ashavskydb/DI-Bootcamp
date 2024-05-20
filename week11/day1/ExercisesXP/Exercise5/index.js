function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    else {
        throw new Error('Invalid arguments');
    }
}
var result1 = add(7, 4);
var result2 = add('Hello, ', 'World!');
console.log(result1);
console.log(result2);
