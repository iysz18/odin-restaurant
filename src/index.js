import "normalize.css";
import "./styles.css";
import "./nav.css";

// importing modules to render each tab content
import { renderHome } from "./home.js";
import { renderMenu } from "./menu.js";
import { renderAbout } from "./about.js";

document.addEventListener("DOMContentLoaded", ()  => {
    // function handling reset of the contentContainer
    const resetContainer = () => {
        if (contentContainer.innerHTML != '') contentContainer.innerHTML = "";
    }
    
    // reference elements for tab browsing
    const contentContainer = document.querySelector(".content");
    const homeBtn = document.querySelector("#home-btn");
    const menuBtn = document.querySelector("#menu-btn");
    const aboutBtn = document.querySelector("#about-btn");

    // set home as default tab content thats loaded up as default at page load
    contentContainer.appendChild(renderHome());
        
    // in later development, each button in the navbar will be
    // stored in a nodeList, for now to test this code, only home
    // button will have the eventlistener to render the home tab content
    homeBtn.addEventListener("click", () => {
        // before proceeding to render the content, check if contentContainer is empty
        // if (contentContainer.innerHTML !== "") {
        //     contentContainer.innerHTML = "";
        // }

        // reset the contentContainer with resetContainer() 
        resetContainer();

        // render the home tab content
        contentContainer.appendChild(renderHome());
    });

    // rendering the menu
    menuBtn.addEventListener("click", () => {
        resetContainer();
        // after resseting the contentContainer, render the menu
        contentContainer.appendChild(renderMenu());
    });

    aboutBtn.addEventListener("click", () => {
        resetContainer();
        // after resseting the contentContainer, render the menu
        contentContainer.appendChild(renderAbout());
    });

});
