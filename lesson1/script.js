"use strict";

let numberOfFilms;
numberOfFilms = prompt('How many films?', '');
console.log(numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Last film?', '');
const b = prompt('Last film rating?', '');
const c = prompt('Last film?', '');
const d = prompt('Last film rating?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
