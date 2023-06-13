// DOM и навигация по html



// //1. поиск по тегу 
// const title = document.querySelector("h1")
// console.log(title.innerText)
// title.innerText = "Hello New York"

// //2. поиск по классу
// const descr = document.querySelector(".descr")
// console.log(descr)


// изменим текст в 1.



// // Найти элементы
// // а) найти тег ссылки на гугл
// // б) найти тег с классом footer
// // в) найти заголовок в main

// // Поменять текст внутри ссылки гугл на "Facebook"
// // Поменять текст внутри тега с классом footer на Hello
// // Поменять текст внутри h2 на TITLE

// const link = document.querySelector("main a")  // вложенный селектор
// link.innerText = "Facebook"
// console.log(link.innerText)

// const footer = document.querySelector(".footer")
// footer.innerText = "Hello"
// console.log(footer.innerText)

// const titleH2 = document.querySelector("h2")
// titleH2.innerText = "TITLE"
// console.log(titleH2.innerText)



// // Добавим к тексту внутри h1. Это мой первый заголовк

// const title = document.querySelector("h1")
// title.innerText += ". Это мой первый заголовок"
// console.log(title.innerText)



// // Поменяем текс во всех тегах p 
// const texts = document.querySelectorAll("p")
// for(let i = 0; i < texts.length; i++)
// texts[i].innerText = "Hello I`m"




// // Помеанять текст у тега "а" на "Facebook" и поменять ссылку
// const link = document.querySelector("main a")
// link.innerText = "Facebook"
// link.setAttribute("href", "https://facebook.com/")
// // getAttribute(attr) - метод, для получения значение атрибута тега
// // attr - название атрибута, значение которого мы хотим получить
// // setAttribute(attr, value) - метод, для назначения атрибута
// //     attr - название атрибута, значение которого мы хотим изменить
// //     value - значение, на которое хотим поменять



// // Задача. Поменять у всех ссылок текст на Instagram
// // Ссылку у всех тегов поменять на https://instagram.com
// //1.
// const link = document.querySelectorAll("a")
// for(let i = 0; i < link.length; i++) {
// link[i].innerText = "Instagram"
// link[i].setAttribute("href", "https://instagram.com/")
// }
// //2.
// const link = document.querySelectorAll("a")
// const texts = document.querySelectorAll("a")
// for(let i = 0; i < texts.length; i++)
// texts[i].innerText = "Instagram"
// for(let i = 0; i < link.length; i++)
// link[i].setAttribute("href", "https://instagram.com/")







/*
// Задача. Поменять текст во всех тегах p на "Привет. Как дела?"
// Переписать код используя цикл for
const texts = document.querySelectorAll("p")
texts[0].innerText = "Привет. Как дела?"
texts[1].innerText = "Привет. Как дела?"
texts[2].innerText = "Привет. Как дела?"

/*
    nodeList.length - длина списка или количество найденных элементов


// const array = [10, 20, 30, 50]
// console.log(array)


    const names = ["Arsen", "Lana", "Bogdan"]
    const numbers = [10, 20, 30, 40, 50]

    const texts = [
        {
            innerText: "Lorem...."
        },
        {
            innerText: "Lorem...."
        }, 
        {
            innerText: "Lorem...."
        }
    ]
    texts[0].innerText
    texts.innerText



innerText - свойство получить или назначить текст внутри тега
    title = {
        innerText: "Hello World"
    }



querySelector() - поиск первого элемента по селектору
    querySelectorAll() - поиск всех элементов по селектору

    селектор выбор из HTML:
    1. по тегу - h1, header, main {}
    2. по классу - .item , .user
    3. по id - # 

        функция

        function greeting() {
            console.log("Hello")
        }

        метод 

        let user = {
            key: value,
            greeting: function() {
                console.log("hello")
            }
        }
        
    числа
    строки
    буль
    объекты (массивы) - 
        let user = {
            name: "Arsen"
        }

    main = {
        className: "main"
        innerHTML: "<h1></h1>"
        style: {
            backgroundColor: "red"
        }
    }
*/