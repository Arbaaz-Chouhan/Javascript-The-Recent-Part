// Array Destructuring

// normal Example

let arr1 = [1, 2, 3, 4, 5];
let a = arr1[0];
let b = arr1[1];
let c = arr1[2];
let d = arr1[3];

console.log(a);
console.log(b);
console.log(c);
console.log(d);


// right

let arr2 = [1, 2, 3, 4, 5];

let [first, second, third, four, five] = arr2;

console.log(first);
console.log(second);
console.log(third);
console.log(four);
console.log(five);



// Example
function data() {
    return [1, , 3, 4, 5];

}

let [num1, num2 = 0, num3, num4, num5] = data();

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4)
console.log(num5)


