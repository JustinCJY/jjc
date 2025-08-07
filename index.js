// console.log("Hello World!")
// 0.5
// 1
//     ; ("use strict")
//     ; ("jgjgjgjgjg")
// true
// false
// let number = 2
// const name = "Justin"
// number = 3
// temp = number
// console.log(temp)
// number = 4
// temp = number
// console.log(temp)
// let a = 10
// let b = 20
// console.log(a == 10)
// console.log(a != 10)
// console.log(a == 10 && b == 20)
// console.log(a == 10 || b == 10)
// console.log(a <= 10 && b >= 20)

// console.log(1 + 2)
// console.log(2 - 1)
// console.log(2 * 3)
// console.log(6 / 2)
// console.log(5 % 2)

// if (a == 100) {
//     console.log("a is 10")
// } else if (a == 15) {
//     console.log("a is 15")
// } else {
//     console.log("a is not eaual 10and 15")
// }

// for (let i = 2; i < 20; i++) {
//     console.log(i)
// }
// console.log("for loop end")

// let double = function (num) {
//     return num * 2
// }
// let c = double(10)
// console.log(c)

// window.onload = function () {
//     console.log(document.querySelector("#year"))
//     document.querySelector("#year_btn").addEventListener("click", function () {
//         const year = parseInt(document.querySelector("#year").value)
//         if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
//             result = "閏年"
//         } else {
//             result = "不是閏年"
//         }
//         console.log(year)
//         document.querySelector("#answer").innerHTML = year
//     })
// }
// const isTriangle = function (a, b, c) {
//     return a + b > c && a + c > b && b + c > a
// }
// isTriangle.log(isTriangle(1, 2, 3))
// isTriangle.log(isTriangle(3, 4, 5))

// const countBMI = function (height, weight) {
//     return weight / (height * height)
// }
// console.log(countBMI(1.7, 60))


// const whichIsBig = function (a, b) {
//     if (a > b)
//         return a
//     else if (b > a) {
//         return b
//     }
// }
//     (whichIsBig(1, 2))

// 95 - 100 return "A+"
// 90 - 94  return "A"
// 80 - 89  return "B"
// 70 - 79  return "C"
// 0 - 69   return "D"
// function checkScore(score) {
//     if (score >= 95 && score <= 100) {
//         return "A+"
//     }
//     else if (score >= 90 && score <= 94) {
//         return "A"
//     }
//     else if (score >= 80 && score <= 89) {
//         return "B"
//     }
//     else if (score >= 70 && score <= 79) {
//         return "C"
//     }
//     else if (score >= 0 && score <= 69) {
//         return "D"
//     }

// }
// console.log(checkScore(85))

// console.log("--- 九九乘法表 (主控台版本) ---");

// // 外層迴圈控制被乘數 (i)
// for (let i = 1; i <= 9; i++) {
//     // 內層迴圈控制乘數 (j)
//     for (let j = 1; j <= 9; j++) {
//         // 使用樣板字面值 (template literal) 格式化輸出
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
// }
// console.log("Hello world".length)
// console.log("Hello world".substring(0, 3))
// console.log("Hello world".toLowerCase())
// const word = "hello world"

// console.log(word.substring(0, 1).toUpperCase() + word.substring(1))
// const student = [
//     {
//         name: "Rossi",
//         age: 8,
//         sayName: function () {
//             console.log(this.name)

