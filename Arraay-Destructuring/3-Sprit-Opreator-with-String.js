const str = "Arbaaz";
console.log(...str);   // A d n a n
console.log([...str]); // [ 'A', 'd', 'n', 'a', 'n' ]
console.log(`${str}`); // Arbaaz

const str1 = "Arbaazchouhan";
const [a, b, ...c] = str1;
console.log(c); // ['n', 'a', 'n', 'c','h', 'o', 'u', 'h','a', 'n']
console.log([...str1].join("")); //Arbaazchouhan


const spread = "Hello world"

console.log(spread) //normal
console.log(...spread) // spread operation -- it will spread each letter.
console.log([...spread]) // it will return array in with strings
// sprit opreator with string

