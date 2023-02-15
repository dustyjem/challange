function getStuff() {
  var url= "https://api.inaturalist.org/v1/observations?page=1&per_page=20"
  fetch(url)
  .then(response => response.json())
  .then(data => {
      const itemsContainer = document.getElementById('items');
      data.results.forEach(item => {
          const itemElement = document.createElement('div');
          itemElement.classList.add('item');
          const imageElement = document.createElement('img');
          if (item.photos.length > 0) {
              imageElement.src = item.photos[0].url;
          }
          const titleElement = document.createElement('h2');
          titleElement.textContent = item.species_guess;
          itemElement.appendChild(imageElement);
          itemElement.appendChild(titleElement);
          itemsContainer.appendChild(itemElement);
      });
  })
  .catch(error => console.error(error));
}

getStuff()