//         }
//     },
//     {
//         name: "Juicy",
//         age: 2,
//         sayName: function () {
//             console.log(`my name is${this.name}`)
//         },
//     },
// ]
// for (let i = 0; i < student.length; i++) {
//     student[i].sayName()
// // }
// const students = [
//     {
//         "id": 1,
//         "last_name": "林",
//         "first_name": "美玲",
//         "gender": "female",
//         "phone": "0912-345-678",
//         "birthday": "1998-03-15",
//         "email": "meiling.lin@email.com"
//     },
//     {
//         "id": 2,
//         "last_name": "王",
//         "first_name": "俊傑",
//         "gender": "male",
//         "phone": "0923-456-789",
//         "birthday": "1997-11-22",
//         "email": "junjie.wang@email.com"
//     },
//     {
//         "id": 3,
//         "last_name": "張",
//         "first_name": "雅婷",
//         "gender": "female",
//         "phone": "0934-567-890",
//         "birthday": "1999-07-30",
//         "email": "yating.zhang@email.com"
//     },
//     {
//         "id": 4,
//         "last_name": "李",
//         "first_name": "建志",
//         "gender": "male",
//         "phone": "0945-678-901",
//         "birthday": "1998-09-05",
//         "email": "jianzhi.li@email.com"
//     },
//     {
//         "id": 5,
//         "last_name": "陳",
//         "first_name": "佳蓉",
//         "gender": "female",
//         "phone": "0956-789-012",
//         "birthday": "1997-05-18",
//         "email": "jiarong.chen@email.com"
//     },
//     {
//         "id": 6,
//         "last_name": "黃",
//         "first_name": "志明",
//         "gender": "male",
//         "phone": "0967-890-123",
//         "birthday": "1999-01-10",
//         "email": "zhiming.huang@email.com"
//     },
//     {
//         "id": 7,
//         "last_name": "吳",
//         "first_name": "芳瑜",
//         "gender": "female",
//         "phone": "0978-901-234",
//         "birthday": "1998-12-03",
//         "email": "fangyu.wu@email.com"
//     },
//     {
//         "id": 8,
//         "last_name": "劉",
//         "first_name": "家豪",
//         "gender": "male",
//         "phone": "0989-012-345",
//         "birthday": "1997-08-20",
//         "email": "jiahao.liu@email.com"
//     },
//     {
//         "id": 9,
//         "last_name": "蔡",
//         "first_name": "雅琪",
//         "gender": "female",
//         "phone": "0990-123-456",
//         "birthday": "1999-04-25",
//         "email": "yaqi.cai@email.com"
//     },
//     {
//         "id": 10,
//         "last_name": "楊",
//         "first_name": "志遠",
//         "gender": "male",
//         "phone": "0901-234-567",
//         "birthday": "1998-06-12",
//         "email": "zhiyuan.yang@email.com"
//     },
// ]
// for (let i = 0; i < students.length; i++) {
//     console.log(students[i].first_name)
// }
// students.forEach(function (student) {
//     console.log(students.first_name)
// })
// const result = []
// for (let i = 0; i < students.length; i++) {
//     if (students[i].gender == "male") {
//         result.push(students[i])
//     }
// }
// // console.log(result)
// // const result = []
// // for (let i = 0; i < students.length; i++) {
// //     result.push({
// //         ...students[i],
// //         age: new Date().getFullYear() - students[i].birthday.substring(0, 4),
// //     })
// // }
// // console.log(result)
// // let sum = 0
// // for (let i = 0; i < students.length; i++) {
// //     sum += new Date().getFullYear() - students[i].birthday.substring(0, 4)
// // }
// // console.log(sum / students.length)
// // console.log(
// //     students.filter(function (student) {
// //         return student.gender == "male"
// //     })
// // )
// console.log(
//     students.map(function (student) {
//         return {
//             ...student,
//             age: new Date().getFullYear() - student.birthday.substring(0, 4),
//         }
//     })
// )


// console.log
// students.reduce(function (sum, student) {
//     return sum + (new Date().getFullYear() - student.birthday.substring(0, 4))
// }, 0) 
fetch("https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json")
    .then(function (res) {
        return res.json()
    })
    .then(function (json) {
        console.log(json)
    })

let timer = setInterval(function () {
    console.log("selInterval")
}, 1000)

setTimeout(function () {
    console.log("timeout")
}, 1000)
setTimeout(() => {
    clearInterval(timer)
}, 5000)
