// comma operator
let arr = [1, 2, 3, 4, 5,];
let [a, , , , b] = arr;
console.log(a);  // 1
console.log(b);  // 5

let arr1 = [1, 2, 3, "Adnan", 4, 5, "chouhan"];
let [, , , c, , , d] = arr1;
console.log(c, d); // Adnan chouhan

let arr2 = [1, 2, [5, 6, 7, [11, 12, 13], 8, 9, 10], 3, 4];
let [, e, f] = arr2
console.log([e, f]); // [ 2, [ 5, 6, 7, [ 11, 12, 13 ], 8, 9, 10 ] ]

// Swap
let arr3 = 10;
let arr4 = 20;
[arr3, arr4] = [arr4, arr3];
console.log([arr3, arr4]);   // [20,10]
console.log(arr3); // 20
console.log(arr4); // 10