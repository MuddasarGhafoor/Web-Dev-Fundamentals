const createToDo = async (todo) => {
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(todo)
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json()
    return response
}

const mainFunc = async () => {
    let todo = {
        title: 'Meer',
        body: 'Hamza',
        userId: 6813,
    }
    let todor = await createToDo(todo)
    console.log(todor)
}

mainFunc()