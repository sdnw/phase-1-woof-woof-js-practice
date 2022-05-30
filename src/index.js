// grab divs that contains id, make available to functions
const dogBar = document.getElementById('dog-bar');
//grab div that contains dog-info
const dogInfo = document.getElementById('dog-info'); 

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
        // click on spanned dogs, dog data now associated with event listener (closure)
        dogSpan.addEventListener('click', e => {
            showDogInfo(dog)
        })
    }); 
}
// function to invoke after clicking event listener
function showDogInfo(dog) {
    // create multiple elements and append them, template literal
    dogInfo.innerHTML = `
    <img src=${dog.image}>
    <h2>${dog.name}</h2>
    <button>${dog.isGoodDog ? 'Good' : 'Bad'} Dog!</button>
    `; // use ternary to toggle between the good/bad dogs
  
    // attach event listener to button, queryselector bc no id on button
    dogInfo.querySelector('button').addEventListener('click', () => {
        // change data
        dog.isGoodDog = !dog.isGoodDog;
        // rerender data if data is changed
        showDogInfo(dog);
    })
   
    
}



 