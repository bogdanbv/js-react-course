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

const q = {one: 1, two: 2}; // клонирование обьекта через оператор развёртывания spread
const newQ = {...q};
console.log(newQ);

Array.isArray(data); // получаем ответ, являюется ли наше содержимое массивом
Object.values(data); // получаем все значения обьекта в виде массива, без названий свойства

const log = function(a, b, ...rest) { // использование Rest оператора, который может принять любое количество необязательных аргументов (назвать как угодно можно)
    console.log(a, b, rest);
}
log('basic', 'next', 'operator', 'new', 'photo'); // содержимое rest будет отображено в виде массива


// 



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
    console.log(${i}: ${item} in array ${arr}); // brake и continue не сработают
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

function User(name, id) { // функция конструктор 
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() { // создали метод в нашем прототипе
        console.log(`Hello ${this.name}`);
    }
}
User.prototype.exit = function() { // добавили еще метод к нашему прототипу, будет использоваться ко всем данным введенным после этой строки
    console.log(`User ${this.name} go away`);
}
const ivan = new User('Ivan', 29); // создаём обьект с использованием функции конструктора
const alex = new User('Alex', 20);
console.log(ivan);
console.log(alex);
ivan.hello(); // вызвали метод
ivan.exit();


function showThis() { // 1) обычная функция где this = window, но если стоит use strict = undefiend
    console.log(this); // контекст ссылаеться на глобальный обьект window
}
showThis();

const obj = { // 2)
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
    },
    sum2: function(){
        function shout() {
            console.log(this);
        }
        shout(); // тут контекст будет underfiend потому что функция просто вызываеться а не через метод
    }
};
obj.sum(); // 2) контекст у методов обьекта это сам обьект

function User(name, id) { // 3) this в конструкторах и классах - это новый экземпляр обьекта
    this.name = name; // ivan.name = name
    this.id = id;
    this.human = true;
}
let ivan = new User('Ivan', 23)

function sayName(surname) { // 4) ручная привязка this через call, apply, bind
    console.log(this);
    console.log(this.name + surname);
}
const user = {name: 'John'};
sayName.call(user, 'Smith'); // устанавливаем контекст вызова функции к переменной user
sayName.apply(user, ['Smith']); // то же самое с другим синтаксисом

function count(num) {
    return this*num;
}
const double = count.bind(2); // новая функция с жёскто привязанным контекстом через bind метод, аргумент 2 передасться в this функции выше
console.log(double(5));

btn.addEventListener('click', function(){ // если функция обьявлена в таком виде, то
    console.log(this); // наш контекст вызова будет сам элемент на котором произошло событие (то же самое что event.target)
})
const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => { // у стрелочной функции нет своего контекста вызова и она берет контекст родителя
            console.log(this);
        };
        say();
    }
};
obj.sayNumber();

const double = (a) => a * 2; // если стрелочная функция помещаеться в одну строку то можно так её записать, и не надо ставить return


#КЛАССЫ // красивая обёртка функций конструкторов
class Rectangle { // название класса всегда с большой буквы
    constructor(height, width) { // создаём экземпляр класса с двумя параметрами
        this.height = height;
        this.width = width;
    }
    calcArea() { // создаём метод
        return this.height * this.width;
    }
}
const square = new Rectangle(10, 10);
const long = new Rectangle(12, 200);
console.log(square.calcArea());
console.log(long.calcArea());

class ColredRectangleWithText extends Rectangle { // создаем новый класс с наследованием от другого
    constructor(height, width, text, bgColor) {
        super(height, width); // строки записанные в родителе в разделе конструктор автоматически перейдут сюда, должно быть всегда на первом месте в конструкторе, можно указать только нужные свойства super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps() {
        console.log(`Text: ${this.text}, Color: ${this.bgColor}`);
    }
}
let div = new ColredRectangleWithText(25, 10, 'Hello', 'red');
div.showMyProps();
console.log(div.calcArea());


#РЕКУРСИЯ когда функция вызывает себя же внутри себя 
// функция возведения числа в определённую степерь способом цикла и рекурсии
function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result = result * x;
    }
    return result;
};

function pow(x, n) { // функция будет запускать сама себя, n - глубина рекурсии (общее число вызовов функции)
    if (n === 1) { // это база рекурсии
        return x;
    } else {
        return x * pow(x, n - 1); // n - 1 это шаг рекурсии
    }
};
console.log(pow(2, 4));

