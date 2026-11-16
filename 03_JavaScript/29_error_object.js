try {
    // console.log(meer)
    throw new ReferenceError("He is a good boy.")
} catch (error) {
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}