console.log("Add (2 + 4)")

function add(a, b) {
    return a + b
}
console.log(add(2, 4))
console.log("Multiply (6 * 8)")

function multiply(a, b) {
    let counter = 1
    let c = 0
    while (counter <= b) {
        c = add(c,a)
        counter++
    }
    return c
}
console.log(multiply(6, 8))
console.log("Power (2 to the 8th power)")

function power(a,b) {
    let counter = 1
    let c = 1
    while (counter <= b) {
        c = multiply(c,a)
        counter++
    }
    return c
}
console.log(power(2,8))
console.log("Factorial (4!)")

function factorial(a) {
    let counter = a
    if (a===0){a=1}else{a=a}
    while (counter > 1){
        // a = multiply(a,counter-1)
        a = multiply(a,add(counter, -1))
        counter--
    }
    return a
}
console.log(factorial(4))
console.log("Fibonacci's 8th number")

function fibonacci (a) {
    counter = 1
    let result = 0
    let numberBeforeResult = 1
    let twoNumbersBeforeResult = 0
    while (counter < a) {
    twoNumbersBeforeResult = numberBeforeResult
    numberBeforeResult = result
    result = add(twoNumbersBeforeResult, numberBeforeResult)
    counter++
    }
    return result
}
console.log(fibonacci(8))