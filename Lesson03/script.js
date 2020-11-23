'use strict';

let lang = prompt('Напишите ru если хотите выбрать русский язык, чтобы увидеть дни недели в консоли. Write en if you want to see days of the week in console in english', 'ru');


if (lang === 'ru') {
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресение');
} else if (lang === 'en') {
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
}

switch(lang) {
    case 'ru': console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресение');
    break;
    case 'en': console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
    break;
}

let daysOfTheWeek = [];
daysOfTheWeek['ru'] = ['Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресение'];
daysOfTheWeek['en'] = ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'];
console.log(daysOfTheWeek[lang][0]);


let namePerson = prompt('Введите имя', "Артем");
namePerson === 'Артем' ? console.log('директор') : namePerson === 'Максим' ? console.log('преподаватель') : console.log('студент');
