//Header Type Function/////////////////////////////////////////////////////////////////////////////////////////////

let changer = document.querySelector("#wordChanger")
let strings = ["Student", "Designer", "Developer"];

let stringIndex = 0; // initializes the current string in strings
let letterIndex = 0; // initializes the current letter

let mode = "type"; // stores mode of typeOrDeleteLetter function

let timerId; // stores the id of the variable

function typeOrDeleteLetter() {

    let string = strings[stringIndex]; //gets current string in strings
    let letter = string[letterIndex]; //gets current letter from string

    if (mode == "type") {

        changer.textContent += letter; // append letter to changer element
        letterIndex++;

        if (letterIndex < string.length) {
            // wait for the next interval
        } else {
            mode = "delete"; // changes the function's mode
            clearInterval(timerId); // clears the current interval
            timerId = setInterval(typeOrDeleteLetter, 200); // sets new interval
        }   

    } else if (mode === "delete") {

        changer.textContent = changer.textContent.slice(0, -1); // remove letter from textContent
        letterIndex--;

        if (letterIndex >= 0) {
            // intentionally does nothing, waiting for next interval
        } else {

            letterIndex = 0; //reset letterIndex
            stringIndex++; //increment stringIndex

            if (stringIndex < strings.length) {
                mode = "type";
                clearInterval(timerId); // clear current Interval
                timerId = setInterval(typeOrDeleteLetter, 100); // set new interval with shorter delay
            } else {
                stringIndex = 0; // reset string index to 0
                mode = "type";
                clearInterval(timerId);
                timerId = setInterval(typeOrDeleteLetter, 100); //set new interval with longer delay       
            } // check if string index is less than array length
        }
    }  // checks current mode of the function
} // header type function

timerId = setInterval(typeOrDeleteLetter, 100); // set initial interval with shorter delay

///////////////////////////////////////////////////////////////////////////////////////////////


//Menu Button/////////////////////////////////////////////////////////////////////////////////////////////

let menu = document.querySelector('#menu');
menu.style.visibility = 'hidden';

let menuButton = document.querySelector('#menuButton');
menuButton.addEventListener("click", () => {
    menu.style.visibility = 'visible';
    menu.style.animation = 'menuIn .25s linear';
}); // Shows Menu

let closeMenu = document.querySelector("#closeMenu");
closeMenu.addEventListener("click", () => {
    menu.style.visibility = 'hidden';
    menu.style.animation = 'none';
});  // Hides Menu

//////////////////////////////////////////////////////////////////////////////////////////////


//Theme Button////////////////////////////////////////////////////////////////////////////////////////////

let body = document.querySelector('body');
let outerSwitch = document.querySelector('outerSwitch');
let theme = "light";
let isClicked = false;
let switchBackground = document.querySelector('#switchBackground');
let mainSection = document.getElementById('main');
let menuItems = document.querySelectorAll('.menuItem');
let main = document.getElementById('main');
let mainContainer = document.getElementById('mainContainer');
let modeSwitch = document.getElementById('innerSwitch');
let buttons = document.querySelectorAll('.aboutMeButton');
let educationButtons = document.querySelectorAll('.educationButton');
let projectSwitcher = document.getElementById('projectSwitcher');
let projectSwitchers = document.querySelectorAll('.projectswitcher');
let downloadLink = document.getElementById('downloadResume');
tooltip.style.backgroundColor = 'whitesmoke';

educationButtons.forEach((educationButton) => {
    educationButton.color = 'black';
});

menuItems.forEach((menuItem) => {
menuItem.style.borderRadius = '25px';
// menuItem.style.boxShadow = 'inset 0 0 .5rem transparent';
});