let students = {
    js: [{
        name: 'John',
        progress: 100    
    }, {
        name: 'Ivan',
        progress: 80
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],
        pro: [{
            name: 'Sam',
            progress: 10
        }]
    }
}

function getTotalProgerssByIteration(data) { // получаем через цикл
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for (let subCourse of Object.values(course)) {
                students += subCourse.length;

                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                }
            }
        }
    }
    return total / students;
}
console.log(getTotalProgerssByIteration(students));

function getTotalProgerssByRecursion(data) { // получаем черех рекурсию, плюс в том что если данные/свойства вложенные добавяться то эта функция сможет работать без проблем
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];
    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArray = getTotalProgerssByRecursion(subData);
            total[0] += subDataArray[0];
            total[1] += subDataArray[1];
        }
        return total;

    }
}
const result = getTotalProgerssByRecursion(students);
console.log(result[0]/result[1]);

const timerId = setTimeout(function() { // функция которая вызываеться с задержкой
    console.log('Hello');
}, 2000); // задержка 2000 милисикунд
clearInterval(timerId); // отменить наш таймер, например если действие нужное нам уже было совершено

const timerId = setTimeout(logger, 2000); // вызвать функцию с задержкой
function logger() {
    if (i == 3) { // остановить выполнение таймера после 3х повторений
        clearInterval(timerId);
    };
    console.log('text');
    i++;
}
const timerid = setInterval(logger, 2000); // функция будет вызываться через каждые 2 сек, пока мы не остановим её

let id = setTemeout(function log(){ 
    console.log('Hello');
    id = setTimeout(log, 500); // рекурсивно запускаем таймер, плюс в том что начнет выполняться только тогда когда функция выполниться
}, 500);

#JSON
const persone = {
    name: 'Alex',
    tel: '+56474343',
    parents: {
        mom: 'Ola',
        dad: 'Mike'
    }
};
console.log(JSON.stringify(persone)); // используют чтобы отправить данные на сервер, данные в JSON будут всегда обьектом с разделением двойными кавычками
console.log(JSON.parse(JSON.stringify(persone))); // получть данные с сервера (на примере с нашего файла)
const clone = JSON.parse(JSON.stringify(persone)); // полностью клонируем весь обьект, получаем обьект в формате JSON и потом распарсим его обратно в обычный обьект. клон не будет зависить от обьекта которого он клонировал
clone.parents.mom = 'Ann';
console.log(persone);
console.log(clone);

№ПРОМИСЫ Promise; // возможность работать с асинхронным кодом (с сервером/таймерами)
console.log('Get data');
const req = new Promise(function(resolve, reject){ // resolve вызываем если все прошло ок выполним код из then метода, а reject если ошибка и вызовем код из catch мутода
    setTimeout(() =>{
        console.log('Prepare data');
        const product = {
            name: 'TV',
            price: 2000
        }
        resolve(product); // передаём данные в нашу функцию, которые сможем использовать через then внутри его
    }, 2000);
});

req.then((product) => { // метод который выполняется на промисе в случае положительного исхода (в коде должно дойти до resolve())
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
            // reject(); // можем вставить вместо верхней строки, чтобы проверить работу catch, которая будет отображена в случае какойто ошибки или может быть выведена принудительно как сейчас расскоментировав код
        }, 2000);
    });
}).then(data => {
    data.modify = true;
    return data;
}).then(data => {
    console.log(data);
}).catch(() => { // действие выполниться при ошибке или вызове reject()
    console.error('Some error');
}).finally(() => {// ставиться всегда в конце цепочки, действие которое будет произведено всегда, вне зависимости от исхода промисов
    console.log('Finally'); // можем например очистить форму которую заполнял юзер
});

const test = time => { // функция которая будет запускаться и принимать в себя аргумент с количеством времени
    return new Promise(resolve => { // функция будет возвращать нам новый промис
        setTimeout(() => resolve(), time); // который заресолвиться через определённое время
    });
};
test(1000).then(() => console.log('1000 ms'));
test(3000).then(() => console.log('3000 ms'));

Promise.all([test(1000), test(3000)]).then(() => {console.log('All done')}); // метод promise.all принимает в себя массив с функциями, и будет ждать выполнения всех их, и только потом прейдет к then
Promise.race([test(1000), test(3000)]).then(() => {console.log('All done')}); // метод promise.all принимает в себя массив с функциями, и как только хотябы одна функция отработает прейдет к then

