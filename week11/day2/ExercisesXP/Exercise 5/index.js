function filterArray(array, predicate) {
    var result = [];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var element = array_1[_i];
        if (predicate(element)) {
            result.push(element);
        }
    }
    return result;
}
// for example:
var numbers = [1, 2, 3, 4, 5, 6];
var isEven = function (num) { return num % 2 === 0; };
var evenNumbers = filterArray(numbers, isEven);
console.log(evenNumbers);
var strings = ['apple', 'banana', 'avocado', 'cherry'];
var startsWithA = function (str) { return str.startsWith('a'); };
var stringsStartingWithA = filterArray(strings, startsWithA);
console.log(stringsStartingWithA);
