let today;
let week = ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let dd;
let mm;
let yyyy;
let monthArray = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
let monthName; 
let dayOfTheWeek;
let hours;
let hoursString;
let minutes;
let minutesString;
let seconds;
let secondsString;
let main = document.querySelector('.main');


function getDayOfTheWeek() {
    for (let i = 0; i < week.length; i++) {
        if (today.getDay() === i) {
            dayOfTheWeek = week[i];
        } else {
            continue;
        }
    }
}

 function hoursCheck() {
     if (hours === '1' || hours === '21') {
        hoursString = 'час';
     } else if ( (hours === '02' || hours === '03' || hours === '04' || hours === '22' || hours === '23' || hours === '24') ) {
        hoursString = 'часа';
     } else {
        hoursString = 'часов';
     }
}

function minutesCheck() {
    if (minutes === '1' || minutes === '21' || minutes === '31' || minutes === '41' || minutes === '51') {
        minutesString = 'минута';
    } else if (minutes === '02' || minutes === '03' || minutes === '04' || minutes === '22' || minutes === '23' || minutes === '24' || minutes === '32' || minutes === '33' || minutes === '34' || minutes === '42' || minutes === '43' || minutes === '44' || minutes === '52' || minutes === '53' || minutes === '54') {
        minutesString = 'минуты';
    } else {
        minutesString = 'минут';
    }
}

function secondsCheck() {
    if (seconds === '01' || seconds === '21' || seconds === '31' || seconds === '41' || seconds === '51') {
        secondsString = 'секунда';
    } else if (seconds === '02' || seconds === '03' || seconds === '04' || seconds === '22' || seconds === '23' || seconds === '24' || seconds === '32' || seconds === '33' || seconds === '34' || seconds === '42' || seconds === '43' || seconds === '44' || seconds === '52' || seconds === '53' || seconds === '54') {
        secondsString = 'секунды';
    } else {
        secondsString = 'секунд';
    }
}

function getMonthName(date) {
    for (let i = 0; i < monthArray.length; i++) {
        if (date === i) {
            monthName = monthArray[i];
        } else {
            continue;
        }
    }
}

setInterval(updateDate, 1000);
function updateDate() {
    today = new Date();
    hours = String(today.getHours() ).padStart(2, '0');
    hoursCheck();
    minutes = String(today.getMinutes()) .padStart(2, '0');
    minutesCheck();
    seconds = String(today.getSeconds() ).padStart(2, '0');
    secondsCheck();
    dd = String(today.getDate() ).padStart(2, '0');
    mm = String(today.getMonth() + 1).padStart(2, '0');
    yyyy = today.getFullYear();
    getDayOfTheWeek();
    getMonthName(today.getMonth());
    
    main.innerHTML = `Сегодня ${dayOfTheWeek}, ${dd} ${monthName} ${yyyy} года, ${hours} ${hoursString} ${minutes} ${minutesString} ${seconds} ${secondsString}
    </br>${dd}.${mm}.${yyyy} - ${hours}:${minutes}:${seconds}`
}



//1,21 - час
//2,3,4,22,23,24 - часа
//5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20 - часов

//1,21,31,41,51 - минута
//2,3,4,22,23,24,32,33,34,42,43,44,52,53,54 - минуты
//5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,25,26,27,28,29,30,35,36,37,38,39,40,55,56,57,58,59,60 - минут
