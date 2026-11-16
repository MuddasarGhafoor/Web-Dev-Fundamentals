// Syncronous Programming ....
let a = prompt("What is your name")
let b = prompt("What is your age")
let c = prompt("What is your favourite color")

document.write(`${a} is ${b} years old and has favourite color ${c}`)


// Asyncronous Programming ....
document.write("Start")

setTimeout(() => {
    document.write("I am a function")
}, 2000);

document.write("End")