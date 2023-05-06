// 1.
function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

let res = sum(null);
try {
    console.log(res())
} catch (error) {
    if (error instanceof TypeError) {
        console.error(`wrong input: ${error.message}`)
    } else {
        console.log(error.message)
    }
}


let sayName = (name) => {
    if (typeof name !== String) {
        throw new Error('give me a string')
    } else {
        console.log(name)
    }
}

// 2.
// tests
sayName("Alex");
sayName(1);
// Your code here

// 3.
function greet(greeting) {
    if (!greeting) {
        throw new Error("There was no greeting given.");
    }

    console.log(greeting);
}

try {
    console.log(greeting(undefined))
} catch (error) {
    console.error(error.message)
} finally {
    console.log('hello world')
}