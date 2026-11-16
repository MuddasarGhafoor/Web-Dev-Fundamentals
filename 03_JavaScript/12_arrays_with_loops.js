let arr = [1, 2, 3, 4, 5]


// For loop ....
for (let i = 0; i < arr.length; i++) 
{
    console.log(arr[i])
}


// for-of loop ....
for (const i of arr) 
{
    console.log(i)
}


// for-in loop ....
for (const i in arr) 
{
    console.log(i)
    console.log(arr[i])
}


// For-each loop ....
arr.forEach(element => {
    console.log(element*element)
});


// Array.from ....
let name = "Meer"
let ar = Array.from("name")
console.log(ar)