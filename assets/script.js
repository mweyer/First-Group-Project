var petImage = document.querySelector('#pet-image');
var petName = document.querySelector('.card-title');
var petDescription = document.querySelector('.card-content');
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
              });
            