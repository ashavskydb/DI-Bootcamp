function validateUnionType(value, allowedTypes) {
    var valueType = typeof value;
    for (var i = 0; i < allowedTypes.length; i++) {
        if (valueType === allowedTypes[i]) {
            return true;
        }
    }
    return false;
}
//for example 
var testVal1 = "Hello, World!";
var testVal2 = 34;
var testVal3 = true;
var testVal4 = { name: "Alice" };
var allowedTypes = ["string", "number", "boolean"];
console.log(validateUnionType(testVal1, allowedTypes));
console.log(validateUnionType(testVal2, allowedTypes));
console.log(validateUnionType(testVal3, allowedTypes));
console.log(validateUnionType(testVal4, allowedTypes));
