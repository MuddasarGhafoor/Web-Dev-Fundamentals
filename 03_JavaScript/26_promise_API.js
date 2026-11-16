let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 1")
    }, 4000)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Value 2")
        reject(new Error("Error"))
    }, 2000)
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 3")
    }, 3000)
})


// To get the values of all the promises separetaly ....
// p1.then((value) => {console.log(value)})
// p2.then((value) => {console.log(value)})
// p3.then((value) => {console.log(value)})


// To get the values of all the promises togather ....
// let p_all = Promise.all([p1 , p2 , p3])
// p_all.then((value) => {console.log(value)})


// To get the values and errors of all the promises togather ....
// let p_allSettled = Promise.allSettled([p1 , p2 , p3])
// p_allSettled.then((value) => {console.log(value)})


// To get the value of the promise which is ececuted first ....

// let p_any = Promise.any([p1 , p2 , p3])
// p_any.then((value) => {console.log(value)})


// To get the value or error of the promise which is ececuted first ....

// let p_race = Promise.race([p1 , p2 , p3])
// p_race.then((value) => {console.log(value)})


// Make a resolved promise with the given value ....
// let p_resolve = Promise.resolve(6)
// p_resolve.then((value) => {console.log(value)})


// Make a rejected promise with a given error ....
// let p_reject = Promise.reject(new Error("hey"))
// p_reject.then((value) => {console.log(value)})