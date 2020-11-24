'use strict';

function stringCorrector(string) {
    if (typeof string !== 'string' || string.length <= 0) {
        alert('Пожалуйста, укажите строку');
        stringCorrector(prompt('Type here'));
    } else if (typeof string === 'string' && string.length < 30 && string.length > 0){
        string = string.trim();
        console.log(string);
    } else if (typeof string === 'string' && string.length > 30) {
        string = string.substring(0, 30);
        string += '...';
        console.log(string);
    }
}

stringCorrector(prompt('Type here'));
