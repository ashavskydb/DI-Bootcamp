function kgToGramsDeclaration(weightInKg) {
    return weightInKg * 1000;
}
console.log(kgToGramsDeclaration(5));


const kgToGramsExpression = function(weightInKg) {
    return weightInKg * 1000;
};

console.log(kgToGramsExpression(5));

const kgToGramsArrow = weightInKg => weightInKg * 1000;

console.log(kgToGramsArrow(5));
