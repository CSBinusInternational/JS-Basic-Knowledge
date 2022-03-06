// 2 base arrays that will be worked on
const presentTense = ['pull', 'fill', 'drown', 'sail'];     // Array contains strings that are in present tense
const grades = [89, 90, 78, 65, 90]                         // Array contains random grades

// Map is used to create a new array from an existing array
// A function will be applied to each element of the array
const pastTense = presentTense.map(word => word + 'ed');    // Make a new array with original strings + 'ed'

// Filter is used to... filter
// A conditional statement will be applied to each element of the array
// If an element meets the conditions, the element is appended to the new array
const doubleLetters = presentTense.filter(word => word.includes('ll'));     // Make a new array with strings that have double L


// Reduce will reduce the original array to only one value
// A reducer function is applied on each element to get the output value
// The block of code below counts the number of occurunces of each grade
const gradeCount = grades.reduce(function (obj, grade) {
    if (!obj[grade]) {
        obj[grade] = 1;
    } else {
        obj[grade]++;
    }
    return obj;
}, {});

console.log(pastTense);
console.log(doubleLetters);
console.log(gradeCount);