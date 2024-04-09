function resolveAfter2Seconds() { // In the 'resolveAfter2Seconds' function, a new promise is created.
    return new Promise(resolve => {
        setTimeout(() => {         
            resolve('resolved');       // It will be resolved ('resolved')
        }, 2000);                   //after 2 seconds using 'setTimeout'
    });
}
async function asyncCall() {  // In the 'asyncCall' function, a new promise is created.
    console.log('calling'); // It will be called
    let result = await resolveAfter2Seconds(); //Using the "await" keyword, the execution of "asyncCall" stops until the promise given by "resolveAfter2Seconds" finishes. 
    console.log(result); //Once the promise is fulfilled, the outcome is stored in the variable named "result."
}

asyncCall();

// The result it will be: 
//calling 
//resolved