//------------------------------------------------------------------------------
//Реализация вывода часов в коноль одной функцией
//------------------------------------------------------------------------------
// setInterval(function() {
//     console.clear();
//     var clock = new Date(),
//         hours = clock.getHours(),
//         minutes = clock.getMinutes(),
//         seconds = clock.getSeconds();
//     // Добавление 0 к значениям меньше 10 - для красоты отображения
//     if (hours < 10) {
//         hours = '0' + hours;
//     }
//     if (minutes < 10) {
//         minutes = '0' + minutes;
//     }
//     if (seconds < 10) {
//         seconds = '0' + seconds;
//     }
//     console.log('Текущее время: ');
//     console.log(hours + ':' + minutes + ':' + seconds);
// }, 1000);



//------------------------------------------------------------------------------
// Реализация вывода часов и в консоль, и на страницу несколькими функциями
//------------------------------------------------------------------------------
// Получение текущего времени
function getTime() {

    var clock = new Date();
    var hours = clock.getHours(),
        minutes = clock.getMinutes(),
        seconds = clock.getSeconds();
    // Добавление 0 к значениям меньше 10 - для красоты отображения
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    showClock(hours, minutes, seconds);
}
// Отображение текущего времени на странице и в консоли
function showClock(hours, minutes, seconds) {
    console.clear();
    // Вывод значений в div элементы на страницу
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    // Замена фона страницы в зависимости от времени суток
    if (hours > 6 && hours < 20) {
        document.body.style.backgroundColor = "#99ccff";
    } else {
        document.body.style.backgroundColor = "#333366";
        document.querySelector('div.caption').style.color = "#999";
    }
    // Вывод часов в консоль
    console.log('Текущее время: ');
    console.log(hours + ':' + minutes + ':' + seconds);
}


setInterval(function() {
    getTime();
}, 1000);
