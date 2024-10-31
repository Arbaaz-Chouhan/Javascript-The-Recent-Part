// iterator => JavaScript mein Iterator ek special object hota hai jo collection of elements ko traverse karne ke liye use hota hai. Ye iterator sequence ke har ek element ko ek ek karke access karne ki suvidha deta hai.

//1 next(): Ye method next element ko return karta hai sequence mein. Agar sequence khatam ho gaya hai to done property true ho jata hai.
//2 return(): Ye method iterator ko manually close kar deta hai. Ye optional hota hai.

const str = "Hello";
const strItr = str[Symbol.iterator]();

console.log(strItr.next()); // { value: 'H', done: false }
console.log(strItr.next()); // { value: 'e', done: false }
console.log(strItr.next()); // { value: 'l', done: false }
strItr.next();  // skip the value "l"
console.log(strItr.next()); // { value: 'o', done: false }
console.log(strItr.next()); // b{ value: undefined, done: true }
console.log(strItr.next()); // { value: undefined, done: true }


function ownIterFn(arr) {
    let arrNum = 0;

    return {
        next() {
            if (arrNum < arr.length) {
                return {
                    value: arr[arrNum++],
                    done: false
                }
            } else {
                return {
                    value: arr[arrNum],
                    done: true
                }
            }

        }
    }
}

// functio  call owerIterFun(arr);

let arr = [10,20,30,40,50];
let arrIte = ownIterFn(arr);
console.log(arrIte.next()); // { value: 10, done: false }
console.log(arrIte.next()); // { value: 20, done: false }
console.log(arrIte.next()); // { value: 30, done: false }
arrIte.next();  // skip the value 40
console.log(arrIte.next()); // { value: 50, done: false }
console.log(arrIte.next()); // { value: undifined, done: true }

const arr1 = ["one","two","three"];
const arr2 = arr1[Symbol.iterator]();

console.log(arr2);  // Object [Array Iterator] {}
arr2.next();   // skip value in array is "one"
console.log(arr2.next().value); // get value => 'two 
console.log(arr2.next().done);  // false

let customFunction = (res) =>{
    let initialValue = 0;
    return {
        next(){
            return {
                value : res[initialValue++],
                done : initialValue < res.length + 1 ? false : true 
            }
        }
    }
}

let arr3 = ["first","second","third","fourth","fife"];
let arr4 = customFunction(arr3);
console.log(arr4.next()); // { value: 'first', done: false }
console.log(arr4.next()); // { value: 'second', done: false }
console.log(arr4.next()); // { value: 'third', done: false }
console.log(arr4.next()); // { value: 'fourth', done: false }
console.log(arr4.next()); // { value: 'fife', done: false }


let str1 = "Adnan chouhan";
let str2 = str1[Symbol.iterator]();
console.log(str2);
console.log(str2.next());
console.log(str2.next());

let reponse = str2.next();
while (!reponse.done) {
    console.log(reponse.value);
    reponse = str2.next();
}

for (let i of str2) {
    console.log(i);
}

for (let i = 0; i < str1.length; i++) {
    console.log(str1[i]);
}

