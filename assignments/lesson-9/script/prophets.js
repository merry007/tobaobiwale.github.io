const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
.then(function(response) {
//console.log(response) {
 return response.json();
})
.then(function (jsonObject) {
    //console.table(jsonObject);
    const prophets = jsonObject['prophets'];
    prophets.forEach(prophet =>{
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let image = document.createElement('img');

       let fullname = '${prophet.name} ${prophet.lastname}';
       
        h2.innerHTML = fullname
        image.setAttribute('src', prophet.imageurl);
        image.setAttribute('alt',fullname )

        card.appendChild(h2);
        card.appendChild(image);

        document.querySelector('.cards').appendChild(card);
  });
});