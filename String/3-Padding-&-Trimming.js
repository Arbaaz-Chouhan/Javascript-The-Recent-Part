		// Padding =>  JavaScript may "padding" method ka istamal specific length may extra length kay saat words ko add kerna may hota hay
// Padding Start => start padding left side
// Method Name => padstart()

let str  =  "Hello";
console.log(str.padStart(4));
console.log(str.padStart(6));
console.log(str.padStart(8,123));
console.log(str.padStart(10,"@@@@@"));
console.log(str.padStart(12,"##########"));
console.log(str.padStart(14,"************"));


// Padding End => right end padding 
// Method Name => padEnd(); 


let str2  =  "Hello";
console.log(str2.padEnd(4));
console.log(str2.padEnd(6));
console.log(str2.padEnd(8));
console.log(str2.padEnd(10,"@@@@@"));
console.log(str2.padEnd(12,"##########"));
console.log(str2.padEnd(14,"************"));



// trim => JavaScript may (trim) method ka istamal string may extra space ko htanay kay liya use  kiya jata hay


let strtirm  = "                   hello";

console.log(strtirm);
console.log(strtirm.trim());
console.log(strtirm.length);



// trimStart => is ka use starting space htanay kay liya kiya jata hay

let trimStart =  "           Arbaaz";
console.log(trimStart);
console.log(trimStart.trimStart());

// trimEnd => is ka use End space htanay kay liya kiya jata hay


let trimEnd  = "Arbaaz            ";

console.log(trimEnd);
console.log(trimEnd.trimEnd());
