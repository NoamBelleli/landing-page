/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
function createAboutUs() {
    let ul = document.getElementById("navbar_list");
    let li = document.createElement("li");
    // li.textContent = 'About Us';
    li.setAttribute("id", "#element_1");
    ul.appendChild(li);
};
  
createAboutUs();

function createAboutUsLink() {
    let liAbout = document.getElementById("#element_1");
    let a = document.createElement("a");
    a.setAttribute("href", "#Section 1");
    a.textContent = "About Us";
    liAbout.appendChild(a);
};

createAboutUsLink();

function createProjects() {
    let ul = document.getElementById("navbar__list");
    let li = document.createElement("li");
    // li.textContent = 'Projects';
    li.setAttribute("id", "#element_2");
    ul.appendChild(li);
};
  
createProjects();

function createProjectsLink() {
    let liProjects = document.getElementById("#element_2");
    let a = document.createElement("a");
    a.setAttribute("href", "#Section 2");
    a.textContent = "Projects";
    liProjects.appendChild(a);
};

createProjectsLink();

function createGallery() {
    let ul = document.getElementById("navbar__list");
    let li = document.createElement("li");
    // li.textContent = 'Projects';
    li.setAttribute("id", "#element_3");
    ul.appendChild(li);
};
  
createGallery();

function createGalleryLink() {
    let liGallery = document.getElementById("#element_3");
    let a = document.createElement("a");
    a.setAttribute("href", "#Section 3");
    a.textContent = "Projects";
    liGallery.appendChild(a);
};

createGalleryLink();

function createSubscribe() {
    let ul = document.getElementById("navbar__list");
    let li = document.createElement("li");
    // li.textContent = 'Projects';
    li.setAttribute("id", "#element_4");
    ul.appendChild(li);
};
  
createSubscribe();

function createSubscribeLink() {
    let liSubscribe = document.getElementById("#element_3");
    let a = document.createElement("a");
    a.setAttribute("href", "#Section 3");
    a.textContent = "Projects";
    liSubscribe.appendChild(a);
};

createSubscribeLink();



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


