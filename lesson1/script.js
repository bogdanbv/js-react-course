"use strict";

let numberOfFilms;
numberOfFilms = prompt('How many films?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// for (let i = 1; i < 3; i++) {
//     let nameFilm1 = prompt('Last film?', '');
//     let ratingFilm1 = prompt('Raitng of film?', '');
//     if (nameFilm1 != "" && ratingFilm1 != "" && nameFilm1 != null && ratingFilm1 != null && nameFilm1.length < 50 && ratingFilm1.length < 50) {
//         personalMovieDB.movies[nameFilm1] = ratingFilm1;
//     } else {
//         i--;
//     }
    
// }

// let i = 0;
// while (i < 2) {
//     let nameFilm1 = prompt('Last film?', '');
//     let ratingFilm1 = prompt('Raitng of film?', '');
//     if (nameFilm1 != "" && ratingFilm1 != "" && nameFilm1 != null && ratingFilm1 != null && nameFilm1.length < 50 && ratingFilm1.length < 50) {
//         personalMovieDB.movies[nameFilm1] = ratingFilm1;
//         i++;
//     } else {
//     }
    
// }
let i = 0;
do {
    let nameFilm1 = prompt('Last film?', '');
    let ratingFilm1 = prompt('Raitng of film?', '');
    if (nameFilm1 != "" && ratingFilm1 != "" && nameFilm1 != null && ratingFilm1 != null && nameFilm1.length < 50 && ratingFilm1.length < 50) {
        personalMovieDB.movies[nameFilm1] = ratingFilm1;
        i++;
    } else {
    }
    
}
while (i < 2);

if (personalMovieDB.count < 10) {
    alert('Less 10 films');
}
if (personalMovieDB.count > 10 && personalMovieDB.count < 30 ) {
    alert('Less 30 films');
}
if (personalMovieDB.count > 30) {
    alert('Wow! More 30 films');
} else {
    alert('Some Error');
}

console.log(personalMovieDB);

// let numberOfFilms;
// numberOfFilms = prompt('How many films?', '');
// console.log(numberOfFilms);

// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Last film?', '');
// const b = prompt('Last film rating?', '');
// const c = prompt('Last film?', '');
// const d = prompt('Last film rating?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);
 
// console.log( NaN && 2 && undefined );
 
// console.log( 1 && 2 && 3 );
 
// console.log( !1 && 2 || !3 );
 
// console.log( 25 || null && !3 );
 
// console.log( NaN || null || !3 || undefined || 5);
 
// console.log( NaN || null && !3 && undefined || 5);
 
// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }


// let result = '';
// const leng = 7;

// for (i = 1; i < leng; i++) {
//     for (j = 0; j < i; j++) {
//         result += '*';
//     }
//     result += '\n';
// }
// console.log(result);


// let result = '******';
// const leng = 7;

// for (i = 1; i < leng; i++) {
//     for (j = 0; j < i; j++) {
//         result -= '*';
//     }
//     result += '\n';
// }
// console.log(result);

// for (i = 5; i <= 10; i++) {
//     console.log(i);
// }

// for (i = 20; i >= 10; i--) {
//     console.log(i);
//     if (i === 13) {
//         break;
//     }
// }

// for (i = 2; i <= 10;) {
//     console.log(i);
//     i = i + 2;
// }


// for (let i = 2; i <= 16; i++) {
//         if (i % 2 === 0) {
//                 continue;
//             } else {
//                 console.log(i);
//             }
// }

// let i = 0;
// while (i <= 16) {
//     if (i % 2 == 0) {
//         i++;
//         continue;
//     } else { 
//         console.log(i);
//     }
//     i++;
// }

// let arrayOfNumbers = [];
// let v = 0;
// for (i = 1; i <=5; i++) {
//     arrayOfNumbers[v] = i;
//     v++;

// }
// console.log(arrayOfNumbers)

// const arr = ['apple', 'pie', 'yogurt'];


// let len = arr.length;
// let newarr = [];
// for (let i = 0; i <= len - 1; i++) {
//     newarr[i] = arr[i];
// }
// console.log(newarr);

// // 23 Lesson
// // 2
// let data = [5, 10, 'Shopping', 20, 'Homework'];
// let len = data.length;
// for (let i = 0; i < len; i++) {
//     let b = typeof(data[i]);
//     if (b == 'number') {
//         data[i] = data[i] * 2;
//     } else {
//         data[i] = data[i] + '- done';
//     }
// }
// console.log(data);

// //3
// let data = [5, 10, 'Shopping', 20, 'Homework'];
// let len = data.length;
// let caunt = data.length - 1;
// let dataReserv = [];
// for (let i = 0; i < len; i++) {
//     dataReserv[i] = data[caunt];
//     caunt--;
// }
// for (let i = 0; i < len; i++) {
//     data[i] = dataReserv[i];
// }
// console.log(data);

// // 4
// let result = '';
// const leng = 7;

// for (i = 1; i < leng; i++) {
//     for (j = 0; j < i; j++) {
//         for (k = 0; k < leng)
//     }
//     result += '*\n';
// }
// console.log(result);


// // общий i цикл который в котором 7 строк
//   // цикл j который будет формировать строку и в конце строки добавять перенос
//    // цикл k который будет вставлять много пробелов
//      // цикл м который будет вставлять звёздочки

// let result = '         ';
// let zv = '*';
// const leng = 7;
// let b = 0;

// for (i = 1; i < leng; i++) {
//     result =  result.slice(0, 1);

//     for (j = 0; j < b; j++) {
//         result += '*';
//         j++;
//     }
// result += '\n';
// b++;
// }
// console.log(result);