function fn() {
    console.log(arguments.length);
    console.log(arguments);
    console.log(arguments[2]);
    if (arguments.length == 0) {
        console.log("No argument Passed!");
    }
    else {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            sum = sum + arguments[i]
        }
        console.log(sum);
    }
}
// fn() // No arguments Passed!
fn(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) // 55
// fn(1,2,3,4,5,6); // 21
// fn(1,2,3,4,); // 10
// fn(2,4,6,2,5,8) // 27