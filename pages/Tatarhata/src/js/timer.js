// Задали конечную дату
let deadline = '2019-12-31';
// Примежуток времени сейчас и deadline

function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
    // методом floor объекта Math получаем целые числа,
    // из мс в сек.
        allSeconds = Math.floor(t/1000),
    // получаем секунды как остаток от минут, 1 мин. = 60 сек.
        showedSecond = Math.floor(allSeconds % 60),
    // из сек. в минуты
        allMinutes = Math.floor(allSeconds/60),
    // получаем минуты как остаток от часов, 1 ч. = 60 мин.
        showedMinutes = Math.floor(allMinutes % 60),
    //  
        allHours = Math.floor(allMinutes/60),
        showedHours = Math.floor(allHours / 24),
        showedDays = Math.floor(allHours/24);

    //     seconds = Math.floor((t/1000) % 60),
    //     minutes = Math.floor((t/1000/60) % 60),
    //     hours = Math.floor((t/(1000*60*60))),
    //     days = Math.floor(t/)
    var time = [showedSecond, showedMinutes, showedHours, showedDays].map(function(number){
        if (number < 10) {
            return "0" + number;
        } else {
            return number;
        }

    });

    return {
        'total': t,
        'days': time[3],
        'hours': time[2],
        'minutes': time[1],
        'seconds' : time[0],
    };
}
    // Берет со страница переменные
    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            days = timer.querySelector('.days')
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            if (t.total <= 0) {
                clearInterval(timeInterval);
                timer.textContent = 'Happy New Year!'
            } else {
                days.textContent = t.days;
                hours.textContent = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;
            }
        }
    }

setClock('timer', deadline);



//let hours = Math.floor((t/1000/60/60) % 24);
// let days = Math.floor(t(1000*60*60*60*24));



// Изменить скрипт так, чтобы в таком случае выводилось: 00:00:00 ·
//  Необходимо подставлять 0 перед значениями, которые состоят из одной цифры (из 4:6:50 сделает 04:06:50)