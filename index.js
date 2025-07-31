console.log("Hello World!")
0.5
1
    ; ("use strict")
    ; ("jgjgjgjgjg")
true
false
let number = 2
const name = "Justin"
number = 3
temp = number
console.log(temp)
number = 4
temp = number
console.log(temp)
let a = 10
let b = 20
console.log(a == 10)
console.log(a != 10)
console.log(a == 10 && b == 20)
console.log(a == 10 || b == 10)
console.log(a <= 10 && b >= 20)

console.log(1 + 2)
console.log(2 - 1)
console.log(2 * 3)
console.log(6 / 2)
console.log(5 % 2)

if (a == 100) {
    console.log("a is 10")
} else if (a == 15) {
    console.log("a is 15")
} else {
    console.log("a is not eaual 10and 15")
}

for (let i = 2; i < 20; i++) {
    console.log(i)
}
console.log("for loop end")

let double = function (num) {
    return num * 2
}
let c = double(10)
console.log(c)

window.onload = function () {
    console.log(document.querySelector("#year"))
    document.querySelector("#year_btn").addEventListener("click", function () {
        const year = parseInt(document.querySelector("#year").value)
        if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
            result = "閏年"
        } else {
            result = "不是閏年"
        }
        console.log(year)
        document.querySelector("#answer").innerHTML = year
    })
}
const isTriangle = function (a, b, c) {
    return a + b > c && a + c > b && b + c > a
}
isTriangle.log(isTriangle(1, 2, 3))
isTriangle.log(isTriangle(3, 4, 5))

const countBMI = function (height, weight) {
    return weight / (height * height)
}
console.log(countBMI(1.7, 60))


const whichIsBig = function (a, b) {
    if (a > b)
        return a
    else if (b > a) {
        return b
    }
}
    (whichIsBig(1, 2))