const number = 15;

const promise = new Promise((resolve, reject) => {
    if (number > 10){
        resolve("The number is greater than 10")
    } else{
        reject("The number is lower then 10")
    }
})

promise.then((message) => {
    console.log(`yey ${message}`)
}).catch((message) => {
    console.log(`oh no ${message}`)
}) 