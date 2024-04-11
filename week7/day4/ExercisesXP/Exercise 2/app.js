const people = require('./data.js');

function calculateAverageAge(people) {
    const totalAge = people.reduce((sum, person) => sum + person.age, 0);
    return totalAge / people.length;
}

console.log("Average age:", calculateAverageAge(people));



