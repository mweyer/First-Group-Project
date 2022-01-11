// Test script for dog facts API
var apiURL = "http://dog-api.kinduff.com/api/facts";

// http://dog-api.kinduff.com/api/facts
// "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all"
fetch(apiURL, 
        {mode: 'cors'})
        .then(function (response) {
                return response.json();
        })
        .then(function (data) {
                console.log(data);
              });
            