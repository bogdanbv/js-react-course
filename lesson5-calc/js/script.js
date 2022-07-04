'use strict';

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
      