modeSwitch.addEventListener("click", () => {

    if (isClicked == false) {
        modeSwitch.style.left = '41%';
        theme = "dark";
        switchBackground.style.transform = 'translate(50%, 0)';
    } else {
        modeSwitch.style.left = '0';
        theme = "light";
        switchBackground.style.transform = 'translate(0, 0)';
    } 

    isClicked = !isClicked;  // Resets Theme Switch

    if (theme == "light") { // Light Theme
        body.style.background = 'linear-gradient(22deg, lightgreen, grey, darkgreen)';

        main.style.backgroundColor = 'green';
        main.style.boxShadow = 'inset 0 0 2rem yellow';
        main.style.color = 'black';
        mainContainer.style.background = 'linear-gradient(45deg, darkgreen, yellow, darkgreen, lime, darkgreen, yellow, darkgreen, lime, darkgreen, yellow, darkgreen, lime, yellow, darkgreen, yellow, darkgreen, lime, darkgreen, yellow)';
        main.style.border = '.25rem solid yellow';
        menuButton.style.color = 'black';
        menuButton.style.border = '1px solid black';
        menuButton.style.backgroundColor = 'whitesmoke';
        menuButton.style.boxShadow = 'inset 0 0 .5rem black';

        modeSwitch.style.backgroundColor = 'black';
        modeSwitch.style.border = '1px solid black';

        menu.style.border = '1px solid white';
        menu.style.boxShadow = 'inset 0 0 1rem black';
        menu.style.backgroundColor = 'whitesmoke';
        menu.style.color = 'black';
        menuItems.forEach((menuItem) => {
            menuItem.style.boxShadow = 'inset 0 0 .5rem whitesmoke';
            menuItem.addEventListener("mouseover", () => {
                menuItem.style.boxShadow= 'inset 0 0 .5rem black';
            });
            menuItem.addEventListener("mouseout", () => {
                menuItem.style.boxShadow= 'inset 0 0 .5rem whitesmoke';
            });
        });

        closeMenu.style.border = '1px solid black';
        closeMenu.style.color = 'black';

        buttons.forEach((button) => {
            button.style.border = '1px solid black';
        });
        
        downloadLink.style.color = 'black';

        tooltip.style.backgroundColor = 'white';
        
    } else {
        // Dark Theme
        body.style.background = 'linear-gradient(22deg, black 80%, blue, navy)';

        main.style.backgroundColor = 'black';
        main.style.color = 'white';
        main.style.boxShadow = 'inset 0 0 1rem white';
        main.style.border = '.25rem solid blue';

        mainContainer.style.background = 'linear-gradient(45deg, black, blue, black, navy, black, blue, black, navy, black, blue, black, navy, black, blue, black, navy, black, blue)';

        menuButton.style.color = 'white';
        menuButton.style.border = '1px solid white';
        menuButton.style.backgroundColor = 'black';
        menuButton.style.boxShadow = 'inset 0 0 .5rem whitesmoke';

        modeSwitch.style.backgroundColor ='whitesmoke';
        modeSwitch.style.border = '1px solid black';

        menu.style.border = '1px solid white';
        menu.style.boxShadow = 'inset 0 0 1rem white';
        menu.style.backgroundColor = 'black';
        menu.style.color = 'whitesmoke';
        menuItems.forEach((menuItem) => {
            menuItem.style.boxShadow = 'inset 0 0 .5rem black';
            menuItem.addEventListener("mouseover", function () {
                menuItem.style.boxShadow = 'inset 0 0 .5rem whitesmoke';
            });
            menuItem.addEventListener("mouseout", function () {
                menuItem.style.boxShadow = 'inset 0 0 .5rem black';
            });
        });

        downloadLink.style.color = 'whitesmoke';

        closeMenu.style.border = '1px solid white';
        closeMenu.style.color = 'black';
        closeMenu.style.backgroundColor = 'whitesmoke';
        closeMenu.addEventListener("mouseover", function () {
            closeMenu.style.backgroundColor = 'red';
            closeMenu.style.color = 'white';

        }); // hover on effect 
        closeMenu.addEventListener("mouseout", function () {
            closeMenu.style.backgroundColor = 'white';
            closeMenu.style.color = 'black';
            closeMenu.style.border = '1px solid black';
        }); // hover off effect

        buttons.forEach((button) => {
            button.style.border = '1px solid whitesmoke';
        });

        educationButtons.forEach((educationButton) => {
            educationButton.color = 'black';
        });
        tooltip.style.backgroundColor = 'blue';
    }  //Themes

}); // Theme Switch

///////////////////////////////////////////////////////////////////////////////////////////////


//Show Picture/////////////////////////////////////////////////////////////////////////////////////////////

let warning = document.getElementById('warning');
let warningContainer = document.getElementById('warningContainer')
let myPic = document.getElementById('myPicContainer');
let myPicBackground = document.getElementById('myPicBackground');
let selfie = document.getElementById('myPic');

