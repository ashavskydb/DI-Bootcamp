function validateUnionType(value: any, allowedTypes: string[]): boolean {
    const valueType = typeof value;
    for (let i = 0; i < allowedTypes.length; i++) {
        if (valueType === allowedTypes[i]) {
            return true;
        }
    }
    return false;
}

//for example 

const testVal1 = "Hello, World!";
const testVal2 = 34;
const testVal3 = true;
const testVal4 = { name: "Alice" };

const allowedTypes = ["string", "number", "boolean"];

console.log(validateUnionType(testVal1, allowedTypes)); 
console.log(validateUnionType(testVal2, allowedTypes)); 
console.log(validateUnionType(testVal3, allowedTypes)); 
console.log(validateUnionType(testVal4, allowedTypes)); 