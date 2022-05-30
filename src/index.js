// grab div that contains dog-bar
const dogBar = document.getElementById('dog-bar');

// grab all data from json server
fetch('http://localhost:3000/pups')
    .then(res => res.json())
    .then(handleDogData);

// do something with data
function handleDogData(dogs) {
    // loop over data
    dogs.forEach(dog => {
        // make a span dog names and attach it to dog bar 
        const dogSpan = document.createElement('span');
        dogSpan.innerText = dog.name
        dogBar.append(dogSpan)
    })
    
}
