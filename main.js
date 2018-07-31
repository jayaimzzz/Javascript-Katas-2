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
        c = c + a
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
    let b = a
    while (counter > 1){
        b = multiply(b,counter-1)
        counter--
    }
    return b
}
console.log(factorial(4))
console.log("Fibonacci's 8th number")

function fibonacci (a) {
    counter = 0
    let result = 0
    while (counter < a) {

    }
    return result
}