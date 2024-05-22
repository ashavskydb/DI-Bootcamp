function filterArray<T>(array: T[], predicate: (element: T) => boolean): T[] {
    const result: T[] = [];
    for (const element of array) {
        if (predicate(element)) {
            result.push(element);
        }
    }
    return result;
}

// for example:

const numbers = [1, 2, 3, 4, 5, 6];
const isEven = (num: number) => num % 2 === 0;
const evenNumbers = filterArray(numbers, isEven);
console.log(evenNumbers); 


const strings = ['apple', 'banana', 'avocado', 'cherry'];
const startsWithA = (str: string) => str.startsWith('a');
const stringsStartingWithA = filterArray(strings, startsWithA);
console.log(stringsStartingWithA); 
