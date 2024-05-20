function getDetails(name: string, age: number): [string, number, string] {
    const greeting = `Hello, my name is ${name}! My age is ${age} years old.`;
    return [name, age, greeting];
}

const details = getDetails("Anna", 27);
console.log(details);

const [name1, age, greeting] = details;
console.log(name1); 
console.log(age);
console.log(greeting);