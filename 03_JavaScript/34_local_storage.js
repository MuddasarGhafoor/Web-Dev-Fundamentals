let key = prompt("Enter your key")
let value = prompt("Enter the value")

// Set a new key-value ....
localStorage.setItem(key , value)

// Get a new key-value ....
console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

// Remove a key ....
if (key == "red" || key == "blue") 
{localStorage.removeItem(key)}

// Clear local storage ....
if (key == 0) 
{localStorage.clear()}

// Length of the local storage ....
console.log(localStorage.length)

// Key on the given index ....
console.log(localStorage.key(2))