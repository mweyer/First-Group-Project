

var apiUrl = "https://api.rescuegroups.org/v5/public/animals/";



var arrayOfData = [];
function updateCarouselCards(animalData) {
    animalData = animalData["data"][0]
    arrayOfData.push(animalData);
    var carouselItem = document.createElement('button');
      carouselItem.classList.add("carousel-item");
      carouselItem.classList.add("black-text");

    var carouselCard = document.createElement('div');
      carouselCard.classList.add("card");
    var carouselImageBox = document.createElement('div');
      carouselImageBox.classList.add("card-image");
    var cardImage = document.createElement('img');
      cardImage.src = animalData.attributes.pictureThumbnailUrl;
    var carouselCardDescription = document.createElement('div');
      carouselCardDescription.classList.add('card-content');
    var carouselAnimalName = document.createElement('h6');
     carouselAnimalName.classList.add('name', 'card-title');
    var carouselAnimalDescription = document.createElement('p');
      carouselAnimalDescription.classList.add('description');

    carouselItem.append(carouselCard);
    carouselCard.append(carouselImageBox);
    carouselImageBox.append(cardImage);
    carouselCard.append(carouselCardDescription);

    carouselAnimalName.innerText = animalData.attributes.name;
    carouselAnimalDescription.innerText = animalData.attributes.description;

    carouselCardDescription.append(carouselAnimalName);
    carouselCardDescription.append(carouselAnimalDescription);

    var carousel  = document.querySelector('.carousel-slider');
    carousel.classList.remove('initialized')
    carousel.append(carouselItem);

}

  function getAnimalData(listOfIds){
    listOfIds.forEach(element => {
      fetch(apiUrl+element, { 
        headers: {
        'Content-Type': 'application/vnd.api+json',
        'Authorization': 'D5eT1vpr',
        // Above: our API key
      }
    })
      .then(function (response) {
        return response.json();
      })
      .then( function(responseBody){
        updateCarouselCards(responseBody);
      })
    });
  }

  function main(){
    var ids = JSON.parse(localStorage.getItem('listOfIds'))
    getAnimalData(ids);
    }
  
  main();