myPic.style.display = 'none';
warningContainer.style.display = 'flex';

let showFace = document.querySelector('#showPicButton');
showFace.addEventListener("click", () => {
    warning.style.display = 'none';
    warningContainer.style.display = 'none';
    myPic.style.display = 'flex';
    selfie.style.boxShadow = '0 0 2rem yellow';
});

let hideIt = document.querySelector('#hideIt');
hideIt.addEventListener("click", () => {
    warning.style.display = 'block';
    warningContainer.style.display = 'block';
    myPic.style.display = 'none';
});

///////////////////////////////////////////////////////////////////////////////////////////////


//Menu Options/////////////////////////////////////////////////////////////////////////////////////////////

let aboutMe = document.getElementById('aboutMe');
let projects = document.getElementById('projectsContainer');
let aboutMeLink = document.getElementById('aboutMeLink');
let projectsLink = document.getElementById('projectsLink');
let imageContainer = document.getElementById('imageContainer');

aboutMeLink.addEventListener("click", () => {
    aboutMe.style.display = 'flex'; 
    projects.style.display = 'none';
    menu.style.visibility = 'hidden';
    menu.style.animation = 'none';
    imageContainer.style.display = 'flex';
});

projectsLink.addEventListener("click", () => {
    projects.style.display = 'flex';
    aboutMe.style.display = 'none';
    menu.style.visibility = 'hidden';
    menu.style.animation = 'none';
    imageContainer.style.display = 'none';
});

///////////////////////////////////////////////////////////////////////////////////////////////


//Section Switcher/////////////////////////////////////////////////////////////////////////////////////////////

let mission = document.getElementById('mission');
let education = document.getElementById('education');
let skills = document.getElementById('skills');
let categories = [mission, education, skills];
let categoryIndex = 0; 
let currentCategory = categories[categoryIndex];

categories.forEach((category) => {
    category.style.display = 'none';
    category.style.height = '14rem';
    category.style.margin = '0';
});

currentCategory.style.display = 'block'; // Show the first category

let previous = document.getElementById('previous');
let next = document.getElementById('next');

previous.addEventListener("click", () => {
    currentCategory.style.display = 'none'; // Hide the current category
    categoryIndex--;
        if (categoryIndex < 0) {
            categoryIndex = categories.length - 1; // Wrap around to the last category
        }
    currentCategory = categories[categoryIndex];
    currentCategory.style.display = 'block'; // Show the new current category
}); // Add event listener for the 'previous' button

next.addEventListener("click", () => {
    currentCategory.style.display = 'none'; // Hide the current category
    categoryIndex++;
        if (categoryIndex >= categories.length) {
            categoryIndex = 0; // Wrap around to the first category
        }
    currentCategory = categories[categoryIndex];
    currentCategory.style.display = 'block'; // Show the new current category
}); // Add event listener for the 'next' button

let educationInfo = document.getElementById('educationInfo');
let credits = document.getElementById('credits');
let creditsButton = document.getElementById('creditsButton');
let educationButton = document.getElementById('educationMainButton');

credits.style.display = 'none';
educationInfo.style.display = 'block';

creditsButton.addEventListener('click', function() {
    educationInfo.style.display = 'none';
    credits.style.display = 'block';
});

educationButton.addEventListener('click', function() {
    credits.style.display = 'none';
    educationInfo.style.display = 'block';
});

//////////////////////////////////////////////////////////////////////////////////////////////////


//Projects///////////////////////////////////////////////////////////////////////////////////////////////

let image = document.getElementById('thumb');
let projectLeft = document.getElementById('projectLeft');
let projectRight = document.getElementById('projectRight');
let projectTitle = document.getElementById('projectTitle');
let projectText = document.getElementById('projectText');
let thumbLink = document.getElementById('thumbLink');

