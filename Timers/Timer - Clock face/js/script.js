window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    //Timer

    let deadline = '2022-12-31';                                 // задаем переменную, которая обозначает конец отчета таймера

    function getTimeRemaining(endtime) {                         //Создаем функцию, аргумент принимает deadline, вычленяет время из милисекунд
        let t = Date.parse(endtime) - Date.parse(new Date()),    //Переменная, в которой записывается результат вычитания настоящего времени из deadline, весь результат в милисекундах
            seconds = Math.floor((t/1000)%60),                   //Переменная, в которой записан результат превращения милисекунд в секунды, результат округлен
            minutes = Math.floor((t/1000/60)%60),                //Переменная, в которой записан результат превращения милисекунд в минуты, результат округлен
            hours = Math.floor((t/(1000*60*60)));                //Переменная, в которой записан результат превращения милисекунд в часы, результат округлен

            //hours = Math.floor((t/1000/60/60)%24);             //Переменная, в которой записан результат превращения милисекунд в часы, результат округлен
            //days = Math.floor((t/(1000*60*60*24)));            //Переменная, в которой записан результат превращения милисекунд в дни, результат округлен

        return{                                                  //Функция возвращает объект с переменными
            'total': t,                                          //Переменная для остановки таймера
            'hours': hours,                                      //Переменная часы
            'minutes': minutes,                                  //Переменная минуты
            'seconds': seconds                                   //Переменная секунды
        };
    }

    function setClock(id, endtime) {                             //Функция выводит время(получает родительский элемент через id и аргумент deadline)
        let timer = document.getElementById(id),                 //Переменная получает доступ к элементу по id = timer
            hours = timer.querySelector('.hours'),               //Переменная находит часы в блоке timer
            minutes = timer.querySelector('.minutes'),           //Переменная находит минуты в блоке timer
            seconds = timer.querySelector('.seconds'),           //Переменная находит секунды в блоке timer
            timeInterval = setInterval(updateClock, 1000);        //Переменная в которой находится запуск функции каждую секунду
        
        function updateClock() {                                 //Функция обновляет время каждую секунду
            let t = getTimeRemaining(endtime);                   //Вызываем функцию обработки милисекунд, переменная t содержит в себе объект из функции

            function addZero(num){                               //Функция добавляющая 0 если число на таймере меньше 9
                if(num <=9){                                     //Условие если число меньше или равно 9
                    return '0' + num;                            //То вставить 0 перед num
                }else return num;                                //Если нет, то просто вернут num
            }

            hours.textContent = addZero(t.hours);                //В переменную hours со страницы вписываем значение hours из объекта
            minutes.textContent = addZero(t.minutes);            //В переменную minutes со страницы вписываем значение minutes из объекта
            seconds.textContent = addZero(t.seconds);            //В переменную seconds со страницы вписываем значение seconds из объекта

            if(t.total<0){                                       //Условие, с помощью которого таймер останавливается
                clearInterval(timeInterval);                     //Когда таймер остановится, то в часах, минутах и секундах будут 00
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    }

    setClock('timer', deadline);
});