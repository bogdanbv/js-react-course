"use strict";
 #ОПЕРАТОРЫ:
= // присвоениие
== // равенство значений
=== // строгое равенство
% // остаток после деления первого числа на второе
&& // и
|| // или
! // отрицание !true или не равен !=, так же используют чтобы поменять значение на противоположное !0 выдаст True потому тчо 0 это false

? // let result = условие ? значение1 : значение2;
let age = prompt('Возраст?', 18);
let message = (age < 3) ? 'Здравствуй, малыш!' :
  (age < 18) ? 'Привет!' :
  (age < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';
alert( message );

let company = prompt('Какая компания создала JavaScript?', '');
(company == 'Netscape') ?
   alert('Верно!') : alert('Неправильно.');

// ТАБЛИЦА ПРИОРИТЕТОВ ОПЕРАТОРОВhttps://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table

--somevar // инкримент в префиксе
somevar-- // инкримент в постфиксным
somevar--
let name; // для изменяемых
const nameConstant; // для не изменяемых
const arr = [1, 2, "john"]; // массив, перечень инфо по порядку
answers[3] = prompt('What is your name?', ''); // спросить данные у пользователя и записать их в массив

alert("Alert"); // всплывающее окно с тектсом
const result = confirm("Are you human?"); // попап спросить возраст
const answer = prompt ("How old are you?" "18"); // попап спросить возраст и дать возможность написать знаение, тип данных строка, чтобы полуить номер, поставить + перед prompt
const category ='toys'; console.log(`https://mysite.com/${category}`); //вставить переменную через специальыне скобочки с тильды

(num == 50) ? print("50") : print("not 50") // пример использования упрощенных условий
switch (num) {
    case 20:         // вместо if, надо помнить что тут строгое соответствие должно быть ===
        print("No");  
        break;
    case 40:
        print("No");
        break;
    case 50:
        print("yes");
        break;
    default:
        pritn("no answer"); // вместо else
        break;
}


#ОБЬЕКТЫ 
const obj = {name: 'John', age: 25,} // обьект, содержит ключ и данные
console.log(obj.name); console.log(obj[name]); // показать значение name обьекта
obj.b = '1234'; obj['b'] = '1234'; // добавить значение к обьекту (если во втором примере указать без кавычек то обратимся к переменной)
delete obj.b; // удалить свойство обьекта



const obj = {name: 'John', age: 25, status: { marrid: 'yes', children: 'no'} };
for (let key in obj) {                                   // перебрать все значения в обьекте
    if (typeof(obj[key]) === 'object') {                // перевор обьектов внутри обьекта
        for (let i in obj[key]) {            
            console.log(`Свойства ${i} в ${key} имеет значение ${obj[key][i]}`);
        }
    } else {
    console.log(`Свойства ${key} имеет значение ${obj[key]}`);
    }
}
console.log(Object.keys(obj)); // получить все ключи обьекта
console.log(Object.keys(obj).length); // получить количество ключей обьекта
let obj1 = {name: 'John', age: 25, status: { marrid: 'yes', children: 'no'}, maketest: function() {console.log('Test')} }; obj1.maketest(); // создали метод внутри обьекта
const {name, age} = obj1; console.log(age); // деструктуризация свойства обьектов, удобный способ получения данные с обьекта

let numbers = {
    a: 4,
    b: 6,
    c: {
        x: 43,
        y: 55
    }
};                       
function copy(objOrign) {  // поверхностное клонирование обьекта через цикл, вложенные элементы по прежнему будут ссылкой
    let objCopy ={};       // на исходный обьект, то есть изменив старый обьект (или новый), в новом значение тоже поменяеться
    for (let key in objOrign) {
        objCopy[key] = objOrign[key];
    }
    return objCopy;
}
let newNumbers = copy(numbers);
newNumbers.a = 1; 
newNumbers.c.x = 0
console.log(numbers);
console.log(newNumbers);
const add = {z: 66,q: 77}; // новый обьект
console.log(Object.assign(numbers, add)); // соеденить два обьекта и создать новый обьект включающий в себя эти оба обьекта

const clone = Object.assign({}, add); // клонирование обьекта через метод assign
clone.d = 155;
console.log(add);
console.log(clone);

const q = {one: 1, two: 2}; // клонирование обьекта через оператор развёртывания
const newQ = {...q};
console.log(newQ);

№МАССИВЫ
let arr = ['Dave', 'Ithon', 4, 'Alex'];
console.log(arr[1]); // показать второе значение массива
arr.pop(); // удалить последнее значение массива
arr.push(10); // добавить значение в конце массива
let a = arr.length; console.log(a); // количество элементов внутри массива, метод length состоит из последнего индекса массива + 1

for (let i = 0; i < arr.length; i++) { // перебор всех значений в массиве с использованием длинны массива
    console.log(arr[i]);
}

for (let value of arr) { // перебор всех значений в массиве через метод for of (результат такй же как выше в примере) работает только с массивами но не обьектами
    console.log(value); // плюс что можно использовать brake и continue
}

arr.forEach(function(item, i , arr) {   // метод для перебора инфы в массиве, аргументы - сам элемент который сейчас перебираем, номер по порядку, ссылка на тот массив который сейччас перебираем.
    console.log(`${i}: ${item} in array ${arr}`); // brake и continue не сработают
});

const str = prompt("write your text with ,", "");   // сформировать массив на основании строк, указав разделитель открывать в браузере ччтобы сработало
const products = str.split(", "); // метод split с параметром который используем для разделения строки на массив
console.log(products.join("; ")); // вывод массива в виде строки с разделением ; знаком
console.log(products.sort()); // отсортировать данные по алфавит

const str = prompt("write your text with ,", "");
const products = str.split(", ");
console.log(products.sort(compareNum)); // отсортировать числа по возрастанию через вызов функции в методе sort
function compareNum (a, b) { 
    return a - b;
}

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray; // просто создадим ссылку на массив
const newArray = oldArray.slice(); // скопируем массив и он будет уже отдельным от клона массивом

const video = ['youtube', 'google', 'insta'],  // соеденить два массива в третьий через оператор развёртывания
     blogs = ['blogger', 'wp'],
     internet = [...video, ...blogs, 'vk', 'fb'];
console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];
log(...num); // передать значения массива через развёртывание

