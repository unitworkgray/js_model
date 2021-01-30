window.addEventListener('DOMContentLoaded', function(){

    'use strict';

    //Tab

    let tab = document.querySelectorAll('.tab'),                   //Получаем доступ к табу(место, куда нажимать мышкой)
        tabMenu = document.querySelector('.tab-menu'),             //Получаем доступ к родительскому элементу табов
        tabContent = document.querySelectorAll('.tab-content');    //Получаем доступ к контенту, который будет показан при нажатии таба

    function hideTabContent(a) {                                   //Создаем функцию, которая будет скрывать весь контент табов со страницы
        for (let i = a; i < tabContent.length; i++){               //Запускаем цикл, который перебирает все контенты
            tabContent[i].classList.remove('show');                //Удаляем CSS класс отвечающий за видимость контента
            tabContent[i].classList.add('hidden');                 //Присваеваем CSS класс отвечающий за невидимость контента
        }
    }

    hideTabContent(1);                                             //Запускаем функцию скрытия с аргуметом 1, чтобы на странице оставался нескрытым контент первого таба

    function showTabContent(b) {                                   //Создаем функцию, которая будет показывать контент таба
        if (tabContent[b].classList.contains('hidden')){           //Создаем условие, которое проверяет наличие скрывающего CSS класса и только тогда,происходит обратная замена классов
            tabContent[b].classList.remove('hidden');              //Удаляем CSS класс отвечающий за невидимость контента
            tabContent[b].classList.add('show');                   //Присваеваем CSS класс отвечающий за видимость контента
        }
    }
    
    tabMenu.addEventListener('click', function(event){             //Задаем обработчик событий на родительский элемент табов, при клике запускается функция с объектом
        let target = event.target;                                 //Задаем переменную которой присваивается событие нажатия
        if(target && target.classList.contains('tab')){            //Создаем условие которое проверяет, что мы кликнули на нужный таб
            for(let i = 0; i < tab.length; i++){                   //Запускаем цикл, который перебирает все табы
                if(target == tab[i]) {                             //Создаем условие, если мы нажали на определенный таб, который полностью совпадет с контентом таба
                    hideTabContent(0);                             //Запускается функция, которая скрывает все контенты табов
                    showTabContent(i);                             //Запускается функция, которая показывает соответствующий табу контент
                    break;                                         //Останавливаем цикл
                }
            }
        }
    })


});