// #Exercise1:Comparison

function compareToTen(num) {
    return new Promise((resolve, reject) => {
      if (num <= 10) {
        res(`${num} is less than or equal to 10`);
      } else {
        rej(`${num} is greater than 10`);
      }
    });
  }


//   #Exercise 2 : Promises

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, 4000); 
  });
  
  myPromise.then((result) => {
    console.log(result); 
  }).catch((error) => {
    console.error(error);
  });


//   #Exercise 3 : Resolve & Reject


const promiseResolve = Promise.resolve(3);
const promiseReject = Promise.reject("Boo!");

promiseResolve.then(value => {
    console.log("Resolved:", value); 
  }).catch(error => {
    console.error("Error:", error);
  });
  
  promiseReject.then(value => {
    console.log("Resolved:", value);
  }).catch(error => {
    console.error("Error:", error); 
  });


  