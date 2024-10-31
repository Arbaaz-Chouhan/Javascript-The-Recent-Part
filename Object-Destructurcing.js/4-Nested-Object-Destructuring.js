let obj = {
    fname: "Arbaaz",
    lname: "Chouhan",

    detal: {
        contury: "India",
        city: "Jodhpur",

        puraAddress: { address: "5v rood eidgah chopasni rood" }
    }
}


let { fname: fname, lname: lname, detal: { contury, city, puraAddress: { address } } } = obj;

console.log(fname, lname); // Arbaaz Chouhan
console.log(contury); // India
console.log(city); //Jodhpur
console.log(address); // 5v rood eidgah chopasni rood