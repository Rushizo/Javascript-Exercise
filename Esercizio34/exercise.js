

function printAsyncName(callback, string){
    setTimeout(() => console.log(callback), 1000);
    setTimeout(() => console.log(string), 2000)
}

printAsyncName("Hi", "Danilo")