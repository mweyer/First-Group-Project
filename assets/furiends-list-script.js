var resultContainer = document.getElementById("results")

var apiUrl = "https://api.rescuegroups.org/v5/public/animals/";



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
      console.log(responseBody)

      //TODO: For loop based upon stored results
        //For loop to append result data to the results page
         for (var i = 0; i < 10; i++)
         {
           console.log("For Loop")
              var resultPetImage = document.createElement('img');
              var resultPetName = document.createElement('p');
              var resultPetType = document.createElement('p');
              var resultPetAge = document.createElement('p');
              var resultPetBreed = document.createElement('p');
              var resultPetCoatLength = document.createElement('p');
              var resultPetLocation = document.createElement('p');
              var resultPetAdoptionLink = document.createElement('p');

        // TODO: Need to find other attributes to populate the remaining sections
        // Adding the text content from the collected results so they can be later appended to the results html page
              resultPetImage.textContent = "Image Goes Here";
              resultPetName.textContent = "Name: ";
              resultPetType.textContent = "Type: ";
              resultPetBreed.textContent = "Breed: ";
              resultPetAge.textContent = "Age: ";
              resultPetCoatLength.textContent = "Coat Length: ";
              resultPetLocation.textContent = "Location: ";
              resultPetAdoptionLink.textContent = "Adoption Link: ";


        // Append section that will attach the above text content and apply it to the resultContainer on the results html page
              var newCard = document.createElement("div");
              newCard.className="card";
              newCard.id = "card" + i;
              resultContainer.append(newCard);

              newCard.append(resultPetImage);
              newCard.append(resultPetName);
              newCard.append(resultPetType);
              newCard.append(resultPetBreed);
              newCard.append(resultPetAge);
              newCard.append(resultPetCoatLength);
              newCard.append(resultPetLocation);
              newCard.append(resultPetAdoptionLink);
         }
      
    })

  });
}

  function main(){
    var ids = JSON.parse(localStorage.getItem('listOfIds'))
    getAnimalData(ids);
  }
  
  main();




