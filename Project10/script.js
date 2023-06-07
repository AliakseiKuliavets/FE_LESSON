// обьект 

// let array = ["Hello", "Hello World", 1, 2, 3, 4, 5, true];
// console.log(array);

// let obj = {

// }


// let user = {
//     email: "user@gmail.com",
//     name: "Aliaksei",
//     age: 22,
//     hobbies: ["football", "design"],
//     info: {
//         descr: "Lorem Ipsum dolor sit amet"
//     }
// }
// console.log(user)
// console.log(user.name)
// console.log(user.hobbies[1])

// let product1 = {
//     price: 2,
//     name: "potatoe"
// }
// let product2 = {
//     price: 4,
//     name: "tomate"
// }



// Вывести название каждого продукта 
// let product = [
//     {
//         price: 2,
//         name: "potatoe"
//     },
//     {
//         price: 4,
//         name: "tomate"
//     },
//     {
//         price: 6,
//         name: "Onion" 
//     }    
// ];
// for(let i = 0; i < product.length; i++) {
//     console.log(product[i].name)
// };



// Задача нужно посчитать сумму всех products и вывести сумму 
// let sum = 0 
// for(let i = 0; i < product.length; i++) {
//     sum = sum + product[i].price
// }
// console.log(sum)



// Создать массив обьктов users и в них создать оьтекты Name , mail, login, age
// let users = [{
//     Aliaksei: {
//         email: "aliaks@gmail.com",
//         login: "potatoe",
//         age: 22
//     }
// },
// {
//     Arsen: {
//         email: "arsen@gmail.com",
//         login: "user123",
//         age: 25
//     }
// },
// {
//     Sergey: {
//         email: "sergey@gmail.com",
//         login: "admin",
//         age: 29
//     }
// }
// ];

// Создать массив обьктов users и в них создать оьтекты Name , mail, login, age
// Отобразить в консоли имя и email каждого пользователя в виде, используя цикл for
// "Ваш email - {email пользователя}, а ваш логин - {login пользователя}"
// 1. "Your email - aliaks@gmail.com. Your login is - potatoe"
// 2. "Your email - arsen@gmail.com. Your login is - user123"
// 3. "Your email - sergey@gmail.com. Your login is - admin"

let users = [
    {
    name: "Aliaksei",
    email: "aliaks@gmail.com",
    login: "potatoe",
    age: 15 
},
{
    name: "Arsen",
    email: "arsen@gmail.com",
    login: "user123",
    age: 25
},
{
    name: "Sergey",
    email: "sergey@gmail.com",
    login: "admin",
    age: 29
}
]
// for(let i = 0; i < users.length; i++) {
//     console.log(`Your email - ${users[i].email}. Your login is - ${users[i].login} `)
// }

// отобразить пользователей кому больще 18 лет отбразить логин 

// for(let i = 0; i < users.length; i++) {
//     if (users[i].age > 18) {
//     console.log(users[i].login)
//     }
// }


// Создать новый массив и отобразить пользователей кому больще 18 лет отбразить логин 
// const validateUsers = []
// for(let i = 0; i < users.length; i++) {
//     if (users[i].age > 18) {
//         validateUsers.push(users[i].login)
//     }
// }
// console.log(validateUsers)

const validatedUsers = [] //
for(let i = 0; i < users.length; i++) {
    if(users[i].age > 18) {
        validatedUsers.push({login: users[i].login, name : users[i].name}) // push - метод который добавляет элемент в конец массива
    }
}
console.log(validatedUsers)

