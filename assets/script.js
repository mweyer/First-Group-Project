// the styling stays the same even without this code
// but material documentation says to include it


    fetch('https://dog-api.matthewswar.com/api/facts')
.then(response => response.json())
.then(data => {
    var petfacts1 = document.querySelector('.dog-facts')
    petfacts1.innerText = data.facts 
    console.log(data)});

 fetch('https://cat-fact.herokuapp.com/facts')
.then(response => response.json())
.then(data => {
    var petfacts2 = document.querySelector('.cat-facts')
    petfacts2.innerText = data.facts 
    console.log(data)
});
    
    
    





