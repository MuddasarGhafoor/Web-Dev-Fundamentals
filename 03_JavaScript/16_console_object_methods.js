// To check all the console object methods ....
console.log(console)

console.clear()
console.log("Hi Meer")
console.info("Information")
console.warn("Warning")
console.error("Errpr")
console.assert(5>10)

obj = {a:1 , b:2 , c:3 , d:4}
console.table(obj)

console.time("For loop")
for (let i = 0; i < 5; i++) {
    console.log("Meer Hamza")
}
console.timeEnd("For loop")