console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false

const isString = value => typeof value === 'string';

//This function uses the 'typeof' operator to check if the type of the value is 'string'. 
//If it is, the function returns true, otherwise it returns false.

