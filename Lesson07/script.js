let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let mainSection = document.querySelector('.weekDays');
let date = new Date();
let today = new Date().getDay() - 1;

 for (let i = 0; i < week.length; i++) {
  if (i === today) {
    if (week[i] === 'Saturday' || week[i] === 'Sunday') {
      mainSection.innerHTML += `<strong><i>${week[i]}</i></strong></br>`;
    } else {
        mainSection.innerHTML += `<strong>${week[i]}</strong></br>`;
    }
    } else if (today === -1 && week[i] === 'Sunday') {
      mainSection.innerHTML += `<strong><i>${week[i]}</i></strong></br>`;
    } else if (week[i] === 'Saturday' || week[i] === 'Sunday') {
        mainSection.innerHTML += `<i>${week[i]}</i></br>`;
    }  else {
      mainSection.innerHTML += `${week[i]}</br>`;
    }
 }
    
