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


document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('footer').style.backgroundColor = 'purple';
});

document.addEventListener('DOMContentLoaded', function createAboutUs() {
    let ul = document.getElementById("navbar__list");
    let li = document.createElement("li");
    li.textContent = 'About Us';
    li.setAttribute("id", "#element_1");
    ul.appendChild(li);
});
  
//createAboutUs();

document.addEventListener('DOMContentLoaded', function createAboutUsLink() {
    let liAbout = document.getElementById("#element_1");
    let a = document.createElement("a");
    a.setAttribute("href", "#section1");
    a.textContent = "About Us";
    liAbout.appendChild(a);
});

//createAboutUsLink();

document.addEventListener('DOMContentLoaded',function createProjects() {
    let ul = document.getElementById("navbar__list");
    let li = document.createElement("li");
    // li.textContent = 'Projects';
    li.setAttribute("id", "#element_2");
    ul.appendChild(li);
});
  
//createProjects();

document.addEventListener('DOMContentLoaded',function createProjectsLink() {
    let liProjects = document.getElementById("#element_2");
    let a = document.createElement("a");
    a.setAttribute("href", "#section2");
    a.textContent = "Projects";
    liProjects.appendChild(a);
});

//createProjectsLink();

document.addEventListener('DOMContentLoaded',function createGallery() {
    let ul = document.getElementById("navbar__list");
    let li = document.createElement("li");
    // li.textContent = 'Projects';
    li.setAttribute("id", "#element_3");
    ul.appendChild(li);
});
  
//createGallery();

document.addEventListener('DOMContentLoaded',function createGalleryLink() {
    let liGallery = document.getElementById("#element_3");
    let a = document.createElement("a");
    a.setAttribute("href", "#section3");
    a.textContent = "Gallery";
    liGallery.appendChild(a);
});

//createGalleryLink();

document.addEventListener('DOMContentLoaded',function createSubscribe() {
    let ul = document.getElementById("navbar__list");
    let li = document.createElement("li");
    // li.textContent = 'Projects';
    li.setAttribute("id", "#element_4");
    ul.appendChild(li);
});
  
//createSubscribe();

document.addEventListener('DOMContentLoaded', function createSubscribeLink() {
    let liSubscribe = document.getElementById("#element_3");
    let a = document.createElement("a");
    a.setAttribute("href", "#section4");
    a.textContent = "Subscribe";
    liSubscribe.appendChild(a);
});

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


