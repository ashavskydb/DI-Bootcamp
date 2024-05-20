function getDetails(name, age) {
    var greeting = "Hello, my name is ".concat(name, "! My age is ").concat(age, " years old.");
    return [name, age, greeting];
}
var details = getDetails("Anna", 27);
console.log(details);
var name1 = details[0], age = details[1], greeting = details[2];
console.log(name1);
console.log(age);
console.log(greeting);
