'use strict';

let foo = function(argument) {
    if (typeof argument !== 'string' || argument.length <= 0) {
        alert('Пожалуйста, укажите строку');
        foo(prompt('Type here'));
    } else if (typeof argument === 'string' && argument.length < 30 && argument.length > 0){
        argument = argument.trim();
        console.log(argument);
    } else if (typeof argument === 'string' && argument.length > 30) {
        argument = argument.substring(0, 30);
        argument += '...';
        console.log(argument);
    }
};

foo(prompt('Type here'));