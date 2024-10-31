let obj = {
    a: 1,
    b: [100, 200],
    c: 2
}

let { a, b: [w, y], c } = obj;

console.log(a);
console.log(w, y);
console.log(c);