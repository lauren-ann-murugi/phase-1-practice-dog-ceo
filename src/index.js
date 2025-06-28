console.log('%c HI', 'color: firebrick')

// Global array to store all breeds
let breeds = [];

document.addEventListener('DOMContentLoaded', function () {
  loadImages();        // Challenge 1: Load random dog images
  loadBreedOptions();  // Challenge 2: Load dog breeds and setup filtering
});

// Challenge 1: Fetch and render 4 dog images
function loadImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

  fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
      data.message.forEach(dogPicUrl => {
        addImage(dogPicUrl);
      });
    });
}

// Helper: Render one image
function addImage(dogPicUrl) {
  const container = document.querySelector('#dog-image-container');
  const img = document.createElement('img');
  img.src = dogPicUrl;
  img.alt = "A cute dog";
  img.style.width = "200px";
  img.style.margin = "10px";
  container.appendChild(img);
}

// Challenge 2: Fetch and list all breeds
function loadBreedOptions() {
  const breedUrl = "https://dog.ceo/api/breeds/list/all";

  fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
      // Extract breed names from response
      breeds = Object.keys(data.message);
      updateBreedList(breeds);         // Render the breeds
      addBreedSelectListener();        // Setup dropdown filtering
    });
}

// Challenge 3: Render breeds and apply click-to-color feature
function updateBreedList(breedArray) {
  const ul = document.querySelector('#dog-breeds');
  removeChildren(ul);

  breedArray.forEach(breed => {
    const li = document.createElement('li');
    li.innerText = breed;
    li.style.cursor = 'pointer';

    // Challenge 3: Change color on click
    li.addEventListener('click', () => {
      li.style.color = 'blue';
    });

    ul.appendChild(li);
  });
}

// Challenge 4: Filter breeds by selected first letter
function addBreedSelectListener() {
  const dropdown = document.querySelector('#breed-dropdown');

  dropdown.addEventListener('change', (e) => {
    const selectedLetter = e.target.value;
    const filteredBreeds = breeds.filter(breed => breed.startsWith(selectedLetter));
    updateBreedList(filteredBreeds);
  });
}

// Utility: Clear all children from a given DOM element
function removeChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
































