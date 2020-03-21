// Current Date //
var d = new Date();
var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

document.getElementById("currentDate").innerHTML = days[d.getDay()] + ' '+ months[d.getMonth()] +' '+ d.getDate() +' '+ d.getFullYear();

// Severity //
function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

// Weather API //
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


// Windchill //
var speed = parseInt(document.getElementById('windSpeed').innerHTML);
var temp = parseInt(document.getElementById('currentTemp').innerHTML);

var windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
windChill = Math.round(windChill);
document.getElementById("windChill").innerHTML = windChill;

// Forecast //
let forecastRequest = new XMLHttpRequest();
var apiURLstring = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=b2e353ce185f86c20ab99b14bda3efa7';
forecastRequest.open('GET', apiURLstring, true);
forecastRequest.send();
forecastRequest.onload =  function () {
    let weatherData = JSON.parse(forecastRequest.responseText);
    console.log(weatherData);

    var tempforecast = [];
    var dayofWeek = [];
    var icon = [];
    var day = 1;


    for (var i = 0; i < weatherData.list.length; i++) {
        if (weatherData.list[i].dt_txt.includes('18:00:00')) {
            
            var date = new Date(weatherData.list[i].dt * 1000);
            var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            var findDate = dayOfWeek[date.getDay()];
            dayofWeek.push(findDate);
            
            tempforecast[day] = weatherData.list[i].main.temp;
            day++;

            var iconcode = weatherData.list[i].weather["0"].icon;
            var icon_path = "https://openweathermap.org/img/w/" + iconcode + ".png";
            icon.push(icon_path);
        }
    }

for (var i = 1; i <= 5; i++) {
    document.getElementById('temp' + i).innerHTML = tempforecast[i];
    document.getElementById('day' + i).innerHTML = dayofWeek[i - 1];
    document.getElementById('icon' + i).src = icon[i - 1];
}
}