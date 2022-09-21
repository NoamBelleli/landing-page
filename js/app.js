

//Define Global Variables to be used in rest of code
// array of sections to build navbar from

const navBarItems = [
    { id: "section1", text: "About Us" },
    { id: "section2", text: "Projects" },
    { id: "section3", text: "Gallery" },
    { href: "section4", text: "Subscribe" },
    
];

// variable to help with functions built later

const navBarList = document.getElementById("navbar__list");


//function to create the navBar

function createNavBar() {
    for (let i = 0; i < navBarItems.length; i++) {
        // cycle over navBarItems list and create li element and anchor
       //add href and text to each element
        const navBarItem = document.createElement("li");
        const navBarLink = document.createElement("a");
        navBarLink.setAttribute('href', "#" + navBarItems[i].id);
        navBarLink.innerText = navBarItems[i].text;        
        navBarItem.appendChild(navBarLink);
        navBarList.appendChild(navBarItem);
    }
};

createNavBar();

// variables to help with functions built later

const navLi = document.querySelectorAll(".navbar__menu ul li");
const navLinks = document.querySelectorAll("a");
const sections = document.querySelectorAll("section");

// scroll behavior

navLinks.forEach((a) => {
    a.addEventListener("click", () => {            
        sections.forEach((section) => {
             section.scrollIntoView({
                behavior: "smooth",                
            });
        });
    });
});


//adding an active class to section that is being scrolled to + matching navBar item 



addEventListener("scroll", () => {  
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

//form submited succesfully

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("The Form Has Been Submitted Successfully");
  });
  