№API/FETCH API Applicatin Programming Interface // предоставление готовых методов и решений
fetch('https://jsonplaceholder.typicode.com/todos/1') // нам возвращеться промис и можем дальше обработать его при помощи then
        .then(response => response.json())
        .then(json => console.log(json)); // получаем обычный обьект

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST", // формируем post запрос
    body: JSON.stringify({name: 'Alex'}),
    headers: {
        'Content-type': 'application/json'
    }
})
        .then(response => response.json()) // получаем ответ в виде json
        .then(json => console.log(json));


#AJAX и Cервер
const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');
inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest(); 
    request.open('GET', 'js/current.json'); // собирает настройки которые в будущем помогут сделать запрос, вид запроса и путь
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', () => { // реагирует на изменение статуса запроса, чаще используют просто load
        if (request.readyState === 4 && request.status === 200) { // если статус запроса = 4 (done), и ответ сервера получен ОК (200), с условием load используют только request.status === 200
            console.log(request.response); // вывести ответ в консоль
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2); //делем знаение рубля на курс usd и выводим с округлением до 2х символов после точки
        } else {
            inputUsd.value = 'Some error';
        }
    });
});




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

const now = new Date(); // переменная содержит текущую дату
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours()); // текущие часы
console.log(now.getUTCHours()); // часы UTC
console.log(now.getTime()); // TimeStamp количество милисикунд с 1970 года
console.log(now.setHours(18)); // установить часы
new Date.parse('2020-05-01'); // установить дату через метод

let start = new Date();
for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}
let end = new Date;
console.log(`цикл отработал за ${end - start}`); // бенчмарк цикла


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


#РАБОТА СО СТРАНИЦЕЙ
const btns = document.getElementsByTagName('button'); // получить коллекцию всех элементов в виде псевдомассива
const btns1 = document.getElementsByTagName('button')[1]; // получить вторую кнопку на странице
console.log(btns[1]); // получить вторую кнопку из нашего массива
const circles = document.getElementsByClassName('circle'); // html коллекция всех элементов с классом circle
console.log(circles);

const hearts = document.querySelectorAll('.heart'); // получить данные любого селектора CSS, есть менот forEach!!!
console.log(hearts);
const wrapper = document.querySelectorAll('.wrapper'); // получить данные любого селектора CSS, есть менот forEach!!!
const hearts2 = wrapper.querySelectorAll('.heart') // можно обращатся не к document а прямо к прородителю необходимого элемента и получим только те элементы которые лежат в нашем прородителе а не на все странице document
hearts[0].style.width = '100px'; // задать ширину первому элементу из плевдомассива heart. обращаться надо чётко к элементу а не к всему массиву
hearts.style.cssText = `background-color: black; width: ${num}px`; // применить ко всем элементам в массиве, писать как в css надо и можно вставить переменную
hearts.forEach(item => { // показать все элементы в массиве
    console.log(item);
});
for (let i = 0; i < hearts.length; i++) { // изменить свойство всех элементов в псевдомассиве
    hearts[i].style.backgroundColor = 'blue';
};
hearts.forEach(item => { // изменить свойство всех элементов в псевдомассиве
    item.style.backgroundColor = 'blue';
});

const oneHeart = document.querySelector('.heart'); // взять только первый элемент из этого класса
console.log(oneHeart);

const div = document.createElement('div'); // создать элемент div, сейчас существует только внутри js
const text = document.createTextNode('Hello') // создать текстовый элемент, редко используют
div.classList.add('black'); // добавили КЛАСС из CSS файла к элементу div
document.body.append(div); // добавить элемент div в конец body элемента
document.querySelector('.wrapper').append(div); // получаем элемент wrapper и сразу в КОНЕЦ его помещаем div. (используют тчобы не создавать отдельную переменную для wrapper)
document.querySelector('.wrapper').prepend(div); // получаем элемент wrapper и сразу в НАЧАЛО его помещаем div. (используют тчобы не создавать отдельную переменную для wrapper)
hearts[0].before(div); // вставить div перед первым элементом hearts
wrapper.insertBefore(div, hearts[0]); // вставка элемента div внутрь элемента wrapper, перед первым heart / старый вариант
hearts[0].after(div); // вставить div после первого элемента hearts
hearts[1].remove(); // удалить второй элемент
wrappe.removeChild(hearts[1]); // удалить второй элемент в элементе wrapper / старая версия
hearts[2].replaceWith(div); // заменить hearts третий, элементом div
wrapper.replaceChild(div, hearts[2]); // заменить hearts третий, элементом div в элементе wrapper / старая версия

