// функция function 


// let players = [
//     {
//         names: "Human",
//         health: 100,
//         damage: 22
//     },
//     {
//         names: "Alien",
//         health: 200,
//         damage: 10
//     },
// ];
// console.log(players[1].health)


// function summator(num1, num2) {
//     return num1+num2
// }
// alert(summator(10,4))


// // Фозращает сумму четных чисел от 1 до 10
// // 1.
// function number() {
//     let sum = 0;

//     for (let i = 0; i <= 10; i += 2) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(number());

// // 2.
// function number() {
//     let sum = 0;

//     for (let i = 0; i <= 10; i++) {
//         if (i % 2 == 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }
// console.log(number());


// //Задача. Написать функцию, которая принимает массив чисел (оценок студента) и возвращает его средний балл
// function average_rating(grades) {
//     let sum = 0;

//     for (let i = 0; i < grades.length; i++) {
//       sum += grades[i];
//     }

//     return sum / grades.length;

// }

// console.log(average_rating([3, 4, 5]));







// // Задача. Написать функцию, которая массив игроков (объектов), со след/полями: имя_пользователя, ущерб и выводит среднее значение ущерба для них
// let players = [ // два игрока
//     {
//         username: 'Player 1',
//         damage: 90
//     },
//     {
//         username: 'Player 2',
//         damage: 150
//     }
// ];

// function calc_avg_damage(players) {
//     let sum = 0;

//     for (let i = 0; i < players.length; i++) {
//         sum += players[i].damage;
//     }

//     return sum / players.length;

// }

// const avg_damage = calc_avg_damage(players);
// console.log(`Средний ущерб для указанных игроков равен ${avg_damage}`);



// // Задача. Написать функцию, которая принимает радиус и возвращает площадь окружности с указанным радиусом
// function proc(num1, num2) {
//  console.log(num1 * (1 - num2 / 100))
// }
// proc(100,10)



// // Задача. Вывести информацию о пользователях
// const users = [
//     ['Ivan', 20, 'ivan@example.org'],
//     ['Petr', 30, 'petr@example.org'],
//     ['Pavel', 40, 'pavel@example.org']
//  ];
 
//  // Вывести имя 1-го юзера
//  // Вывести возраст 3-го юзера
//  // Вывести email 2-го юзера


// console.log(users[0][0])
// console.log(users[2][1])
// console.log(users[1][2])






// function upperAlphabet(alphabet) {
//     for (let i = 0; i < alphabet.length; i++) {
//         let UpperCase = alphabet[i].toUpperCase()
//         console.log(UpperCase)
//     }
// }
// console.log(upperAlphabet(["Abfjsbf", "HYBjbvjhbjy","hjvcshgcvhsgv"]));



// Задача. Написать функцию, которая получает товар (объект) с ценой в EUR и возвращает его стоимость (скаляр) в USD

// const product = {title: 'Product 1', price: 500, quantity: 10};

// function currency_exchange() {
//     return product.price * 1.06;
// }

// console.log(currency_exchange(product));


const radius = (10);
function squard() {
    return radius ** 2 * 3.14159265 
}
console.log(`Площадь ${squard()}, Радиус ${radius}`)




// function number(score) {
//     sum = 0;
//     for( let i = 0; i < score.length; i++){
//         sum += score[i];
//     }
//     return sum / score.length;
// }

// console.log(number([1, 2, 3, 4, 5, 6]));
