// Ways to write a string .... 

let name1 = "Meer"
let name2 = "Hamza"
let name3 = `${name1} is first name and ${name2} is second name`
let name4 = "      Muddasar           "

console.log(name1)
console.log(name2)
console.log(name3)

// String methods ....
console.log(name3.length)
console.log(name3.toUpperCase())
console.log(name3.toLowerCase())
console.log(name3.slice(8 , 19))
console.log(name3.slice(32))
console.log(name3.replace("name" , "Name"))
console.log(name1.concat(" " , name2 , " is the full name."))
console.log(name3.includes("Hamza"))
console.log(name3.startsWith("Meer"))
console.log(name3.endsWith("Meer"))
console.log(name4.trim())