div.innerHTML = '<h1>Hello</h1>'; // вставить html в элемент
div.textContent = 'Hello'; // вставить текст
div.insertAdjacentHTML('beforebegin', '<p>Hi</p>'); // вставить html перед div элементов, первый аргумент где вставить, второй - что вставить
div.insertAdjacentHTML('afterbegin', '<p>Hi</p>'); // то же самое только вставка в начало самого div

<script defer src="js/script.js"></script>; // defer позволяет обробатовать страницу браузеру, а скрипт загружать в фоновом режиме а запустить его когда уже загрузиться сам скрипт и сформирована ДОМ структура
<script async src="js/script.js"></script>; // страница не ждет async скриптов, DOMContenLoaded не ждут друг друга, используют для второстепенных скриптов, например сччетчиков и метрик
const script = document.createElement('script'); // создали новый элемент
script.src = "js/test.js"; // прописали путь к скрипту
script.async = false; // по дефолту все скрипты подключаемые таким методом работают в режиме async
document.body.append(script); // поместили в html страницу

const btns =document.querySelectorAll('button');
btns[0].addEventListener('click', () => {   // пример работы бургер меню, когда нажимаем на первую кнопку
    if (!btns[1].classList.contains('red')) {  // и если у второй кнопки нет класса red
        btns[1].classList.add('red');  // то я добавляю его к этой кнопке
    } else {
        btns[1].classList.remove('red'); // а если класс red есть, то убираю его
    }
    // btns[1].classList.toggle('red); // добавляем клаасс к нашей кнопке способом toggle
});

const box = document.querySelector('.box'), // получаем элемент
      btn = document.querySelector('button');
const width = box.clientWidth; // получаем ширину элемента в браузере пользователя
const height = box.clientHeight;
btn.addEventListener('click', () =>{
    box.style.health = box.scrollHeight + 'px'; // при клике на кнопку высота окна станет во всю высоту документа
    console.log(box.scrollTop); // показать колько пикселей уже пролистали
})
console.log(box.gerBoundingCLientRect()); // получть все координаты которые есть у элемента 
window.getComputedStyle(box); // получить уже применённые стили к элементу из css
window.getComputedStyle(box).display // получить свойство display
document.documentElement.clientHeight; // получить высоту всей страницы
document.documentElement.scrollTop = 0; // вернуть странику в самый верх
window.scrollBy(0, 400); // переместиться на 400 пискселей вниз от текущей точки
window.scrollTo(0, 400); // переместиться на 400 в абсолютной величине

document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') { // вызвать код при нажатии кнопки Escape
        closeModal();
    }
});

const box = document.querySelector('.box');
let observer = new MutationObserver(MutationRecord => { // переменная за которой следим
    console.log(MutationRecord);
})
observer.observe(box, {
    childList: true // выбрали за чем именно следить
})
observer.disconnect(); // перестать следить за элементом

№DOM ЭЛЕМЕНТЫ И УЗЛЫ
document.addEventListener('DOMContentLoaded', () => {}); // условие, когда вся дом структура страницы загружена
document.documentElement; // доступ к тегу html, то есть всей видимой странице
document.body.childNodes; // получить все узлы (ноды), которые являються детьми у body тега
//== не все ноды являються дом элементами, то есть текст это нода, а теги это нода элементы дом.
document.body.firstChild; // обращаемся к первой ноде
document.body.lastChild; // обращаемся к последней ноде
document.querySelector('#current').parentNode; // получить родительскую ноду элемента current
document.querySelector('#current').parentNode.parentNode; // получить родительскую ноду на 2 уровня выше
document.querySelector('#current').previousSibling; // получить предыдущую ноду (соседа)
document.querySelector('#current').nextSibling; // следующу ноду (соседа)

<li data-current="3">text</li> document.querySelector('[data-current="3"]'); // установка дата селектора в коде html и обращение к нему 

document.querySelector('#current').parentElement.parentElement; // получить родительский ЕЛЕМЕНТ на 2 уровня выше
document.querySelector('#current').previousElementSibling; // получить предыдущий элемент (соседа)
document.querySelector('#current').nextElementSibling; // следующий элемент (соседа)
document.body.firstElementChild; // полуить первый элемент body

