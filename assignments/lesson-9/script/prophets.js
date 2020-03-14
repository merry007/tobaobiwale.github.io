const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
      console.table(jsonObject);
      
        const prophets = jsonObject['prophets'];
        for (let i = 0; i < prophets.length; i++){
             let card = document.createElement('section');

             let image = document.createElement('img');
             image.setAttribute('src', prophets[i].imageurl);
             image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + '-' + prophets[i].order);
             card.appendChild(image);

             let h2 = document.createElement('h2');
             h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
             card.appendChild(h2);

             //let h2 = document.createElement('p');//
            // p.textContent = prophets[i].birthdate;
            // card.appendChild(p);

             let pp = document.createElement('p');
             pp.textContent = prophets[i].birthplace;
             pp.setAttribute('class', 'secondparagraph');
             card.appendChild(pp);

             document.querySelector('div.cards').appendChild(card);
        }
    });