// Array map method ....
let arr = [32 , 54 , 76]
console.log(arr)

let a = arr.map((value , Index , array) => {
    console.log(value , Index , array)
    return value
})

console.log(a)
console.log(arr)


// Array filter method ....
let arr2 = [32 , 54 , 76 , 4 , 7 , 2]
console.log(arr2)

let a2 = arr2.filter((val) => {
    return val < 10
})

console.log(a2)
console.log(arr2)


// Array reduce method ....
let arr3 = [1 , 2 , 3 , 4 , 7 , 2]
console.log(arr3)

let a3 = arr3.reduce((m1 , m2) => {
    return m1 + m2
})

console.log(a3)
console.log(arr3)