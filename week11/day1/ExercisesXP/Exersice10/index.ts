
function greet(): string;
function greet(name: string): string;


function greet(name?: string): string {
    if (name) {
        return `Hi, ${name}!`;
    } else {
        return "Hello, World!";
    }
}

console.log(greet()); 
console.log(greet("Scott")); 
