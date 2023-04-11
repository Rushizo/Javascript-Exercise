const isLogged = false;

const promise = (isLogged) => {
    return new Promise((resolve, reject) => {
        if (isLogged) {
            resolve(Math.random())
        } else {
            reject("It do not work");
        }
    })
}

const promise2 = (number) => {
    return new Promise((resolve, reject) => {
        if (number > 0.5) {
            resolve({ name: "John", age: 24 })
        } else {
            reject("Is lower then 0.5")
        }
    })
}

promise(isLogged)
    .then(promise2)
    .then((username) => console.log(username))
    .catch((message) => console.log(`${message}`))