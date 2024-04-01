const users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];

const welcomeStudents = users.map(user => 'Hello ${user.firstName}');
    console.log(welcomeStudents);

const studentRole = users.filter(user => user.role === 'Full Stack Resident');
    console.log(studentRole);

    const fullStackResidentsLastNames = users
    .filter(user => user.role === 'Full Stack Resident')
    .map(user => user.lastName);
  
    console.log(fullStackResidentsLastNames);