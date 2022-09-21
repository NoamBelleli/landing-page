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


const navBarItems = [
    { href: "#section1", text: "About Us" },
    { href: "#section2", text: "Projects" },
    { href: "#section3", text: "Gallery" },
    { href: "#section4", text: "Subscribe" },
    
];

const navBarList = document.getElementById("navbar__list");

function createNavBar() {
    for (let i = 0; i < navBarItems.length; i++) {
        // cycle over navBarItems list and create li element and anchor
       //add href and text to each element
        const navBarItem = document.createElement("li");
        const navBarLink = document.createElement("a");
        navBarLink.setAttribute('href', navBarItems[i].href);
        navBarLink.innerText = navBarItems[i].text;
        navBarItem.appendChild(navBarLink);
        navBarList.appendChild(navBarItem);
    }
};

createNavBar()
/*




  

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

