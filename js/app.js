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
const navLi = document.querySelectorAll(".navbar__menu ul li");
const navLinks = document.querySelectorAll("a");
const sections = document.querySelectorAll("section");

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

createNavBar();

// scroll behavior

navLinks.forEach((a) => {
    a.addEventListener("click", (e) => {    
        e.preventDefault();
        sections.forEach((section) => {
             section.scrollIntoView({
                behavior: "smooth",                
            });
        });
    });
});



   
addEventListener("scroll", () => {
  let current = "";
  let searching = true;
  sections.forEach((section) => {
    const sectionPosition = section.getBoundingClientRect();
    const sectionHeight = section.clientHeight;

    if (65 < sectionPosition.bottom && searching) {
      searching = false;
      section.classList.add("your-active-class");
      navLi.forEach((li) => {
        if (section.dataset.nav === li.textContent) {
          li.classList.add("your-active-class");
        }
      });
    } else {
      section.classList.remove("your-active-class");
      navLi.forEach((li) => {
        if (section.dataset.nav === li.textContent) {
          li.classList.remove("your-active-class");
        }
      });
    }
  });
});


document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("The Form Has Been Submitted Successfully");
  });
  

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

