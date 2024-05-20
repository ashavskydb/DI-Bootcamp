function checkNumber(num) {
    if (num > 0) {
        return "positive";
    }
    else if (num < 0) {
        return "negative";
    }
    else {
        return "zero";
    }
}
console.log(checkNumber(7));
console.log(checkNumber(0));
console.log(checkNumber(-4));
