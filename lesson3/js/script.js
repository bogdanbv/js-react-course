/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Арму",
        "Скотт Пилигрим против...",
    ]
};

let adv = document.querySelectorAll('.promo__adv img'),
    filmsList = document.querySelector('.promo__interactive-list');
adv.forEach(item => {
    item.remove();
});

document.querySelector('.promo__genre').textContent = 'ДРАММА';
document.querySelector('.promo__bg').style.background = `url("../lesson3/img/bg.jpg") center center/cover no-repeat`;

movieDB.movies.sort();
filmsList.innerHTML = '';

movieDB.movies.forEach( function(film, b) {
    filmsList.innerHTML += `
    <li class="promo__interactive-item">${b+1} ${film}
        <div class="delete"></div>
    </li>
    `;
});

console.log(filmsList);


