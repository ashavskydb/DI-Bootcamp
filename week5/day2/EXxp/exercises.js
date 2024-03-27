// Exercise 1 : Find The Numbers Divisible By 23

// function displayNumbersDivisible(divisior = 23){
//     let sum = 0;
//     let displayNumbers = [];

//     for (let i = 0; i <= 500; i++){
//         if (i % divisior === 0) {
//             displayNumbers.push(i);
//             sum += i;
//         }
//     }

//     console.log(displayNumbers.join(' '));
//     console.log('Sum', sum);

// }

// console.log("Numbers that are divisible by 23:");
// displayNumbersDivisible()

// console.log("\nNumbers divisible by 3:");
// displayNumbersDivisible(3)


// console.log("\nNumbersDivisible by 45:");
// displayNumbersDivisible(45)

//---------------------------------------------------------------------------
// Exercise 2: Shopping List

// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// const shoppingList = ['banana', 'orange',  'apple'];

// function myBill() {
//     let totalPrice = 0;

//     for (const item of shoppingList) {
//         if (item in stock && stock[item] > 0) {
//             totalPrice += prices[item];
//         }
//     }

//     return totalPrice;
// }

// const totalPrice = myBill();
// console.log("Total price:", totalPrice);
// console.log("Updated stock:", stock);

//------------------------------------------------------------------------

// Exercise 3: What’s In My Wallet ?

// 1st version

// function changeEnough(money, total) {
//     let check = 0;
//     let worth = [.25, 10, .05, .01];
//     for (let i = 0; i < money.length; i++) {
//         console.log(Number(money[i])*Number(worth[i]))
//         check += Number(money[i])*Number(worth[i]);
//     }
//     if (check > total) {
//         return true;
//     }
//     return false;
// }

// console.log(changeEnough([25, 20, 5, 0], 4.25))

// // 2nd version 

// function changeEnough(itemPrice, amountOfChange) {
//     const coinValues = [0.25, 0.10, 0.05, 0.01];
//     let totalChange = 0;

//     for (let i = 0; i < amountOfChange.length; i++) {
//         totalChange += amountOfChange[i] * coinValues[i];
//     }

//     return totalChange >= itemPrice;
// }

// console.log(changeEnough(4.25, [25, 20, 5, 0])); 
// console.log(changeEnough(14.11, [2, 100, 0, 0])); 
// console.log(changeEnough(0.75, [0, 0, 20, 5])); 

//-------------------------------------------------------------

// Exercise 4: Vacations Costs

// function hotelCost(nights) {
//     return nights * 140;
// }

// function planeRideCost(destination) {
//     if (destination.toLowerCase() === "london") {
//         return 183;
//     } else if (destination.toLowerCase() === "paris") {
//         return 220;
//     } else {
//         return 300;
//     }
// }

// function rentalCarCost(days) {
//     let cost = days * 40;
//     if (days > 10) {
//         cost *= 0.95; 
//     }
//     return cost;
// }

// function totalVacationCost() {
//     let nights = prompt("Enter the number of nights you would like to stay:");
//     while (isNaN(nights) || nights === null) {
//         nights = prompt("Please enter a valid number of nights:");
//     }

//     let destination = prompt("Enter your destination:");
//     while (!destination || typeof destination !== "string") {
//         destination = prompt("Please enter a valid destination:");
//     }

//     let days = prompt("Enter the number of days you would like to rent a car:");
//     while (isNaN(days) || days === null) {
//         days = prompt("Please enter a valid number of days:");
//     }

//     let car = rentalCarCost(parseInt(days));
//     let hotel = hotelCost(parseInt(nights));
//     let plane = planeRideCost(destination);
//     let totalCost = car + hotel + plane;

//     console.log("The hotel cost: $" + hotel + ", the plane tickets cost: $" + plane + ", the car rental cost: $" + car + ".");
//     console.log("Total vacation cost: $" + totalCost);
// }

// totalVacationCost();

//------------------------------------------------------------------------------


