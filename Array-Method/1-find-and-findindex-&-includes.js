// find Array Method
const array1 = [5, 12, 8, 130, 44];
const found = array1.find((element) => element > 10);
console.log(found);   // output: 12

// findINdex Array Method
const array2 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array2.findIndex(isLargeNumber)); // output: 3

// includes Array Method
const array3 = [1, 2, 3];
console.log(array3.includes(2)); // output: true

const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat')); // output: true
console.log(pets.includes('at'));  // output: false