for (let node of document.body.childNodes) { // перебираем все ноды получчив их с buddy методом childNodees
    if (node.nodeName == '#text') { // если назодим текстовую ноду то ничего не делаем
        continue;
    }
    console.log(node); // отображаем все ноды
}
const wrapper = document.querySelectorAll('.btn-block'); // создаём переменную в которой содержаться все кнопки
wrapper.addEventListener('click', (event) => {  // вешаем обработчик события на весь блок кнопок
    if (event.target  && event.target.tagName == "BUTTON") { // усовие делегирования,ппроверяем существует ли event.target и так же определяем что это клик по кнопке (если в свойствах есть BUtton)
        console.log('hello');
    }
    if (event.target  && event.target.classList.contains('blue')) { // проверяем существует ли event.target и производим действие если класс кнопкии blue
        console.log('hello');
    }
});

#СОБЫТИЯ
let btn = document.querySelector('button');
btn.addEventListener('click', () => {   // добавили обработччик события, можно назначить и на второе действие на ту же кнопку, события выполняються  порядке очереди
    alert('Hello');
});
btn.addEventListener('click', () => {   // второе событие, по второму клику на ту же кнопку
    alert('second Hello');
});
btn.addEventListener('click', (event) => {   // вывод события которое сделает пользователь, можем добавлять свои аргументы уже за ним
    console.log(event);
});
btn.addEventListener('click', (event) => {   
    console.log(event.target); // получаем наш элемент, то есть кнопку
    event.target.remove(); // удаляем этот элемент
});

const delElement = (event) => { // создали в переменной функцию к которой мы обратимся ниже
    event.target.remove();
}
btn.addEventListener('click', delElement); // после того как произойдёт клик, мы ссылаемся на 

let i = 0;
const delElement = (event) => { // создаём функцию в переменной которая после одного срабатывания перестанет следить за нашей кнопкой
    console.log(event.target);
    i++;
    if (i == 1) {                                     // после клика произойдет действие и потом i станет равно 1, и в этом случае удалим слижение за нашим обьектом,
        btn.removeEventListener('click', delElement); // то есть при след кликах ничего не будет происходить
    }
}
btn.addEventListener('click', delElement); // после того как произойдёт клик, мы ссылаемся на 

//ВСПЛЫТИЕ СОБЫТИЙ  - Если одно действие присвоено для двух элементов, элемента А который лежит внтри Б, то оно сработает с начала для А, а потом для Б, и currenTarget будут разными 

const link = document.querySelector('a'); // с
link.addEventListener('click', function(event) { // создаём функцию для нашего обработчика и передаём в неё наше элемент
    event.preventDefault(); // отменить стандартное действие браузера, которое он делал при клике на ссылку (переходил по ней)
    console.log(event); // просто покажем нашш елемент
});

const butns = document.querySelectorAll('button'); // получили псевдомассив со всеми кнопками
butns.forEach( function(item) {  // переберём все кнопки внутри массива
    item.addEventListener('click', delElement); // задаим для события клик ссылку на функцию delElement
});

item.addEventListener('click', delElement, {once: true}); // добавили третью опцию, котрая позволит произвести событие только один раз

#СОБЫТИЯ НА МОБИЛЬНЫХ УСТРОЙСТВАХ
touchstart // касание к элементу
touchmove // косание с перемещением
touchend // как оторвался от элемента
touchenter // когда ведем по экрану и попадаем на элемент
touchleave // когда прошлии за пределы элемента
touchcancel // когда точка сопрекосновения со страницей пропадает
document.addEventListener('DOMContentLoaded', () =>{
    const box = document.querySelector('.box');
    box.addEventListener("touchstart", (e) => {
        e.preventDefault();
        console.log('Start');
        console.log(e.touches); // свойство обьекта, список всех пальцев которые сейчас взаимодействуют со всем экраном
        console.log(e.targetTouches[0].pageX); // поулчаем координаты палька который взаимодействовал с обьектом
    });
});
// дополнительные свойства у обьекта (e) когда работаем сенсорными устройствами
touches // список всех пальцев которые сейчас взаимодействуют со всем экраном
targetTouches // все пальцы которые взаимодействуют конкретно с этим элементом
changedTouches // содержит именно тот палец который выполнил событе