let projectList = [
    {
        title: 'Quiz Game',
        image: 'https://i.ibb.co/FVg8JMV/Quiz.png',
        text: 'Built using HTML, CSS, and Javascript. This project helped me learn more about using eventListeners for answer verification. I plan to make this into a CRUD application in the future.',
        href: 'https://github.com/Jameshuff95/Quiz-Game/blob/main/index.html',  // new code here
        alt: 'Quiz Game'  // new code here
    },
    {
        title: 'Pong Game',
        image: 'https://i.ibb.co/9t4tG0f/Pong.png',
        text: 'Built with HMTL, CSS and Javascript. This project taught me how to utilize offset to contain the ball within the screen-area.',
        href: 'https://github.com/Jameshuff95/PONG',  // new code here
        alt: 'Pong Game'  // new code here
    },
    {
        title: 'Match Game',
        image: 'https://i.ibb.co/PtQypB4/Match-Game.png',
        text: 'Built with HTML, CSS and Javascript. This project taught me how to use verification of multiple selected elements to determine like elements.',
        href: 'https://github.com/Jameshuff95/Match-Game',  // new code here
        alt: 'Match Game'  // new code here
    },
    {
        title: 'Retro Snake',
        image: 'https://i.ibb.co/ZgGvCys/Snake.png',
        text: 'Built with Python using Pygame. It is designed to look more "retro" and add a sense of nastalgia for those who grew up playing snake on their phones! This was my first Pygame project and I learned how to better oraganize my code in the definitions - game loop format and making organized, multi-file applications.',
        href: 'https://github.com/Jameshuff95/retro_snake_game',  // new code here
        alt: 'Snake Game'  // new code here
    },
    {
        title: 'Tetris',
        image: 'https://i.ibb.co/xjTWzc4/Tetris.png',
        text: 'This is a simplified version of Tetris built with Pygame. This project helped me reinforce my understanding of Python and Pygame logic including efficient code organization. The player uses the up, down, left and right arrow keys to control the falling block.',
        href: 'https://github.com/Jameshuff95/simplified_tetris',  // new code here
        alt: 'Tetris Game'  // new code here
    },
    {
        title: 'America Unfiltered',
        image: 'https://i.ibb.co/fS7pC4s/America-Unfiltered.png',
        text: 'Built using HTML, CSS, Javascript. This project helped me practice using typography to control the flow of the content.',
        href: 'https://github.com/Jameshuff95/Political-Site', // new code here
        alt: 'Political Website' // new code here
    }
];

let projectIndex = 0;

image.src = projectList[projectIndex].image;
projectTitle.textContent = projectList[projectIndex].title;
projectText.textContent = projectList[projectIndex].text;
thumbLink.href = projectList[projectIndex].href;
thumbLink.alt = projectList[projectIndex].alt;

function changeImage() {

    projectLeft.addEventListener("click", () => {
          if (projectIndex >= 0) {
            projectIndex--;
            if(projectIndex < 0) {
                projectIndex = projectList.length - 1;
            }
            image.src = projectList[projectIndex].image;
            projectTitle.textContent = projectList[projectIndex].title;
            projectText.textContent = projectList[projectIndex].text;
            thumbLink.href = projectList[projectIndex].href;
            thumbLink.alt = projectList[projectIndex].alt;
            projectLeft.style.backgroundColor = 'dimgrey';
            projectLeft.style.transform = 'scale(.9)';
            projectLeft.style.color = 'whitesmoke';
            projectLeft.style.pointerEvents = 'none';
            setTimeout(() => {
                projectLeft.style.backgroundColor = 'whitesmoke';
                projectLeft.style.transform = 'scale(1)';
                projectLeft.style.color = 'black';
                projectLeft.style.pointerEvents = 'auto';
            }, 175);
          }
    });

    projectRight.addEventListener("click", () => {
        if (projectIndex < projectList.length) {
            projectIndex++;
            if(projectIndex && projectIndex >= projectList.length) {
                projectIndex = 0;
            }
            image.src = projectList[projectIndex].image;
            projectTitle.textContent = projectList[projectIndex].title;
            projectText.textContent = projectList[projectIndex].text;
            thumbLink.href = projectList[projectIndex].href;
            thumbLink.alt = projectList[projectIndex].alt;
            projectRight.style.backgroundColor = 'dimgrey';
            projectRight.style.transform = 'scale(.9)';
            projectRight.style.color = 'whitesmoke';
            projectRight.style.pointerEvents = 'none';
            setTimeout(() => {
                projectRight.style.backgroundColor = 'whitesmoke';
                projectRight.style.transform = 'scale(1)';
                projectRight.style.color = 'black';
                projectRight.style.pointerEvents = 'auto';
            }, 175);
          }
    });
};

changeImage();

//////////////////////////////////////////////////////////////////////////
