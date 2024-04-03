function displayStudentInfo(objUser){
    //destructuring
    const {first, last} = objUser;

    return 'Your full name is ${first} ${last}.';
}


displayStudentInfo({first: 'Elie', last:'Schoppik'});

console.log(displayStudentInfo({first: 'Elie', last: 'Schoppik'}));
