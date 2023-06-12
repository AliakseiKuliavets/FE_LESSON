// const a = "text"
// const b = 12


// function sumFunc(a, b) {
//     let result = a + b
//     return result
// }
// const res = sumFunc(+prompt(), +prompt())

// console.log(res + 12)



// // Сделайте функцию, которая параметром принимает число и выводит в консоль куб этого числа.
// function cub(a) {
//     let result = a ** 3
//     return result
// }
// console.log(cub(3))



//Сделайте функцию, которая параметром принимает число и проверяет,
// положительное это число или отрицательное. В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.

// // 1

// let a = +prompt("your number")

// function res(a) {
//     if( a > 0) {
//         return "+++"
//     } else {
//         return "---"
//     }
// }
// console.log(res(a))

// // 2

// function res(a ) {
//     if( a > 0) {
//         console.log("+++")
//     } else {
//         console.log("---")
//     }
// }
// res(-2)


// глобальные и локальные переменные 

//  let global = 10 

// function num() {
//     // локальная область видимости 
//      let local = 12
//     console.log('local', local);
//     console.log('local', global)
//     // из локал мы видим глобал
 
//  }
//  console.log('global', local); // error
//  // из глобал не видно переменная 
//  // объявленная в локал
//  console.log('global', global)



// // В программе объявлена переменная list которая содержит массив чисел 
// // Используя цикл посчитайте сумму чисел и выведите их в консоль

// let list = [23, 23, 25]
// let res = 0 //выводим вне массива потому что это глобальная переменная 
// for ( let i = 0; i < list.length; i++) {
//     res = res + list[i]
// }
// console.log(res) // выводим вне массива из локальной что юы был один конечный (итоговый) результат
//                  // (если оставить в функции то будет присваеивать так 23, 46 , 71)



// В программе объявлена переменная list, которая содержит массив чисел. 


// // Используя цикл посчитайте разность суммы всех отрицательных числе.

// let list = [23, 43, -2, -4, 87, -10]
// let res = 0
// for ( let i = 0; i < list.length; i++) {
//     if (list[i] < 0) {
//         res = res - list[i]
//     } else {
//     }
// }
// console.log(-res)

// // Используя цикл посчитайте разность суммы всех четных чисел и суммы всех нечетных.
// let list = [23, 43, -2, -4, 87, 8, 10]

// let resAven = 0
// let resOdd = 0

// for ( let i = 0; i < list.length; i++) {
//     if (list[i] % 2 == 0) {
//         resAven = resAven + list[i]
//     } else {
//         resOdd = resOdd + list[i]
//     }
// }
// console.log(resAven)
// console.log(resOdd)

// console.log(resAven - resOdd)



// // разница  == и === 
// console.log(10 == 10); // true
// console.log(10 == '10'); // true
// console.log(10 === 10); // true
// console.log(10 === '10'); // false



// // PUSH 

// let arr = [1, 2, 3, 4]

// // arr.push(prompt().toUpperCase()) // добовляет в конец массива и выводи в верхнем регистре 
// // arr.unshift(prompt().toUpperCase()) // добовляет в начало массива в верхнем регистре

// arr.pop() // удаляет последний элемент в массиве 
// arr.shift() // удаляет первый элемент в массиве

// console.log(arr)



// Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив
// чисел со значениями от меньшего числа к большему и от большего к меньшему. 

// function number(num1, num2) {
//     let arr = []
//     if ( num1 > num2) {
//         for (let i = num1 ; i < num2; i++) {
//             arr.push(i)
//         }
//         return arr
//     } else {
//         for (let i = num2 ; i > num1; i--) {
//             arr.push(i)
//         }
//         return arr
//     }
// }

// console.log(number(2,9))


// // Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив
// // чисел со значениями от меньшего числа к большему. 
// function func(val_1, val_2) {
//     let arr = []
//     let start 
//     let end 
//     if (val_1 > val_2) {
//         start = val_2
//         end = val_1
//     } else {
//         start = val_1
//         end = val_2
//     }

//     for (let i = start; i < end; i++) {
//         arr.push(i)
//     }
//     return arr
// }
// console.log(func(9, 2));