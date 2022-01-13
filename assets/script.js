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
    

var typeParameter;
var genderParameter;
var sizeParameter;
var ageParameter;
var coatParameter;
var picturesParameter;
var shotsParameter;
var petFriendlyParameter;

function fetchFunction() {
typeParameter = document.getElementById('type-parameter').value;
genderParameter = document.getElementById('gender-parameter').value;
sizeParameter = document.getElementById('size-parameter').value;
ageParameter = document.getElementById('age-parameter').value;
coatParameter = document.getElementById('coat-parameter').value;
picturesParameter = document.getElementById('pictures-parameter').checked;
shotsParameter = document.getElementById('shots-parameter').checked;
petFriendlyParameter = document.getElementById('pet-friendly-parameter').checked;
console.log(typeParameter);
console.log(genderParameter);
console.log(sizeParameter);
console.log(ageParameter);
console.log(coatParameter);
console.log(picturesParameter);
console.log(shotsParameter);
console.log(petFriendlyParameter);
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
