// the styling stays the same even without this code
// but material documentation says to include it

$(document).ready(function() {
    $('select').formSelect();
});

fetch('https://dog-api.matthewswar.com/api/facts')
    .then(response => response.json())
    .then(data => {
        var petfacts1 = document.querySelector('.dog-facts')
        petfacts1.innerText = data.facts 
        console.log(data)});

fetch('https://cat-fact.herokuapp.com/facts')
    .then(response => response.json())
    .then(data => {
        var petfacts2 = document.querySelector('.cat-facts');
        // petfacts2.innerText = data.text; 
        console.log(data)});
    
var catsOrDogs;
var needPictures;        
var apiUrl;
var typeParameter;
var genderParameter;
var breedParameter;
var sizeParameter;
var ageParameter;
var coatParameter;
var picturesParameter;
var shotsParameter;
var petFriendlyParameter;

function fetchData () {
  fetch(apiUrl, {
    headers: {
            'Content-Type': 'application/vnd.api+json',
            'Authorization': 'D5eT1vpr',
          }
    })
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
          console.log(data);
      })
}

function fetchFunction() {
  typeParameter = document.getElementById('type-parameter').value;
  genderParameter = document.getElementById('gender-parameter').value;
  breedParameter = document.getElementById('breed-parameter').value;
  sizeParameter = document.getElementById('size-parameter').value;
  ageParameter = document.getElementById('age-parameter').value;
  coatParameter = document.getElementById('coat-parameter').value;
  picturesParameter = document.getElementById('pictures-parameter').checked;
  shotsParameter = document.getElementById('shots-parameter').checked;
  petFriendlyParameter = document.getElementById('pet-friendly-parameter').checked;
  // For debugging: 
  console.log(typeParameter);
  console.log(genderParameter);
  console.log(breedParameter);
  console.log(sizeParameter);
  console.log(ageParameter);
  console.log(coatParameter);
  console.log(picturesParameter);
  console.log(shotsParameter);
  console.log(petFriendlyParameter);
  if (typeParameter == 1) {
    catsOrDogs = "cats";
    console.log(catsOrDogs);
  } else if (typeParameter == 2) {
    catsOrDogs = "dogs";
    console.log(catsOrDogs);
  } else {
    catsOrDogs = "";
    console.log("no pet type chosen")
  }
  if (picturesParameter) {
    needPictures = "/&include=pictures";
    console.log(picturesParameter);
  } else if (!picturesParameter) {
    needPictures = "";
    console.log(picturesParameter);
  }
  apiUrl = "https://api.rescuegroups.org/v5/public/animals/search/available/" + catsOrDogs + needPictures;
  console.log(apiUrl);
  fetchData();
}

document.querySelector('#furiends-button').addEventListener('click',function() {
    console.log('Furiends List Clicked!');
  });

  document.querySelector('#fetch-button').addEventListener('click',function() {
    console.log('Fetch Button Clicked!');
    fetchFunction();
    // localStorage.setItem('pettentials', JSON.stringify(animalData));
  });

// add fetch 
