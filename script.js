// load background on first load
window.onload = function() {
  showSection('bio'); // Display bio section on page load
};

// this section controls how each section is displayed
function showSection(sectionId) {
	
  let sectionToShow = document.getElementById(sectionId);
	
  let sections = document.getElementsByTagName('section');
	
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.display = 'none';
  } // Hides all other divs
	
  sectionToShow.style.display = 'block'; // Shows the selected div
	
}

//selects image elements by class
const imageElements = document.getElementsByClassName('thumbnail');

// selects the image container
const imageContainer = document.getElementById('thumbnail-container');

//image URL list
const imageURLs = [
  'https://i.ibb.co/GsyjV30/Untitled-8.png',
  'https://i.ibb.co/sbnDSsB/Untitled-1.png',
  'https://i.ibb.co/T1sK8xB/Screenshot-2023-05-31-9-46-22-PM.png',
];

// individual descriptions for each project
const projectDescriptions = [
  'This is a front-end based copycat of a food delivery service landing page built using jsx. Throughout creating this project I worked with more creative fonts, utilized SCSS for easily adaptable styling and learned about using different webkits for example -webkit textstroke. I plan to come back to this project once I learn more backend technologies.',
  'This is just a simple but amusing (at least to me) idea I had one day and decided to bring into fruition. It is built using jsx. Ask it a question if you dare 🫣.',
  'This is a general landing page for an e-commerce website. I practiced making timed image carousels in this project and again utilized SCSS because of the easily changeable and repeatable syntax. I plan to come back to this project once I learn more backend technologies aswell.'
];

// individual project titles
const projectTitles = [
	'Chow Cabby',
	'Snarky Magic 8 Ball',
	'Shop Guru'
];

// this loops over each image element and sets the image source based on the current index
for (let i = 0; i < imageElements.length; i++) {
  imageElements[i].src = imageURLs[i];
}

// selects the left chevron in the portfolio carousel
const previousButton = document.getElementById('prev-button');

// selects the left chevron in the portfolio carousel
const nextButton = document.getElementById('next-button');

// defines general current index, aka a starting point
let currentIndex = 0;

// this function controls the image URL when a chevron is clicked, the product titles and descriptions changes.
function updateImage() {
	 // this sets the image URL to the current index
  const imageUrl = imageURLs[currentIndex];
	 // this sets the project description to match the current index
  const projectDescription = projectDescriptions[currentIndex];
	
	 // Use a different variable name
  const projectTitleValue = projectTitles[currentIndex]; 
  
	 // this loops over the image elements and sets their disply to none therefore hiding them
  for (let i = 0; i < imageElements.length; i++) {
    imageElements[i].style.display = 'none';
  }
  // sets image to block display so it aligns with teh chevrons, same for the image cntainer
  imageElements[currentIndex].style.display = 'block';
  imageContainer.style.display = 'block';
  
	 // selects the projectTitle h3
  const projectTitle = document.querySelector('.project-description h3');
	
	 // selects the product description p element
  const projectText = document.querySelector('.project-description p');
	
	 // sets the text content of the product title according to the current index
  projectTitle.textContent = projectTitleValue; 
	
	 // sets the text content of the product description according to the current index
  projectText.textContent = projectDescription;
}

// this functions controls the previous image function in the carousel
function previousImage() {
  currentIndex = (currentIndex + 1) % imageURLs.length;
  updateImage();
}

// this functions controls the next image function in the carousel
function nextImage() {
  currentIndex = (currentIndex - 1 + imageURLs.length) % imageURLs.length;
  updateImage();
}

// this listens for a click to perform the appropriate function for both
previousButton.addEventListener('click', previousImage);
nextButton.addEventListener('click', nextImage);

// initializes the first image in the portfolio
updateImage();

// this sends a thank you alert when the person that fills out the form clicks submit
function submitAlert() {
  alert("Thank you!");
}
