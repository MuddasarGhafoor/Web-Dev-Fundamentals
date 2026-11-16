function loadScript(src , callback) {
    let script = document.createElement("script")
    script.src = src
    script.onload = function () {
        console.log("Loaded script with src : " + src)
        callback(null , src)
    }
    script.onerror = function () {
        console.log("Error loading script with src : " + src)
        callback(new Error("src"))
    }
    document.body.appendChild(script)
}

function greet(error , src) {
    if (error) {
        console.log(error)
        return
    }
    alert("Good Morning! " + src)
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" , greet)