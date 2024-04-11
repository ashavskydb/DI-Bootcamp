const _ = require('lodash');
const math = require('./math');


const result1 = math.addition(5, 3);
const result2 = math.multiplication(5, 3);
const result3 = _.add(5, 3); 

console.log("Result of addition:", result1);
console.log("Result of multiplication:", result2);
console.log("Result of addition using lodash:", result3);
