const detal = { name: "Arbaaz", age: 20 };
const { name, age, address = "5v road" } = detal;
console.log(name, age);    // Arbaaz  20
console.log(address);       // 5v road

const obj1 = { fname: "Arbaaz", lname: "Chouhan", study: "BCA 2year" };
let { fname, ...study } = obj1;

console.log(fname); // Arbaaz
console.log(study);   // { lname: 'Chouhan', study: 'BCA 2year' }
