// The URL below is set to search for dogs
var apiURL = "https://api.rescuegroups.org/v5/public/animals/search/available/dogs/";
fetch(apiURL, {
        headers: {
                'Content-Type': 'application/vnd.api+json',
                // our API key
                'Authorization': 'D5eT1vpr',
        }
})
        .then(function (response) {
                return response.json();
        })
        .then(function (data) {
                console.log(data);
              });
            