

//Variables to use in navBar function
//creating an array of sections to build the dynamic navigation bar


const navBarList = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

//function to go over each sections data and use it to build a navigation bar

function createNavBar() {
  for (let i = 0; i < sections.length; i++){
    const navBarItem = document.createElement("li");
    const navBarLink = document.createElement("a");    
    navBarLink.setAttribute('href', "#" +sections[i].getAttribute("id"));
    navBarLink.innerText = sections[i].getAttribute("data-nav");
    navBarItem.appendChild(navBarLink);
    navBarList.appendChild(navBarItem);
  }
}

createNavBar();
  
// variables to help with functions built later

const navLi = document.querySelectorAll(".navbar__menu ul li");
const navLinks = document.querySelectorAll("a");

// scroll behavior

navLinks.forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    sections.forEach((section) => {
      if (section.dataset.nav === a.textContent) {
        section.scrollIntoView({
          behavior: "smooth",
        });
      }
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
  

