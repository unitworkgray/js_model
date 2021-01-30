window.addEventListener('DOMContentLoaded', function(){
    
    'use strict';

    //Calc
    
    
    let persons = document.querySelectorAll('.counter-block-input')[0],                 // Получаем первый инпут
        restDays = document.querySelectorAll('.counter-block-input')[1],                // Получаем второй инпут
        place = document.getElementById('select'),                                      // Получаем выпадающий список
        totalValue = document.getElementById('total'),                                  // Получем элемент, который показывает результат
        personsSum = 0,                                                                 // Значение по дефолту
        daysSum = 0,                                                                    // Значение по дефолту
        total = 0;                                                                      // Значение по дефолту

    totalValue.innerHTML = 0;                                                           // Задаем значения результата до расчетов равное 0

    persons.addEventListener('change', function() {                                     // Функция отслеживающая событие ввода в первый инпут
        personsSum = +this.value;                                                       // Принимает значение введеное в инпут (number)
        total = (daysSum + personsSum)*4000;                                            // Выполняем математическую операцию из алгоритма заказчика

        if(restDays.value == '') {                                                      // Условие: если первый инпут заполнен, а второй нет, то результат останется равным 0
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    restDays.addEventListener('change', function() {                                    // Функция отслеживающая событие ввода во второй инпут
        daysSum = +this.value;                                                          // Принимает значение введеное в инпут (number)
        total = (daysSum + personsSum)*4000;                                            // Выполняем математическую операцию из алгоритма заказчика

        if(persons.value == '') {                                                       // Условие: если второй инпут заполнен, а первый нет, то результат останется равным 0
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    place.addEventListener('change', function() {                                       // Функция, которая умнажает total на коэффициент указанный в value списка
        if (restDays.value == '' || persons.value == '') {                              // Если инпуты не заполнены, то умножения не будет
            totalValue.innerHTML = 0;
        } else {
            let a = total;                                                              // Промежуточная переменная
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;          // Текущий total умножаем [обращаемся к выбранному элементу options]
        }
    });
});