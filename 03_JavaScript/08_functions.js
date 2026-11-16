function onePlusAvg(x , y) 
{
    return (1 + (x + y)/2)
}

const sum = (m , n) =>
{
    return (m + n)
}

const hello = () =>
{
    console.log("Hi! How are you?")
}

let a = 6;
let b = 8;
let c = 13;

console.log("One plus average of a and b is : " , onePlusAvg(a , b))
console.log("One plus average of b and c is : " , onePlusAvg(b , c))
console.log("One plus average of c and a is : " , onePlusAvg(c , a))

console.log("Sum of a and b is : " , sum(a , b))

hello();