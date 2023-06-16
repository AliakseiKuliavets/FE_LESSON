// function toogle_theme() {
//     document.body.classList.toggle
//     ("is-dark")
// }


// const text = document.querySelector("textarea")
// const counter = document.querySelector("#counter")


// // 1 положительный от 0 до 100
// text.addEventListener('input', function() {
//     counter.textContent = text.value.length
// })


// 2 отрицательный от 100 до 0
const text = document.querySelector('textarea');
const counter = document.querySelector('#counter');

text.addEventListener('input', function() {
    const maxLength = text.getAttribute('maxlength');
    const remaining = maxLength - text.value.length;
    counter.textContent = remaining;
});