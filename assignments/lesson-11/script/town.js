const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {

        if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs"){       

            let card = document.createElement('section');
            let div = document.createElement('div');
            let div2 = document.createElement('div');
            let h2 = document.createElement('h2');
            let motto = document.createElement('strong');
            let yearFound = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');
            let image = document.createElement('img');

            div.classList.add("col-1");
            h2.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            yearFound.textContent = "Year Founded: " + towns[i].yearFounded;
            population.textContent = "Population: " + towns[i].currentPopulation;
            rainfall.textContent = "Annual Rainfall: " + towns[i].averageRainfall;
            div2.classList.add("col-2");
            image.setAttribute('src', "image/" + towns[i].photo);
            image.setAttribute('alt', towns[i].name);
            
            card.appendChild(div);
            card.appendChild(div2);
            div.appendChild(h2);
            div.appendChild(motto);
            div.appendChild(yearFound);
            div.appendChild(population);
            div.appendChild(rainfall);
            div2.appendChild(image);

            document.querySelector('div.cards').appendChild(card);
        }
    }
  });