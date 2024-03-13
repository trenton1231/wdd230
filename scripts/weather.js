const weatherIcon = document.querySelector('#weather-icon');

function weatherBalloon(cityID) {
    var key = '36fb96f8c1e54771f029732d822de38c';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            drawWeather(data);
        })
        .catch(function () {

        });
}

window.onload = function () {
    weatherBalloon(5310193);
}

function drawWeather(d) {
    var fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);
    var windChill = Math.round(35.74 + (.6215 * fahrenheit) - (35.75 * (d.wind.speed) ** .16) + (.4275 * fahrenheit * (d.wind.speed) ** .16));
    var desc = d.weather[0].description;
    var iconsrc = `https://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'weather imag');

    document.getElementById('temp').innerHTML = fahrenheit + '&deg; F';
    document.getElementById('desc').innerHTML = desc;
    document.getElementById('location').innerHTML = 'Weather For: ' + d.name;



}
