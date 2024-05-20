function greet(name) {
    if (name) {
        return "Hi, ".concat(name, "!");
    }
    else {
        return "Hello, World!";
    }
}
console.log(greet());
console.log(greet("Scott"));
