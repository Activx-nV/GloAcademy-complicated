'use strict';

let lang = prompt('Напишите ru если хотите выбрать русский язык, чтобы увидеть дни недели в консоли. Write en if you want to see days of the week in console in english', 'ru');

if (lang == 'ru') {
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресение');
} else if (lang == 'en') {
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
}
let namePerson = prompt('Введите имя', "Артем");
namePerson == 'Артем' ? console.log('директор') : namePerson == 'Максим' ? console.log('преподаватель') : console.log('студент');