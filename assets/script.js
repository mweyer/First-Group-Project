var petImage = document.querySelector('#pet-image');
var petName = document.querySelector('.card-title');
var petDescription = document.querySelector('.card-content');
var resultContainer = document.querySelector('#results');

// The URL below is set to search for dogs
var apiUrl = "https://api.rescuegroups.org/v5/public/animals/search/available/dogs/";

fetch(apiUrl, {
        headers: {
                'Content-Type': 'application/vnd.api+json',
                'Authorization': 'D5eT1vpr',
                // Above: our API key
        }
})
        .then(function (response) {
                return response.json();
        })
        .then(function (data) {
                petImage.setAttribute("src", data.data[0].attributes.pictureThumbnailUrl);
                petName.textContent = data.data[0].attributes.name;
                petDescription.innerHTML = data.data[0].attributes.descriptionHtml;
                // For debugging:
                console.log(data);
                console.log(data.data[0].attributes.pictureThumbnailUrl);


                // TODO: Create a result variable that can be referenced instead of the data for the loop below. This variable will be populated based upon actions on the second HTML page

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

              });


              $('.card').click(function(){
                $('#modal-card').modal();
                $('.modal-content').append( $(this).find('h6'));
                $('#modal-card').modal('open'); 
             });
                
        $(document).ready(function(){
        $('.carousel').carousel();
        });
        
            
