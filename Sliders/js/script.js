window.addEventListener('DOMContentLoaded', function(){

    'use strict';

    //Slider

    let slideIndex = 1,                                                                 // Переменная отвечает за тот слайд, который показывается в текущий момент
        slides = document.querySelectorAll('.slider-item'),                             // Получаем коллекцию слайдов
        prev = document.querySelector('.prev'),                                         // Получаем доступ к стрелке НАЗАД
        next = document.querySelector('.next'),                                         // Получаем доступ к стрелке ВПЕРЕД
        dotsWrap = document.querySelector('.slider-dots'),                              // Получаем доступ контейнеру точек
        dots = document.querySelectorAll('.dot');                                       // Получаем доступ к коллекции точек

    showSlides(slideIndex);                                                             // Вызываем функцию показа слайдов с аргументом slideIndex

    function showSlides(n){                                                             // Функция показа слайдов

        if (n > slides.length){                                                         // Если после последнего слайда мы нажмем стрелку ВПЕРЕД, то переместимся к первому слайду
            slideIndex = 1;
        }
        if (n < 1){                                                                     // Если после первого слайда мы нажмем стрелку НАЗАД, то переместимся к полседнему слайду
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');                          // Перебираем все слайды и скрываем их
        dots.forEach((item) => item.classList.remove('dot-active'));                    // Перебираем все точки и убираем клас активности

        slides[slideIndex-1].style.display = 'block';                                   // Делаем видимым первый слайд [конструкция slideIndex - 1 позволяет из человеческой системы исчисления перевести ей в систему JS]
        dots[slideIndex-1].classList.add('dot-active');                                 // Делаем активной первую точку, согласно 1 слайду
    }

    function plusSlides(n){                                                             // Функция увеличивающая параметр slideIndex (при нажатии стрелки перемещается на 1 слайд ВПЕРЕД)
        showSlides(slideIndex +=n);                                                     
    }

    function currentSlide(n){                                                           // Функция определяющая текущий слайд и устанавливающая его
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function(){                                          // Функция реагирующая на нажатие стрелки НАЗАД
        plusSlides(-1);
    });

    next.addEventListener('click', function(){                                          // Функция реагирующая на нажатие стрелки ВПЕРЕД
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(event){                                 // Обработчик сабытий на контейнере точек
        for(let i = 0; i < dots.length+1; i++){                                         // Запускаем цикл перебора всех точек
            if(event.target.classList.contains('dot') && event.target == dots[i-1]){    // Если кликнули на точку с класом dot и кликнули на
                currentSlide(i);                                                        // То показываем слайд соответствующий этой точке
            }
        }
    });

    
});