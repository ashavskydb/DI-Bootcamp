function add(a: number, b: number): number;
function add(a: string, b: string): string;


function add(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    } else {
        throw new Error('Invalid arguments');
    }
}

const result1 = add(7, 4);          
const result2 = add('Hello, ', 'World!'); 

console.log(result1); 
console.log(result2); 