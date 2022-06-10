"use strict";

//////////////// ФУНКУИИ ////////////////

// 29.5
let hours;
let min;
function getTimeFromMinutes(num) {
    min = num % 60;
    hours = Math.floor(num / 60);

    let horsStr = '';

    switch (hours) {
        case 0:
            horsStr = 'hours';
            break;
        case 1:
            horsStr = "hours1";
            break;
        case 2:
        case 3:
        case 4:    
            horsStr = "hours2";
            break;
        default:
            horsStr = "hours1";
            break;
    }
    return `Tish is ${hours} ${horsStr}, and ${min} minutes`;
}

console.log(getTimeFromMinutes(50));
console.log(getTimeFromMinutes(150));
console.log(getTimeFromMinutes(0));

// 29.4
// function getCoupeNumber(num) { // создали функцию с переменной
//     if (num >= 1 && num <= 36 && Number.isInteger(num)) { // если num меньше или 1 и num меньше 36 и num являеться числом то делаем код ниже
//         let coupe = 1; // создали переменная с номером купе равно 1
//         for (let i = 0; i <= 36; i = i +4) { // создали цикл где i равна 0, который остановиться когда дойдет до 36, и за один цикл будет добавлять к i + 4
//             if (num >= i && num <= (coupe * 4) ) { // если num больше i но меньше coupe умножить на 4 то делать код ниже
//                 return coupe; // выдаем в ответ номер купе
//             }
//             coupe = coupe + 1; // если нашь номер не попал в условие выше то для следующего цикла увеличиваем номер купа на 1
//         }
//     }
//     if (num == 0 || num > 36) { // если num равен нулю или больше 36 то пишем текст ниже
//         return "Place don't exist";
//     } else { // во всех других значениях num пишем текст ниже
//         return "Wrong format number"; 
//     }
// }
// console.log(getCoupeNumber(33));
// console.log(getCoupeNumber(7));
// console.log(getCoupeNumber(300));
// console.log(getCoupeNumber(0));
// console.log(getCoupeNumber(7.7));
// console.log(getCoupeNumber(-10));


// function calculateVolumeAndArea(num) { // создали функцию в которой есть переменная num
//     if (Number.isInteger(num)) { // проверяем являеться ли переменная целым числом
//     let volumee = num * num * num; // считаем по формуле обьём
//     let area = 6 * (num * num); // считаем по формуле площадь
//     return `Coube square: ${volumee}, total surface: ${area}'`; // возвращаем результат с текстом и переменными
//     } else { // во всех других случаях, если число не являеться целым, исполняем код ниже
//         return `Some problem, sorry!`; // вывдим текст
//     }
// }
// console.log(calculateVolumeAndArea(5)); // обращаемся к нашей функции с аргументом 5
// console.log(calculateVolumeAndArea(15));
// console.log(calculateVolumeAndArea(15.5));
// console.log(calculateVolumeAndArea('dds'));

// 29.3
// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('How many films?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Wrong value, How many films?', '');
//     }

// }
// start();

// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms() {
// for (let i = 1; i < 3; i++) {
//     let nameFilm1 = prompt('Last film?', '');
//     let ratingFilm1 = prompt('Raitng of film?', '');
//     if (nameFilm1 != "" && ratingFilm1 != "" && nameFilm1 != null && ratingFilm1 != null && nameFilm1.length < 50 && ratingFilm1.length < 50) {
//         personalMovieDB.movies[nameFilm1] = ratingFilm1;
//     } else {
//         i--;
//     }
    
// }
// }

// // rememberMyFilms();

// function directPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         alert('Less 10 films');
//     }
//     if (personalMovieDB.count > 10 && personalMovieDB.count < 30 ) {
//         alert('Less 30 films');
//     }
//     if (personalMovieDB.count > 30) {
//         alert('Wow! More 30 films');
//     } else {
//         alert('Some Error');
//     }
// }

// // directPersonalLevel();

// function showMyDB() {
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB);
//     } else {
//         alert('DB is private.')
//     }
// }

// showMyDB();

// function writeYourGenres() {
//     for (let i = 1; i < 4; i++) {
//         personalMovieDB.genres[i-1] = prompt(`What is your ${i} genre?`, ``);
//     }
// }

// writeYourGenres();


// 6.2
// function gerMassiv(num) {
//     let db = [];
//     db[0] = num-1;
//     db[1] = num;
//     db[2] = num+1;
//     return db;
// }
// console.log(gerMassiv(2));

// 6.3
// function getMathResult(a, b) {  // создали функцию с двумя аргументами а и b
//     if (typeof(b) == "string" || b < 1) { // создали условие, если b являеться строкой или меньше 1
//         return a; // то просто выводим значение a
//     }
//     if (typeof(b) != "string") { // создали условие что если b не равняеться строковым значением (не цифра)
//         let c = ''; // создали переменную c пустую
//         let result = ''; // создали переменную result пустую
//         for (i = 1; i < b + 1; i++) { // создали цикл, количество запусков которого будет равно значению b
//             c = a * i; // умножаем нашу переменную на первый множитель
//             if (i == b) { // если у нас последний виток цикла то не выводим в конце ---
//                 result = result + c; 
//             } else {
//             result = result + c + "---"; // записываем в нашу переменную получившееся значение из 24 строки
//             }
//         }
//     return result; // выводим финальный результат, строку в которую вписаны все значения из цикла через ---
//     }   
// }
// console.log(getMathResult(5, 3)); // просто запускаем функцию с подставленными значениями a и b
// console.log(getMathResult(3, 10));
// console.log(getMathResult(10, 5));
// console.log(getMathResult(10, '5'));
// console.log(getMathResult(10, 0));

// let numberOfFilms;
// numberOfFilms = prompt('How many films?', '');

// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

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


// let i = 0;
// do {
//     let nameFilm1 = prompt('Last film?', '');
//     let ratingFilm1 = prompt('Raitng of film?', '');
//     if (nameFilm1 != "" && ratingFilm1 != "" && nameFilm1 != null && ratingFilm1 != null && nameFilm1.length < 50 && ratingFilm1.length < 50) {
//         personalMovieDB.movies[nameFilm1] = ratingFilm1;
//         i++;
//     } else {
//     }
    
// }
// while (i < 2);

// if (personalMovieDB.count < 10) {
//     alert('Less 10 films');
// }
// if (personalMovieDB.count > 10 && personalMovieDB.count < 30 ) {
//     alert('Less 30 films');
// }
// if (personalMovieDB.count > 30) {
//     alert('Wow! More 30 films');
// } else {
//     alert('Some Error');
// }

// console.log(personalMovieDB);



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