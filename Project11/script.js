// функция function 

// function makeFood() {
//     console.log("cut the vegetables")
//     console.log("cook vegetables")
//     console.log("add sauce to vegetables")
//     console.log("mix vegetables")
// }

// makeFood() // первый раз вывели
// makeFood() // второй раз вывели 

// Создать функцию кторая получает имя пользователя и в консоли отображаем 
// Hello, (ALIAKSEI) <- в верхем регистре 


// function greeting(name) {
//     const newName = name.toUpperCase()
//     console.log(`Hello, ${newName}`)
// }
// greeting(prompt("Your name"))
// greeting(prompt("Your name"))


// Задача. Создать функцию, которая получает два числовых параметра и в консоли выводит
// а) сумму чисел
// б) разность 
// в) произведение
// г) деление

// function calc(num1, num2) {
//     console.log(num1 + num2)
//     console.log(num1 - num2)
//     console.log(num1 * num2)
//     console.log(num1 / num2)
// }
// calc(+prompt("first"), +prompt("second"))


//// Задача. Создать функцию, которая получает два числа и в консоли выводит наибольшее из них


// function max(num1, num2) {
//     if(num1 > num2) {
//         console.log(num1)
//     } else {
//         console.log(num2)
//     }
// }
// max(10, 20)


// for(let i = 0; i < 10; i++) {
//     console.log(i)
// }


//// Задача. Создать функцию, которая принимает число и выводит все числа от 0 до числа,
//// которое принимаем в параметре
//// fn(10) // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
// function number(num1) {
//     for (let i = 0; i < num1; i++) {
//         console.log(i)
//     }
// }
// number(10)


//// Задача. Создать функцию подсчета площади комнаты. 
//// Она должна принимать длину и ширину, а в консоли отображать площадь
//// площадь равна произведению ширины на длину. S = a * b
// function calcSquare(a, b) {
//     console.log(a * b)
// } 
// calcSquare(10, 15)


//// Задача. Создать функцию, которая будет поздравлять пользователя с днем рождения
//// Она должна принимать имя пользователя и в консоли отображать поздравление
//// "Привет, ${имя}, Поздравляю с днем рождения!"
// function congrats(name) {
//     console.log(`Привет, ${name}, Поздравляю с днем рождения`)
// }
// congrats("Arsen")


////Задача создать функцию которая при принятии числа выводит что оно четное или не четное
// function number(num1) {
//     if (num1 % 2 == 0) {
//         console.log("четное")
//     } else {
//         console.log(" не четное")
//     }
// }
// number(12)


// // Задача создать функцию которая принимает число и выводит массив с числами от 0 до этого числа 
// let arr = []
// function printArray(number) {
//     for( let i = 0; i < number; i++) {
//         console.log(i)
//       arr.push(i)
//     }
//     console.log(arr)
// }
// printArray(10)


//// Задача. Создать функцию, которая запрашивает у пользователя 3 имени, с помощью for.
// Каждое введенное имя перевести в верхний регистр - toUpperCase()
// Создать массив, в который положить все имена в верхнем регистре
// В консоли отобразить итоговый массив 
function namePrint() {
    let names = []
    for (let i = 0; i < 3; i++){
        let name = prompt("tell me the name")
        let upperCaseName = name.toUpperCase()
        names.push(upperCaseName)
    }
    console.log(names)
}
namePrint()


/* 
 функция - это переиспользуемый блок кода.

    Function Declaration 
    function Name(параметр1, параметр2...) {
        тело функции - алгоритм действий функции
    }
    параметр - входные данные, с которыми работает функция


    Math.power(10, 2) - 10 - число, 2 - степень, в которую нужно возвести число
*/