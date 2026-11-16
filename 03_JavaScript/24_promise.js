let p1 = new Promise((resolve , reject) =>{
    console.log("Promise is pending ....")
    setTimeout(() => {
        // console.log("Promise is resolved")
        resolve(true)
    }, 4000);
})

let p2 = new Promise((resolve , reject) =>{
    console.log("Promise is pending ....")
    setTimeout(() => {
        // console.log("Promise is rejected")
        reject(new Error("I am an error"))
    }, 4000);
})

// To get value ....
p1.then((value) => {
    console.log(value)
})

// To catch error ....
p2.catch((error) => {
    console.log("Some error occurred")
})

// This can also be done ....
p1.then((value) => {
    console.log(value)
},(error) => {
    console.log(error)
})