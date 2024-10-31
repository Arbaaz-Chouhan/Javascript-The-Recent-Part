// Spread Operator (...):
// The spread operator is used to spread the elements of an array or the properties of an object. It allows you to expand elements or properties in places where multiple elements or properties are expected.

// Rest Operator (...):
// The rest operator is used to collect the remaining elements of an array or the remaining properties of an object into a single variable. It is often used in function parameters to handle a variable number of arguments.

// Rest operator
const arr = [1, 2, 3, 4, 5];
const [a, b, ...c] = arr;
console.log([a, b, c]);

// spread operator
const arr1 = ['Arbaaz', 'Adnan', 'fayyaz', 'Ayyaz'];
const [...e] = arr1;
console.log(e);

// Rest operator
const arr2 = ['mujahid', 'sulman', 'sahil', 'Anis'];
const [g,s, ...f] = arr2
console.log(g,s,f); 



function StudentName(){
    return ["Arbaaz","Fayyaz","Micail","Mahir","Adnan Chouhan","Anis"];
}


let [firsName,secondName,thirdName,...AllStudent] = StudentName();

console.log(firsName);  // Arbaaz
console.log(secondName); // Fayyaaz
console.log(thirdName);  // Micail
console.log(AllStudent);  // [Mahir,"Adnan Chouhan" ,"Anis"]