const form = document.querySelector("form")
const productName = document.querySelector(".product-name")
const productPrice = document.querySelector(".product-price")
const productAdd = document.querySelector(".add-sub")
const section = document.querySelector(".sectionProducts")
const productNew = document.querySelectorAll(".productNew")



const products = [
    {
        name: "Iphone 13",
        price: 60000
    },
]

form.addEventListener("submit", function (event) {
    event.preventDefault()

    const newProduct = {
        name: productName.value,
        price: Number(productPrice.value)
    }
    products.push(newProduct)

    clearInput()

    showProducts()
})

function clearInput() {
    productName.value = ""
    productPrice.value = ""
}


function showProducts() {
    section.innerHTML = ""
    products.forEach(function (product, index) {
        section.innerHTML += `
            <div class="productNew">
            <p class="productNewP">${product.name}</p>
            <p class="productNewP">${product.price}</p>
            <button class="clear" id ="${index}">X</button>
            </div>`
    })
    onCardHover()
    clear()
}
showProducts()


function onCardHover() {
    const productNew = document.querySelectorAll(".productNew")
    productNew.forEach(function(card) {
        card.addEventListener("mouseover", function() {
            card.querySelector(".clear").style.display = "block"
        })
        card.addEventListener("mouseout", function() {
            card.querySelector(".clear").style.display = "none"
        })
    })
}

function clear() {
    const delet = document.querySelectorAll(".clear")
    delet.forEach(function(btn) {
        btn.addEventListener("click", function() {
            const buttonDel = btn.id
            products.splice(buttonDel, 1)
            btn.parentElement.remove()
        })
    })
}







/*
    for - низкоуровневый цикл. задаем параметры для того, чтобы пройтись циклом по массиву
        инициализация, условие, шаг
    
    forEach - высокоуровневый, больше похож на человеческий язык

    array.forEach(function(item, index, array) {
        console.log(item)
    })
    метод forEach вызовет переданную коллбек функцию столько раз сколько элементов в массиве array?
        при этом функция принимает 3 параметра
        1. item - каждый элемент в массиве. первый раз функция выполнится и получит первый элемент массива
            второй раз получить второй элемент массива и т д 
        2. index - это порядковые номер элемента в массиве array[0], array[1]
        3. array - это сам массив
*/