const newAaray = [...oldArray]; // создаст копию нашего массива через оператор развёртывания



#ЦИКЛЫ

let num = 50;
while (num < 55) { // пока num мкньше 55 выполнять цикл
    print(num);
    num++;
}

do {          // делать цикл пока не наступит условия в while ниже
    print(num);
    num++;
}
while (num <55);

for (let i = 1; i < 10; i++) { // цикл for
    if (i == 6) {
        continue; // пропустить шаг
    }
    if (i === 8) {
        break; // остановить
    }

}

first: for (let i = 0; i < 3; i++) { // вложенный цикл, используют i j k для переменных
    print(i);
    for (let j = 0; j < 3; j++) {
        print(j);
        for (let k = 0; k < 3; k++) {
            print(k);
            if (k === 2) continue first; // переход к метке цикла first
            
        }
        
    }
}



#ФУНКЦИИ
function getNumber(a,b) {  // function declaration загружаеться сразу и её результаты можно вызвать и выше по коду, до обьявления
    return (a + b); // возвращает значение и код после этого элемента не исполняется
}

let getNumber = function(a,b) { // создаёться только тогда когда до неё дойдёт поток кода
    return (a + b);
};

let getNumber = (a, b) => {return (a + b)};  // не имеет своего контекста this
retunrn // чтобы закончить функцию досрочно или чтобы вернуть какойто результат

function lernJS (lang, callback) { // использования каллбека, для того чтобы вызвать функцию только после выполнения предыдущей.
    console.log("i learn " + lang);
    callback()
}
function done() { console.log("Done")};
lernJS ("Javascript", done);



