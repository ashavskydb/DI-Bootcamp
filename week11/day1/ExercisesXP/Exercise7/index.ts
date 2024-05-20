interface Person {
    name: string;
    age: number;
}

function createPerson(name: string, age: number): Person {
    return {
        name: name,
        age: age
    };
}

const person = createPerson('Kate', 37);
console.log(person);


