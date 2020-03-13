const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=b2e353ce185f86c20ab99b14bda3efa7";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsoObject);
  });