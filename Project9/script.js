// // массивы и циклы

// const names = ["Alexander", "Julia", "Arsen"];

// // В консоли отобразить имя Julia  из массива names
// console.log(names[1]);


// // Cоздать массив чисел, в котором буду числа - 10, 15, 0, 100, 21
// const numbers = [10, 15, 0, 100, 21];
// console.log(numbers[2]);


// const countries = ["Germany", "France", "UK"];
// console.log(countries.length); // длинна массива

// countries.push("Spain"); // добавляем к массиву 
// console.log(countries.length);

// console.log(countries[countries.length - 1]); // выведем последний элемент 


// есть массив нужно попросить ввести имя и вывести весь массив 

// let names = ["Alexander", "Julia", "Arsen"];
// let name1 = prompt("names");
// let name2 = prompt("names");
// names.push(name1, name2);
// console.log(names);

// 

// В консоли 10 раз написать Hello 
// for(let i = 0; i < 10; i++) {
//     console.log("Hello")
// };


// 

// for(let i = 0; i < 50; i++ ) {
//     console.log("Hello World")
// };


// В консоли отобразить числа от 1 до 100
// а. Не включая 100 
// for(let i = 0; i < 100; i++ ) {
//     console.log(i + 1)
// };


// Задача В консоли отобразить все четные числа от 1 до 100
// for (let i = 0; i < 100; i++) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//   }


// Задача В консоли отобразить все нечетные числа от 1 до 100
// for (let i = 0; i < 100; i++) {
//     if (i % 2 == 1) {
//       console.log(i);
//     }
//   }


// Есть массив names  В консоли отобразить каждое имя из этого массива 
// let names = ["Alexander", "Julia", "Arsen", "Elena"];
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i])
// };


// Есть массив чисел возвести их в квадрат 
// let numbers = [10, 20, 5, 11, 6, 4];
// for (let i = 0; i < numbers.length; i++ ) {
//     console.log(numbers[i] ** 2)
// };

// Задача Есть массив строкю Нужно вывести каждую строку в верхнем регистре
// let countries = ["Germany", "France", "UK"];
// let countries = [];
// for (let i = 0; i < countries.length; i++ ) 
// console.log(countries[i].toUpperCase())
// for(let i = 0; i < countries.length; i++) {
//     const upperCaseCountry = countries[i].toUpperCase()
//     console.log(upperCaseCountry)
//     countries.push(upperCaseCountry) // если хотим заполнить другой массив странами в верхнем регистре
// }




/* 
       цикл for

    for(инициализация; условие; шаг) {
        тело цикла
    }

        1. инициализация - создаем счетчик. let i - iteration, итерация - повторение
        2. условие - момент до которого наш счетчик должен выполняться
        3. шаг - после каждого действия, увеличиваем шаг счетчика до момента завершения
            i++ - увеличение переменной на 1

        Алгоритм работы цикла:
            1. Выполняется начало - let i = 0
            2. Выполняется условие - i < 10
                Если условие true - выполняется действие в теле цикла - console.log("Hello")
               
            3. Выполняется шаг - увеличение переменной i на 1, Опять переходим к пункту 2

             Если false - выход из цикла

        let i = 0
        i = i + 1 // 1
        i+= 1
        i++ - инкремент

        i = i + 2
        i += 2 -


  */