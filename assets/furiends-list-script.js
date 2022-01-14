var resultContainer = document.getElementById("results")

// var apiUrl = "https://api.rescuegroups.org/v5/public/animals/";



// function getAnimalData(listOfIds){
//   listOfIds.forEach(element => {
//     fetch(apiUrl+element, { 
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
//       console.log(responseBody)

//       //TODO: For loop based upon stored results
//         //For loop to append result data to the results page
//          for (var i = 0; i < 10; i++)
//          {
//               var resultPetImage = document.createElement('img');
//               var resultPetName = document.createElement('p');
//               var resultPetType = document.createElement('p');
//               var resultPetAge = document.createElement('p');
//               var resultPetBreed = document.createElement('p');
//               var resultPetCoatLength = document.createElement('p');
//               var resultPetLocation = document.createElement('p');
//               var resultPetAdoptionLink = document.createElement('p');

//         // TODO: Need to find other attributes to populate the remaining sections
//         // Adding the text content from the collected results so they can be later appended to the results html page
//               resultPetImage.textContent = "Image Goes Here";
//               resultPetName.textContent = "Name: ";
//               resultPetType.textContent = "Type: ";
//               resultPetBreed.textContent = "Breed: ";
//               resultPetAge.textContent = "Age: ";
//               resultPetCoatLength.textContent = "Coat Length: ";
//               resultPetLocation.textContent = "Location: ";
//               resultPetAdoptionLink.textContent = "Adoption Link: ";


//         // Append section that will attach the above text content and apply it to the resultContainer on the results html page
//               var newCard = document.createElement("div");
//               newCard.className="card furiends-cards";
//               newCard.id = "card" + i;
//               console.log(newCard.id);
//               resultContainer.append(newCard);

//               newCard.append(resultPetImage);
//               newCard.append(resultPetName);
//               newCard.append(resultPetType);
//               newCard.append(resultPetBreed);
//               newCard.append(resultPetAge);
//               newCard.append(resultPetCoatLength);
//               newCard.append(resultPetLocation);
//               newCard.append(resultPetAdoptionLink);
//          }
      
//     })

//   });
// }
//TODO: Once the local storage is set, enable this to populate the page
function populatePage()
{
  var savedAnimalData = JSON.parse(localStorage.getItem('pettentials'));
  console.log(savedAnimalData)
  // for (var i = 0; i < 50; i++)
  // {
  for (var i = 0; i < savedAnimalData.length; i++)
  {
       var resultPetList = document.createElement('ul');
       var resultPetImage = document.createElement('img');
       var resultPetName = document.createElement('p');
       var resultPetType = document.createElement('p');
       var resultPetAge = document.createElement('p');
       var resultPetBreed = document.createElement('p');
       var resultPetCoatLength = document.createElement('p');
       var newCard = document.createElement("div");
       var adoptButton = document.createElement('btn');

      resultPetName.className += " class-content pet-card-body-text";
      resultPetType.className += " class-content pet-card-body-text";
      resultPetAge.className += " class-content pet-card-body-text";
      resultPetBreed.className += " class-content pet-card-body-text";
      resultPetCoatLength.className += " class-content pet-card-body-text";

 // TODO: Need to find other attributes to populate the remaining sections
 // Adding the text content from the collected results so they can be later appended to the results html page
       resultPetName.textContent = "Name: " + savedAnimalData[i].attributes.name;
       resultPetType.textContent = "Type: ";
       resultPetBreed.textContent = "Breed: " + savedAnimalData[i].attributes.breedPrimary;
       resultPetAge.textContent = "Age: " + savedAnimalData[i].attributes.ageGroup;
       resultPetCoatLength.textContent = "Coat Length: " + savedAnimalData[i].attributes.coatLength;
       adoptButton.textContent = "Adopt Me";


       resultPetImage.src = savedAnimalData[i].attributes.pictureThumbnailUrl;
       resultPetImage.width = "300";
       resultPetImage.className = "pet-image z-depth-2"


 // Append section that will attach the above text content and apply it to the resultContainer on the results html page
       newCard.className="card furiends-cards";
       newCard.id = "card";
       //add + i to newcard.id when for loop happens

       adoptButton.className="btn adopt-button waves-effect waves-light";
       console.log(newCard.id);


       resultContainer.append(newCard);
       newCard.append(resultPetImage);
       newCard.append(resultPetList);
       resultPetList.append(resultPetName);
       resultPetList.append(resultPetType);
       resultPetList.append(resultPetBreed);
       resultPetList.append(resultPetAge);
       resultPetList.append(resultPetCoatLength);
       resultPetList.append(adoptButton);

  }
}


populatePage();




