console.log(document.cookie)
document.cookie = "name=Meer"
document.cookie = "name2=Hamza6813"
document.cookie = "name=Meer2808"
console.log(document.cookie)

// Encode and decode URI component ....
let key = prompt("Enter your key")
let value = prompt("Enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)

// decodeURIComponent("encoded-value")