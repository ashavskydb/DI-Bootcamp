// Exercise 1 : List Of People

// const people = ["Greg", "Mary", "Devon", "James"];
// const indexToRemove = people.indexOf("Greg");
// if (indexToRemove !== -1) {
//     people.splice(indexToRemove, 1);
// }
// console.log(people);

//----------------------------------------------------------

// const indexToReplace = people.indexOf("James");
// if (indexToReplace !== -1) {
//     people[indexToReplace] = "Jason"
// }
// console.log(people); 

//----------------------------------------------------------

// const yourName = "Dmitry";

// people.push(yourName);
// console.log(people);

//----------------------------------------------------------

// const maryIndex = people.indexOf("Mary");

// console.log("Mary's index:", maryIndex);

//----------------------------------------------------------

// const people = ["Mary", "Devon", "Jason", "Dmitry"];
// const maryIndex = people.indexOf("Mary");
// const yourNameIndex = people.indexOf("Dmitry")

// const peopleCopy = people.slice(0, maryIndex).concat(people.slice(maryIndex + 1, yourNameIndex), people.slice(yourNameIndex + 1));

// console.log(peopleCopy); 

//---------------------------------------------------------

// const people = ["Mary", "Devon", "Jason", "Dmitry"];

// const fooIndex = people.indexOf("Foo");

// console.log("Index of 'Foo':", fooIndex);

//----------------------------------------------------------

// const people = ["Mary", "Devon", "Jason", "Dmitry"];

// const lastIndex = people.length - 1;

// const last = people[lastIndex];

// console.log("Last element:", last);

//-----------------------------------------------------------

// const people = ["Mary", "Devon", "Jason", "Dmitry"]

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// }

//------------------------------------------------------------

// const people = ["Mary", "Devon", "Jason", "Dmitry"]

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
//     if (people[i] === "Devon") {
//         break;
//     }
// }

//-----------------------------------------------------------

// Exercise 2 : Your Favorite Colors

// const Colors = ["green", "purple", "beige", "grey", "brown"]

// for (let i = 0; i < Colors.length; i++) {
// }
// const suffixes = ['st', 'nd', 'rd', 'th', 'th'];

// for (let i = 0; i < colors.length; i++) {
//     const suffix = suffixes[i] || suffixes[suffixes.length -1];
//     console.log("My #${i + 1} choice is ${colors[i]}");
// }

//---------------------------------------------------------------

// Exercise 3 : Repeat The Question

// let number; 

// do {
   
//     number = parseFloat(prompt("Enter a number")); 

//     if (isNaN(number)) {
//         console.log("Invalid input. Enter a valid number."); 
//     } else {
//         console.log("You entered:", number); 
//     }
// } while (typeof number === 'number' && number < 10); 


//----------------------------------------------------------------

// Exercise 4 : Building Management

// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }

// console.log("Number of floors in the building:", building.numberOfFloors);

// console.log("Number of apartments on the first floor:", building.numberOfAptByFloor.firstFloor);
// console.log("Number of apartments on the third floor:", building.numberOfAptByFloor.thirdFloor);

// const secondTenant = building.nameOfTenants[1];
// const roomsAndRent = building.numberOfRoomsAndRent[secondTenant];
// console.log("Name of the second tenant:", secondTenant);
// console.log("Number of rooms in the second tenant's apartment:", roomsAndRent[0]);

// const sarahRent = building.numberOfRoomsAndRent["sarah"][1];
// const davidRent = building.numberOfRoomsAndRent["david"][1];
// const danRent = building.numberOfRoomsAndRent["dan"][1];

// if (sarahRent + davidRent > danRent) {
//     console.log("Sarah's and David's rent combined is bigger than Dan's rent.");
//     building.numberOfRoomsAndRent["dan"][1] = 1200;
//     console.log("Dan's rent has been increased to 1200.");
// } else {
//     console.log("Sarah's and David's rent combined is not bigger than Dan's rent.");
// }

// console.log("Updated rent for Dan:", building.numberOfRoomsAndRent["dan"][1]);

//------------------------------------------------------------------------------------------

// Exercise 5 : Family

// const family = {
//     father: "Boris",
//     mother: "Anna",
//     son: "Dmitry",
//     daughter: "Maria"
//   };

//   console.log("Keys of the family object:");
// for (let key in family) {
//   console.log(key);
// }

// console.log("\nValues of the family object:");
// for (let key in family) {
//   console.log(family[key]);
// }

//-------------------------------------------------------------------------------------------

// Exercise 6 : Rudolf

// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
//   }

//   let message = '';
//   for (let key in details) {
//     message += key + ' ' + details[key] + ' ';
//   }

//   console.log(message.trim());

  //-----------------------------------------------------------------------

//   Exercise 7 : Secret Group

//   const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

//   const firstLetters = names.map(name => name[0]);

//   const sortedFirstLetters = firstLetters.sort();

//   const societyName = sortedFirstLetters.join("");

//   console.log(societyName);

  //---------------------------------------------------------------------