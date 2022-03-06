// Simple Promise Code
function passOrFail(output) {   // A function to output 'Pass' or 'Fail' depending on the promise
    console.log(output);
}

let myPromise = new Promise(function (resolve, reject) {    // Promise with a resolve (success) and a reject (error)
    let grade = 60;     // Specify a grade

    if (grade >= 50) {      // If the grade is more than or equal to 50, it's a passing grade
        resolve("Pass");  // Since it is a passing grade, we can return it as resolve with the string 'Pass'
    }
    else {                  // If the grade is less than 50, it's a failing grade
        reject("Fail");   // Since it is a failing frade, we can return it as a reject with the string 'Fail'
    }
});

/* The then() function in the Promise class can then be executed in 2 ways 
depending on whether the Promise is resolved or rejected */
myPromise.then(
    function (pass) { passOrFail(pass); },      // The first parameter is when the Promise is resolved
    function (fail) { passOrFail(fail); }       // The second parameter is when the Promise is rejected

    // Depending on which occured, it will pass the appropriate string into the passOrFail() function
);

// Promise with async and await
// Async and awaits make promises easier to write (as seen from the lines of code that are written)

// Async makes a function return a promise
async function passOrFail2() {      // A function that will return a promise whether the grade passed or failed
    let myPromise2 = new Promise(function (resolve, reject) {       // The same promise as the previous code
        let grade2 = 60;

        if (grade2 >= 50) {
            resolve("Pass");
        }
        else {
            reject("Fail");
        }
    });
    console.log(await myPromise);       // Await lets the function wait for the promise (resolve or reject)
}

passOrFail2();      // Call the function to output
// Instead of having a separate function to output the promise, async and await lets users do it in one function
// Most of the time, reject is not needed in the async function as it could just return the appropriate resolve