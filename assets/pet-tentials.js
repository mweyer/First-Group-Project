

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
  removeHideClass(carousel);
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
  var footer = $('.pet-tential-footer');
  var remove = $('#remove-button');
  var save =  $('#save-button');
  $('.loading').addClass('hide');

  remove.click($('#modal1').modal('open'));
  save.click($('#modal1').modal('open'));
  removeHideClass(footer);
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
function getDataFromStorage() {
  addHideClass($('.carousel'));
  addHideClass($('.pet-tential-selection-buttons'));
  var animalData = JSON.parse(localStorage.getItem('pettentials')) || [];
  if (Array.isArray(animalData) && animalData.length > 0) {
    console.log('In if statement')
    getAnimalData(animalData);
  }
  else{
    console.log('In else statement')
    openErrorModal();
  }
}

function getAnimalData(animalData){
  animalData.forEach(element => {
    updateCarouselCards(element);
  }); 
  $('#remove-button').removeClass('disabled');
  $('#save-button').removeClass('disabled');
  addHideClass($('.loading'))
  refreshCarousel();
  removeHideClass($('.pet-tential-selection-buttons'));
  addHideClass($('.pet-tential-footer'));
}

function removeHideClass(element) {
  element.removeClass('hide');
}

function addHideClass(element) {
  element.addClass('hide');
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
  
 $('#pet-tential-furiends-button, #furiends-footer-button').click(function() {
    console.log('Furiends List Clicked!');
    localStorage.setItem('pettentials', JSON.stringify(arrayOfData));
    window.location = 'furiends-list.html';

  });

  $('#restart-button, #restart-footer-button').click(function() {
    console.log('Try again Clicked!');
    window.location = 'index.html';
  });

  main();
