window.addEventListener('DOMContentLoaded', function(){

    'use strict';

    let button = document.querySelector('.button'),
        modal = document.querySelector('.modal_window'),
        close = document.querySelector('.close'),
        body = document.getElementsByTagName('body');

    button.addEventListener('click', function(){
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function(){
        modal.style.display = 'none';
        document.body.style.owerflow = '';
    });
});