window.addEventListener('DOMContentLoaded', function(){

    'use strict';

    //Form

    let message = {                                                                      //Создаем объект, в котором будут находится сообщения для общения с пользователем
        loading: 'Loading...',
        success: 'Thank you! we will contact you soon!',
        failure: 'Something went wrong...'
    };

    let form = document.querySelector('.main-form'),                                     //Получаем форму через класс селектора
        input = form.getElementsByTagName('input'),                                      //Получаем все input из формы
        statusMessage = document.createElement('div');                                   //Переменная, которя создает элемент div (чтобы положить в него сообщения для пользователя)

        statusMessage.classList.add('status');                                           //Задаем стилизацию на созданный div

    form.addEventListener('submit', function(event){                                     //Вешаем обработчик событий на форму(НЕ ВЕШАТЬ НА КНОПКУ!!!)
        event.preventDefault();                                                          //Это нужно, чтобы страница не перезагрузилась после отправки формы
        form.appendChild(statusMessage);                                                 //Создаем в форме сообщение для пользователя

        let request = new XMLHttpRequest();                                              //Создаем переменную, в которой будет конструктор запроса с Сервера
        request.open('POST', 'server.php');                                              //Настройка запроса, который отправляет данные на php сервер
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');     //Настройка заголовка http запроса(преобразовывает данные в JSOn формат)

        let formData = new FormData(form);                                               //Создает структуру данных в формате ключ: значение

        let obj = {};                                                                    //Создает пустой объект и заполняем его циклом forEach
        formData.forEach(function(value, key){
            obj[key] = value;                                                            //
        });

        let json = JSON.stringify(obj);                                                  //Превращает JS объекты в JSON

        request.send(json);                                                              //Отправляет запрос на сервер

        request.addEventListener('readystatechange', function(){                         // Функция для наблюдения за запросом
            if (request.readyState < 4){
                statusMessage.innerHTML = message.loading;
            } else if(request.readyState === 4 && request.status == 200){
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < input.length; i++){                                          //Цикл для очистки input после отправки данных
            input[i].value = '';
        }
    });

});