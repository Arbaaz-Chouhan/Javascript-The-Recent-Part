//Regular Expression => 
//Regular expression, ya regex, ek powerful tool hai jo strings ko search, match, aur manipulate karne ke liye istemal hota hai. Ye ek sequence of characters hai jo ek search pattern ko define karta hai.


// Matching

let str = "hello world";
let res = str.match(/l/gi);

console.log(res);

// search() method in Regular Expression

let introduction = "Hi My name is Arbaaz Chouhan";
let result = introduction.search(/my/i);
console.log(result);


// replace() method in Regular Expression

let replace = "MY NAME IS ADNAN CHOUHAN";
let replaceeName = replace.replace("ADNAN", "ARBAAZ");
console.log(replaceeName);