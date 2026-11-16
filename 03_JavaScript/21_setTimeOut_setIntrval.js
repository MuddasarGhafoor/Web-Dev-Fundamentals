// SetTimeOut in javaScript ....

document.write("Hello")

let a = setTimeout(() => {
    document.write(`SetTimeOut executed\n`)
}, 2000);

console.log(a)
// To cancel settimeout 
// clearTimeout(a)


// SetInterval in javaScript ....
setInterval(() => {
    document.write("SetInterval executed\n")
}, 3000);