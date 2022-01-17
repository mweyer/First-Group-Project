

var apiUrl = "https://api.rescuegroups.org/v5/public/animals/";
var curSlide = 0;
var curCount =0; 
var objOfAnimals = {}
var arrayOfData = [];
var fetchReturned = {};
function updateCarouselCards(animalData) {
     var photoCount = animalData.attributes.pictureCount;
    var carouselItem = document.createElement('button');
      carouselItem.classList.add("carousel-item");
      carouselItem.classList.add("black-text");

    var carouselCard = document.createElement('div');
      carouselCard.classList.add("card");
    var carouselImageBox = document.createElement('div');
      carouselImageBox.classList.add("card-image");
    var cardImage = document.createElement('img');
    cardImage.classList.add('animal-image');
    if(photoCount){
        cardImage.src = updatePhotos(photoCount);
      }else { 
        if( animalData.attributes.pictureThumbnailUrl)
          {
            cardImage.src = animalData.attributes.pictureThumbnailUrl;
          } else {
            var cardError =  document.createElement('h4');
            cardError.innerText = 'Dog-gone it! Something claws-ed this photo to go missing.'
            carouselImageBox.append(cardError);

          }
      }
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
    carouselAnimalName.innerText = animalData.attributes.name;
    carouselAnimalDescription.innerText =  animalData.attributes.breedPrimary + '\n\n' + animalData.attributes.distance + ' miles away';

    carouselCardDescription.append(carouselAnimalName);
    carouselCardDescription.append(carouselAnimalDescription);

    var carousel  = document.querySelector('.carousel-slider');
    carousel.classList.remove('initialized')
    carousel.append(carouselItem);
}


function updatePhotos(photoCount) {
  var endPointer = (curCount + photoCount);
  const photo =  fetchReturned.included[endPointer-1].attributes.large.url;
  curCount = endPointer;
  return photo;
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
  addHideClass($('.pet-tential-selection-buttons'));
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

  fetchReturned = JSON.parse(localStorage.getItem('petTentialPals'));
  console.log(fetchReturned);
  if (fetchReturned && Object.keys(fetchReturned).length > 1) {
    console.log('In if statement')
    getAnimalData(fetchReturned);
  }
  else{
    console.log('In else statement')
    openErrorModal();
  }
}

function getAnimalData(fetchReturned){
  animalData = fetchReturned['data'];
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
  addHideClass($('.carousel'));
  addHideClass($('.pet-tential-selection-buttons'));
  setTimeout(()=>{
    getDataFromStorage();
  }, 2500)
}

  document.querySelector('#remove-button').addEventListener('click',function() {
    console.log('Clicked! The current slide is: ' + curSlide.id);
    removeAnimalFromCarousel();
  });

  document.querySelector('#save-button').addEventListener('click',function() {
    console.log('Clicked! The current slide is: ' + curSlide.id);
    saveAnimalToLocalStorageAndRemove();
  });
  
$('.fetch').click(function() {
    console.log('Furiends List Clicked!');
    localStorage.setItem('pettentials', JSON.stringify(arrayOfData));
    window.location = 'furiends-list.html';
  });

  $('#restart-button, #restart-footer-button').click(function() {
    console.log('Try again Clicked!');
    window.location = 'index.html';
  });

  main();
