async function temp() 
{
    let fsdWeather = new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve("37 deg.")
        }, 3000);
    })

    let lhrWeather = new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve("35 deg.")
        }, 8000);
    })
    
    // fsdWeather.then(alert)
    // lhrWeather.then(alert)

    console.log("Fetching FSD Weather ....")
    let fsdW = await fsdWeather
    console.log("FSD Weather fetched: " + fsdW)

    console.log("Fetching LHR Weather ....")
    let lhrW = await lhrWeather
    console.log("LHR Weather fetched: " + fsdW)

    return [fsdW , lhrW]
}

const greet = () => {
    console.log("Good Morning")
}

console.log("Welcome to Weather Control Room")
let t = temp()
let g = greet()
t.then((value) => {
    console.log(value)
})