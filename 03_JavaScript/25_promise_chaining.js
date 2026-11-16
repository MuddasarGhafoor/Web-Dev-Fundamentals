let p1 = new Promise((resolve, reject) => {
    console.log("Promise is pending ....")

    setTimeout(() => {
        resolve("p1 is resolved")
        reject(new Error("I am an error"))
    }, 4000)
})

p1.then((value) => {
    console.log(value)

    let p2 = new Promise((resolve, reject) => {
        console.log("Promise is pending ....")

        setTimeout(() => {
            resolve("p2 is resolved")
            reject(new Error("I am an error"))
        }, 5000)
    })
    return p2
}).then((value) => {
    console.log(value)

    return new Promise((resolve, reject) => {
        console.log("Promise is pending ....")

        setTimeout(() => {
            resolve("p3 is resolved")
            reject(new Error("I am an error"))
        }, 3000)
    })
}).then((value) => {
    console.log(value)
    console.log("Everything is done!")
})