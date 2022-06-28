/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
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

    function createMovieList(flm, prnt) {
    prnt.innerHTML = '';
    movieDB.movies.sort();
    flm.forEach( function(film, b) {
        filmsList.innerHTML += `
        <li class="promo__interactive-item">${b+1} ${film}
            <div class="delete"></div>
        </li>
        `;
    });


    
    document.querySelectorAll('.delete').forEach((batn, i) => {
        batn.addEventListener('click', () => {
            batn.parentElement.remove();
            movieDB.movies.splice(i, 1);

            createMovieList (flm, prnt);
        });

    });

};
    

    createMovieList (movieDB.movies, filmsList);
    
    
    let addInput = document.querySelector('.adding__input');
    let btn = document.querySelector('button');
    const favorite = document.querySelector('[type="checkbox"]');

    btn.addEventListener('click', (event) => {
        event.preventDefault();
        if (addInput.value.length < 21) {
            movieDB.movies.push(addInput.value);
        } 
        if (favorite) {
            alert('favorite box');
        } else {
            let stri = addInput.value.substring(0, 21);
            stri += '...';
            movieDB.movies.push(stri);
        }

        movieDB.movies.sort();

        createMovieList (movieDB.movies, filmsList);

        addInput.value.reset();
    });

    const delBUtton = querySelectorAll('.delete');


});



