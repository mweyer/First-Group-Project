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

        //For loop to append result data to the results page
        // for (var i = 0; i < result.length; i++)
        // {
        //      var resultPetImage = document.createElement('img');
        //      var resultPetName = document.createElement('h3');
        //      var resultPetType = document.createElement('p');
        //      var resultPetAge = document.createElement('p');
        //      var resultPetBreed = document.createElement('p');
        //      var resultPetLocation = document.createElement('p');
        //      var resultPetDescription = document.createElement('p');
        //      var resultPetAdoptionLink = document.createElement('p');

        //TODO: Need to find other attributes to populate the remaining sections
        //Adding the text content from the collected results so they can be later appended to the results html page
        //      resultPetImage.textContent = result[i].attributes.pictureThumbnailUrl;
        //      resultPetName.textContent = "Name: " + result[i].attributes.name;
        //      resultPetName.textContent = "Description: " + result[i].attributes.descriptionHtml;

        //Append section that will attach the above text content and apply it to the resultContainer on the results html page
        //      resultContainer.append(resultPetName);
        //      resultContainer.append(resultPetType);
        //      resultContainer.append(resultPetAge);
        //      resultContainer.append(resultPetBreed);
        //      resultContainer.append(resultPetLocation);
        //      resultContainer.append(resultPetDescription);
        //      resultContainer.append(resultPetAdoptionLink);
        // }
      
    })

  });
}

  function main(){
    var ids = JSON.parse(localStorage.getItem('listOfIds'))
    getAnimalData(ids);
  }
  
  main();




