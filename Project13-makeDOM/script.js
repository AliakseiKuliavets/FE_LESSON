// создание элементов


// createElement() - метод создания элемента


// // поэтапно создаем h1 в header

// const header = document.querySelector("header") // ищем куда будем создавать 
// const title = document.createElement("h1") // создаю элемент
// title.innerText = "My  web" // меняем имя в titel (добавляем)
// header.appendChild(title) // добовляем созданный элемент в header
// /*
//     innerText - свойстсво текста внутри тега

//     Алгоритм создания элемента
//         1. Находим элемент, в который хотим положить созданный тег. querySelector()
//         2. Создаем тег. createElement()
//         3. Добавляем текст. innerText
//         4. Добавляем созданный тег в найденный в h1 тег. appendChild()
// */



// // 2. innerHTML - свойство, которое позволяет получить или назначить HTML содержимое тега

// const main = document.querySelector("main")
// console.log(main.innerHTML)
// // задача в header добавить h1 с текстом "My Title"
// const header = document.querySelector("header")
// header.innerHTML = "<h1> My Title </h1>"   // если несколько строк лучше использовать косые ковычки ` ` 



// // 3. Задача. Создать цикл, который позволяет добавить 10 тегов p с тектом HELLO внутрь section
// const section = document.querySelector("main section")
// for (let i = 0; i < 10; i++) {
//     section.innerHTML += "<p> Hello World </p>"  // "+=" сохраняет и делает копию если поставить просто "=" то мы перезапишем 
// }
// /*  
//    1.  Свойство innerText позволяет считывать или задавать текстовое содержимое элемента. 
//     При считывании текста с элемента будет возвращена строка с текстовым содержимым всех вложенных дочерних элементов. 

//     2. Свойство innerHTML позволяет считать содержимое элемента в виде HTML-строки или установить новый HTML.
//     */



// // 4. Задача. Есть массив имен names. Для каждого имени создать тег p и добавить его в section 

// const names = ["Arsen", "Yuliya", "Lana", "Maria"]

// const section = document.querySelector("main section")
// for (let i = 0; i < names.length; i++) {
//     section.innerHTML += `<p class="text"> ${names[i]} </p>`   // ставим `<p> ${names[i]} </p>` потому что подключаем переменную с массива names 
//                                                   // а ЗА ПРЕДЕЛАМИ СТАВИМ ОБРАТНЫЕ КОВЫЧКИ   ` `
// }



// // 5. Задача. Есть массив объектов poducts для каждого продукта создать разметку ПРИМЕР:
// /*
//     <div class="product">
//         <h5>Назввание продукта</h5>
//         <p>Цена продукта</p>
//     </div>
// */

// const products = [
//     {
//         name: "Iphone 13",
//         price: 10000
//     },
//     {
//         name: "Iphone 14",
//         price: 20000
//     },
//     {
//         name: "Iphone 15",
//         price: 25000
//     }
// ]

// const section = document.querySelector("main section")
// for (let i = 0; i < products.length; i++) {
//     section.innerHTML += `
//     <div class="product">
//         <h5>${products[i].name}</h5>
//         <p>${products[i].price}</p>
//     </div>`
// }



//// 6. Добавить в разметку <h1></h1>, в котором должна быть общая стоимость всех продуктов
//// 1. с помощью цикла for посчитать сумму всех продуктов
//// 2. добавить h1 в конец section, в котором указать цену

// // включать с массивом из 5 
// const section = document.querySelector("main section")
// let priceAll = 0;
// for (let i = 0; i < products.length; i++) {
//     priceAll += products[i].price 
// }
// section.innerHTML += `
//     <h1>${priceAll}</h1>`



// Задача. Есть массив products. 
// 1. Для каждого объекта в массиве products создать разметку
// 2. Отобразить только те продукты, цена которых больше 10000
// 3. Отобразить только те продукты, категория которых - phone

const products = [
    {
        name: "Iphone 13",
        category: "phone",
        price: 15000
    },
    {
        name: "Iphone 14",
        category: "phone",
        price: 20000
    },
    {
        name: "Acer",
        category: "laptop",
        price: 40000
    },
    {
        name: "Asus",
        category: "laptop",
        price: 35000
    },
    {
        name: "Samsung",
        category: "TV",
        price: 27000
    },
    {
        name: "LG",
        category: "TV",
        price: 7000
    },
]

/*
    <div class="product">
        <h3> {имя продукта} </h3>
        <p> {категория продукта} </p>
        <p> {цена продукта} </p>
        <button>Купить</button>
    </div>
*/

const section = document.querySelector("main section")

////1. Для каждого объекта в массиве products создать разметку
// for( let i = 0; i < products.length; i++) {
//     section.innerHTML += `
//     <div class="product">
//         <h3> ${products[i].name} </h3>
//         <p> ${products[i].category} </p>
//         <p> ${products[i].price} </p>
//         <button>Купить</button>
//     </div>  `
// }


////2.Отобразить только те продукты, цена которых больше 10000
// for(let i = 0; i < products.length; i++) {
//     if (products[i].price >= 10000) {
//         section.innerHTML += `
//     <div class="product">
//         <h3> ${products[i].name} </h3>
//         <p> ${products[i].category} </p>
//         <p> ${products[i].price} </p>
//         <button>Купить</button>
//     </div>  `
//     }
// }


////3.Отобразить только те продукты, категория которых - phone
// for(let i = 0; i < products.length; i++) {
//     if (products[i].category == "phone") {
//         section.innerHTML += `
//     <div class="product">
//         <h3> ${products[i].name} </h3>
//         <p> ${products[i].category} </p>
//         <p> ${products[i].price} </p>
//         <button>Купить</button>
//     </div>  `
//     }
// }