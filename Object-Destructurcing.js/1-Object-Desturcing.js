// Object Desturcing

// Example 1 =>

let obj1 = { a: 10, b: 20, c: 30 };

let { a: first, b: second, c: last } = obj1;

console.log(first)
console.log(second);
console.log(last);



// Example 2 =>

let obj2 = { a: 1, b: 2, c: 3, d: 4, e: 5 };

let { a: num1, b: num2, ...rest } = obj2;

console.log(num1)
console.log(num2);
console.log(rest);


// // Example 3 =>

let obj3 = { a: 1 };

let { a: firstValue, b: secondValue = 0 } = obj3;

console.log(firstValue)
console.log(secondValue);







