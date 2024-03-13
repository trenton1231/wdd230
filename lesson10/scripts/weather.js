const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=36fb96f8c1e54771f029732d822de38c';

async function apiFetch() {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=36fb96f8c1e54771f029732d822de38c');
        if (response.ok) {
            const data = await response.json();
            /*console.log(data);*/
            displayResults(data);
        } else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }

}

apiFetch();

function displayResults(data) {
    const temp = Math.trunc(`${data.main.temp}`);
    currentTemp.innerHTML = temp + '&deg; F'
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'weather imag');
    captionDesc.textContent = `${desc}`;
}