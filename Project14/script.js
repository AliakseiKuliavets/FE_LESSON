// Событие и их обработка


// // Задача. при клике на кнопку btn, в консоли отобразить "приветствую!"
// const btn = document.querySelector(".btn")
// btn.addEventListener("click", function() {
//     console.log("Hello World")
// })

// const btn = document.querySelector(".btn")
// btn.addEventListener("click", function() {
//     for( let i = 0; i < 10; i++) {
//         console.log("Hello World")
//     }
// })
/*
    addEventListener - метод, который позволяет вызвать функцию по происшествии какого-либо события

    addEventListener(type, cb) - принимает два аргумента
    type - тип события - click, scroll, submit, change, input
    cb - callback function - функция обратного вызова, функцию вызываем не мы, а какая-то другая функция
*/




// // Задача. При нажатии на кпноку btn увеличивать значение в p.text на 1 

//  /*
//     1. Создаем переменную для хранения текущего значения числа
//     2. При клике увеличиваем переменную на 1
//         2.1. Повесить слушатель события на кнопку
//         2.2. Вызывать cb функцию, которая увеличивает переменную на 1
//     3. меняем текст в теге p на значение переменной
//  */

// const btn = document.querySelector(".btn")
// const text = document.querySelector(".text")
// let num = 0;
// btn.addEventListener("click", function() {
//     num++
//     text.innerHTML = num
// })

// Задача вывести в <p class="text"> num + num = sumNum </p>

// const btn = document.querySelector(".btn")
// const x = document.querySelector(".text")
// let num = 0;
// let sumNum = 0;
// btn.addEventListener("click", function() {
//     num += 1
//     sumNum = num + num
//         x.innerHTML = `${num} + ${num} = ${sumNum}`
//     })



// // Задача. а при нажатии на минус 1 уменьшать значение в p.text на 1 
// const btn = document.querySelector(".btn")
// const btn_minus = document.querySelector(".btn_minus")
// const text = document.querySelector(".text")
// let num = 0;

// btn.addEventListener("click", function () {
//     num++
//     text.innerHTML = num
// })
// btn_minus.addEventListener("click", function () {
//     if (num >= 0) {
//         text.innerHTML = num--
//     }
// })





const red = document.querySelector(".red-btn")
const green = document.querySelector(".green-btn")
const blue = document.querySelector(".blue-btn")
const yellow = document.querySelector(".yellow-btn")
red.addEventListener("click", function() {
    document.body.style.backgroundColor = "green" 
})
green.addEventListener("click", function() {
    document.body.style.backgroundColor = "blue" 
})
blue.addEventListener("click", function() {
    document.body.style.backgroundColor = "yellow" 
})
yellow.addEventListener("click", function() {
    document.body.style.backgroundColor = "red" 
})

const img = document.querySelector(".img-btn")
img.addEventListener("click", function() {
    document.body.style.background = "url(123.png)";
})

// ДЗ. При нажатии на каждую из кнопок менять цвет фона body на соответвующий
//         При нажатии на кнопку img-btn менять фон body на картинку.

//         Обращаться к кнопкам не по отдельно а ко всем одновременно
//             querySelectorAll()





// main = 
//     {
//         innerHTML: "<button></button>",
//         style: {
//             backgroundColor: ""
//         }
//     }


// Задача. При нажатии на кнопки менять цвет фона body на соответсвующий
// const red = document.querySelector(".red-btn")

