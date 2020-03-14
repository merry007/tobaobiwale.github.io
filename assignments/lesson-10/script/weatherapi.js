/*const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=b2e353ce185f86c20ab99b14bda3efa7";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const currentTemp = document.querySelector
    ('#current-tempt');
    

    currentTemp.textContext = jsObject.main.temp;

  const imagesrc = 'https://openweathermap.org/img/w/ ${jsObject.weather[0].icon}.png';  // note the concatenation
  const desc = jsObject.weather[0].description;  // note how we reference the weather array
  document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
  document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
  document.getElementById('icon').setAttribute('alt', desc);
});
*/

let weatherRequest = new XMLHttpRequest();
var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=b2e353ce185f86c20ab99b14bda3efa7';
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

document.getElementById("currently").innerHTML = weatherData.weather[0].description;
document.getElementById("currentTemp").innerHTML = weatherData.main.temp;
document.getElementById("Humidity").innerHTML = weatherData.main.humidity;
document.getElementById("windSpeed").innerHTML = weatherData.wind.speed;

 var temp = weatherData.main.temp;
 var speed = weatherData.wind.speed;

 var result = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed,0.16) + 0.4275 *
  temp * Math.pow(speed, 0.16);

  document.getElementById('windChill').innerHTML = result.toFixed(1);
}
