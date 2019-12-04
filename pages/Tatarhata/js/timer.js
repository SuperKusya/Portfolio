// Задали конечную дату
let deadline = '2019-12-31';
// Примежуток времени сейчас и deadline

function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
        allSeconds = Math.floor(t/1000),
        showedSecond = Math.floor(allSeconds % 60),
        allMinutes = Math.floor(allSeconds/60),
        showedMinutes = Math.floor(allMinutes % 60),
        allHours = Math.floor(allMinutes/60),
        showedHours = Math.floor(allHours / 24),
        showedDays = Math.floor(allHours/24);
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