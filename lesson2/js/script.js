'use strict';


const hearts = document.querySelectorAll('.heart'); // получить данные любого селектора CSS, есть менот forEach!!!
console.log(hearts);



hearts.forEach(item => { // изменить свойство всех элементов в псевдомассиве
    item.style.backgroundColor = 'black';
});

const div = document.createElement('div'); // создать элемент div, сейчас существует только внутри js
const text = document.createTextNode('Hello') // создать текстовый элемент, редко используют
div.classList.add('black'); // добавили КЛАСС из CSS файла к элементу div
hearts[0].after(div);
div.innerHTML = '<h1>Hello</h1>';



