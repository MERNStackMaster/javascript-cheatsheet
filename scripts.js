// variables
// containers
let name = 'Mark';          // when wrapped in quotes => String
let age = 25;               // this is a number
let strAge = '25';          // this is a String of 25
let raining = true;         // this is a boolean
let warm = false;           // this is a boolean

console.log(warm);      // false
console.log(strAge);    // '25' 

// arrays
// list
// numberic indexing - starts at 0
let array = ['Peter', 25, '25', true, false];
// indexs       0      1    2     3     4
console.log(array[0]);  // 'Peter'
console.log(array[3]);  // true

// objects
// similar to dictionary
let object = {
    name: 'Mark',
    age: 60,
    isAlive: true
};

console.log(object.name);       // 'Mark'
console.log(object['name']);    // 'Mark'
console.log(object.isAlive);    // true

// conditionals
if (object.name === 'Mark') {
    console.log('Hello ' + object.name);
} else {
    console.log('I think your name might be ' + object.name);
}

// functions
// reuseable code
let adder = function(x, y) {
    console.log(x + y);
};

let multiply = function(arr) { // takes an array of 2 numbers
    console.log(arr[0] * arr[1])
};

adder(30, 50);
adder(654645, 8978797);

multiply([4, 5]);       // 20
multiply([68468463, 879522]);

// loops
// for loop
for (
    // 3 parts
    let counter = 0;        // 1. counter
    counter < 5;            // 2. while a condition is true
    counter = counter + 1   // 3. what to do once the loop is completed

) {
    console.log(array[counter]);

    if (typeof array[counter] === 'string') {
        console.log(array[counter] + ' is a String.');
    } else {
        console.log(array[counter] + ' is not a String.');
    }
}

array.forEach(function(item) {
    console.log(item);
});