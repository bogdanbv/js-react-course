import {closeModal, openModal} from './modal';
import {postData} from '../services/services';

function forms(formSelector, modalTimerId) {
    // Forms

    const forms = document.querySelectorAll(formSelector);
    
    const message = {
        loading: 'img/spinner.svg',
        success: 'Thanks, we will call you soon',
        failure: 'Some problem'
    };

    forms.forEach(item => { // добавили функцию bindPostData ко всем нашим формам на странице
        bindPostData(item);
    });

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('img'); // создали новый элемент для вывода статуса отправки данных
            statusMessage.src = message.loading; // присвоили класс этому элементу
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `; // вставляем текст из переменной в наш элемент

            // form.append(statusMessage); // отправили этот элемент в нашу форму
            form.insertAdjacentElement('afterend', statusMessage); 

            //!!!!!!!request.setRequestHeader('Content-type', 'application/json'); // устанавливаем формат в котором будем отправлять форму, но для dataForm этого делать ненадо!!!
            const formData = new FormData(form); // формат данных FormData - вариант простого получения данных из формы
            
            const json = JSON.stringify(Object.fromEntries(formData.entries())); // превращем formData в массив массивов > превращаем в обьект > превращаем в JSON
            const obj = {a: 23, b:50};
            console.log(Object.entries(obj));

        
            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data); // выводим ответ сервера в консоль
                showThanksModal(message.success); // иизменили статус в форме для информирования пользователя
                form.reset(); // очистить данные формы
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure); // сообщить об ошибке юзеру
            }).finally(() => {
                form.reset(); // очистить данные формы
            });

            // request.addEventListener('load', () => { // добавили действие при загрузке отправки данных
            //     if (request.status === 200) { // если ответ от сервера 200 ОК (значит все ок)
            //         console.log(request.response); // выводим ответ сервера в консоль
            //         showThanksModal(message.success); // иизменили статус в форме для информирования пользователя
            //         form.reset(); // очистить данные формы
            //         statusMessage.remove();
            //     } else {
            //         showThanksModal(message.failure); // сообщить об ошибке юзеру
            //     }
            // });
        
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal('.modal', modalTimerId);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
        <div class="modal__content">
            <div class="modal__close" data-close>&times;</div>
            <div class="modal__title">${message}</div>
        </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal('.modal');
        }, 4000);
    }
}

export default forms;