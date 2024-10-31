const amount = 12.3;
const msg = formatCurrency`the total for your order is ${amount}`;

function formatCurrency(strings, ...values) {
    let str = "";
    for (let i = 0; i < strings.length; i++) {
        if (i > 0) {
            if (typeof values[i - 1] == "number") {
                str += `$${values[i - 1].toFixed(2)}`
            } else {
                str += values[i - 1];
            }
        }
        str += strings[i];
    }
    return str;
}

console.log(msg); // the total for your order is $12.30


let name = "Arbaaz chouhan";
let age = 20;

function template(static, ...tags) {
    console.log(static);
    console.log(tags);
    return ` My name is ${name} and my age is ${age}`

}
console.log(template` My name is ${name} and my age is ${age}`);


let fname = "Arbaaz";
let lname = "Chouhan";
let study = "12";

function tagFn(static, ...tags) {
    // return static
    console.log(static);
    console.log(tags);
    return `my first name is ${fname}. my last name is ${lname}. i am study in class ${study}th.`
}
console.log(tagFn`my first name is ${fname}. my last name is ${lname}. i am study in class ${study}th.`);;