#МЕТОДЫ И СВОЙСТВА ЧИСЕЛ И строк
console.dir(Number); // просмотреть все методы и свойства чисел в консоли
console.log(Math.round(1.4)); // округлить
const test = "12.2px"; console.log(parseInt(test)); // обрезает до целого числа
const test = "12.2px"; console.log(parseFloat(test)); // обрезает до дробного числа
const logg = 'Hello world'; console.log(logg.indexOf("w")); // показать номер символа в строке
const logg = 'Hello world'; console.log(logg.slice(6, 11)); // вывести символы с 6 по 11
const logg = 'Hello world'; console.log(logg.substr(6, 5)); // вырезает 5 символов с 6 символа
const logg = '    Hello  '; console.log(logg.trim()); // убрать пробелы, можно применить прямо к получению данныз напрямую, prompt('Put your nsme' '').trim

#ПРОТОТИПЫ
 const soldier = {
     health: 400,
     armour: 100,
     sayHello: function() {
         console.log('Hello');
     }
 }
 const john = {
     health: 150
 };
 john.__proto__ = soldier; // задаём прототип для john. !!!старый формат!!!
console.log(john);         // свойства не будут отображаться из прототипа на прямуую
console.log(john.armour);  // но по запросу мы сможем их взять
Object.setPrototypeOf(john, soldier); // устанавливаем прототип для john (современный формат)
john.sayHello(); // проверяем что можем использовать функцию из прототипа
const john2 = Object.create(soldier); // создаём обьект и сразу присваеваем ему прототип.
john2.sayHello(); // проверяем что можем использовать функцию из прототипа

#ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ
console.log(typeof(String(4))); // превращение данных в строку вариант 1 устаревший
console.log(typeof(String(4 + ""))); // превращение данных в строку путём конкретизации вариант 2

console.log(typeof(Number('4'))); // из строки в число вариант 1
console.log(typeof(+'4')); // из строки в число вариант 2
console.log(typeof(parseInt("15px", 10))); // строка в число используя метод, второй аргумент означает десятиччную систему вариант 3

0, '', null, undefined, NaN; // всё буллиновое значение false
let switcher = null; if (switcher) {console.log('Working');}; // действие не выполниться потому что значение false
let switcher = 1; if (switcher) {console.log('Working');}; // как только значение появиться, получим true и произойдет действие. вариант 1
console.log(typeof(Boolean('4'))); // преобразование в буллин тип данных вариант 2
console.log(typeof(Boolean(!!'4'))); // преобразование в буллин тип данных вариант 3


#РАЗНОЕ
debugger; // ставим в коде и консоль будет отсанавливаться в это месте

#Задачки
let x = 5; alert( x++ ); // 5 потому что постфексный оператор применяется для следующих строк
[ ] + false - null + true; // NaN, массив превращается в строку пустую, после [ ] + false получаем строку 'false', а потом всё будет NaN , потому что массив не номер
let y = 1; let x = y = 2; alert(x); //2, делаем справа на лево
[ ] + 1 + 2; // 12, потому что массив это пустая строка, и потом добавляем к строке 1 и потом 2
console.log("1"[0]); //1, к строке можно обратиться через индекс, то есть обращаемся к первому символу
console.log(2 && 1 && null && 0 && undefined); //null, потому что оператор и всегда запинаеться на лжи и дальше не идет, возвращая найденную ложь первую
!!( a && b ) == (a && b); //false потому что оператор !! превращает наше значчение в буллиновое
             3    3
alert( null || 2 && 3 || 4 ); //3, первый по приоритету обрабатываеться оператор и, который возвращает последнее прпвдивое значчение
                              // потом сравниваем null и 3, получая 3 так как оператор или останавливаеться на правде
                              // и сравниваем 3 и 4 - получаем 3, так как это первое правдивое значение
a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ? // нет, потому что это два разных массива, хоть и данные одинаковы
alert( +"Infinity" ); // infinity потому что это числовое значение бесконеччности, в виде типа данных числа, так как плюс впереди
'Ёжик' > 'яблоко'; // false потому что Ё большая впереди по таблице Unicode
0 || "" || 2 || undefined || true || falsе // 2 потому что или запинаеться на правде



