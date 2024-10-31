// Genrators =>  Function ka controle pora ka pora hamare hatho me hota hai like a mai job bi statement print karvana chaho vo mai krvaskta hu jo nhi chata vo nhi krvaskta genrators ki help se function generators kai jitni bi statement likte ho sab pe hamara controle hoga generators function ki help se function key word kai just age ya function name se just piche apn start (*) ka use mai krte hai * isse generators function create hoga

function *generatFun(){
    yield("one");
    yield("two");
    console.log("hello");
    yield("three");
    yield("four");
console.log("five");
}

const a = generatFun();
console.log(a.next()); // { value: 'one', done: false }
console.log(a.next()); // { value: 'two', done: false }
console.log(a.next()); // { value: 'three', done: false }
console.log(a.next()); // { value: 'four', done: false }

for(response of a){
    console.log(reponse);
}

function *generatFun2(){
    // let res = yield;
    let res = (yield) / 10;

    console.log(`My RollNo is ${res}`);
}

let b = generatFun2();
b.next();
b.next(500);
b.next("first");

function *generatFun3(){
    let res = [yield,yield,yield,yield];
    console.log(`My name is ${res[0]} ${res[1]} my age is ${res[2]} i am student of ${res[3]}`);
}

let c  = generatFun3();
c.next();
c.next("Arbaaz");
c.next("chouhan");
c.next(20);
c.next("BCA");

function *generatFun4() {
    yield 10;
    yield* ['JS', 'ReactJS', 'ExpressJS', 'NodeJS'];
    // yield ['JS', 'ReactJS', 'ExpressJS', 'NodeJS'];
}
let d  = generatFun4()
// console.log(d.next());
console.log(d.next());
console.log(d.next());
d.next()
console.log(d.next());
console.log(d.next());


function *generatFun5(){
    yield "Arbaaz";
    yield "arbaaz";
    yield "ayaaz";
    yield "fayyaj";
    yield "maaz";
    yield "moin";
}

let e = generatFun5();
console.log(e.next());
console.log(e.next());
e.next(); // skip value 
console.log(e.next())
console.log([...e]);


                                      