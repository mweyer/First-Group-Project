

var apiUrl = "https://api.rescuegroups.org/v5/public/animals/";
var curSlide = 0;

var objOfAnimals = {}
var arrayOfData = [];
function updateCarouselCards(animalData) {
  console.log(animalData)
    animalData = animalData["data"][0]
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

    carouselItem.setAttribute('id','animal'+animalData['id']);
    objOfAnimals['animal'+animalData['id']] = animalData;

    carouselItem.append(carouselCard);
    carouselCard.append(carouselImageBox);
    carouselImageBox.append(cardImage);
    carouselCard.append(carouselCardDescription);
    carouselAnimalName.innerText = animalData.attributes.name + ' the ' + animalData.attributes.breedPrimary;
    // carouselAnimalDescription.innerText = animalData.attributes.descriptionText;

    carouselCardDescription.append(carouselAnimalName);
    carouselCardDescription.append(carouselAnimalDescription);

    var carousel  = document.querySelector('.carousel-slider');
    carousel.classList.remove('initialized')
    carousel.append(carouselItem);
}

function refreshCarousel() {
  var carousel = $('#carousel');
  if(carousel.children().length) {
  carousel.removeClass('hide');
  carousel.removeClass('initialized') 
  carousel.carousel({
    onCycleTo: function(data) {
      curSlide=data;
    }
  });
  }else{
    openErrorModal();
  }
}
function openErrorModal() {
  var modal = $('.modal').modal();
  var footer = $('.footer');
  var remove = $('#remove-button');
  var save =  $('#save-button');
  $('.loading').addClass('hide');

  remove.click($('#modal1').modal('open'));
  save.click($('#modal1').modal('open'));
  footer.removeClass('hide');
}

function removeAnimalFromCarousel(){
  curSlide.classList.remove('carousel-item');
  document.querySelector('#carousel').removeChild(document.getElementById(curSlide.id));
  refreshCarousel();
}

function saveAnimalToLocalStorageAndRemove() {
  arrayOfData.push(objOfAnimals[curSlide.id]);
  console.log(arrayOfData);
  removeAnimalFromCarousel();
}
  // function getAnimalData(listOfIds){
  //    var listOfPromises = listOfIds.map(element => {
  //     return fetch(apiUrl+element, { 
  //       headers: {
  //       'Content-Type': 'application/vnd.api+json',
  //       'Authorization': 'D5eT1vpr',
  //       // Above: our API key
  //     }
  //   })
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then( function(responseBody){
  //       updateCarouselCards(responseBody);
  //     })
  //   });
  //   Promise.allSettled(listOfPromises).then(function(){
  //     console.log('Promises settled')
  //     $('.loading').addClass('hide');
  //     refreshCarousel();
  //     $('.selection-buttons').removeClass('hide');
  //     document.querySelector('.footer').classList.add('hide');

  //   });
  // }

  function getDataFromStorage() {
    $('.carousel').addClass('hide');
    var animalData = JSON.parse(localStorage.getItem('listOfIds'));
    if (!animalData) {
      openErrorModal();
    }
    document.querySelector('.carousel').classList.add('hide');
    document.querySelector('.selection-buttons').classList.add('hide');
    $('#remove-button').removeClass('disabled');
    $('#save-button').removeClass('disabled');
    getAnimalData(animalData)
  }

  function getAnimalData(animalData){
    animalData.forEach(element => {
      updateCarouselCards(element);
    }); 
     $('.loading').addClass('hide');
     refreshCarousel();
     $('.selection-buttons').removeClass('hide');
     document.querySelector('.footer').classList.add('hide');
 }

function main(){
  getDataFromStorage()
}

  document.querySelector('#remove-button').addEventListener('click',function() {
    console.log('Clicked! The current slide is: ' + curSlide.id);
    removeAnimalFromCarousel();
  });

  document.querySelector('#save-button').addEventListener('click',function() {
    console.log('Clicked! The current slide is: ' + curSlide.id);
    saveAnimalToLocalStorageAndRemove();
  });
  
 $('#furiends-button, #furiends-footer-button').click(function() {
    console.log('Furiends List Clicked!');
    localStorage.setItem('pettentials', JSON.stringify(arrayOfData));
    window.location = 'furiends-list.html';

  });

  $('#restart-button, #restart-footer-button').click(function() {
    console.log('Try again Clicked!');
    window.location = 'index.html';
  });

  main();
