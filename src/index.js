import "normalize.css"
import "./styles.css";
import "./nav.css";

// importing modules to render each tab content
import { renderHome } from "./home.js";

// reference elements for tab browsing
const contentContainer = document.querySelector(".content");
const homeBtn = document.querySelector("#home-btn");

// in later development, each button in the navbar will be
// stored in a nodeList, for now to test this code, only home
// button will have the eventlistener to render the home tab content
homeBtn.addEventListener("click", () => {
    // before proceeding to render the content, check if contentContainer is empty
    if (contentContainer.innerHTML !== "") {
        contentContainer.innerHTML = "";
    }

    // render the home tab content
    contentContainer.appendChild(renderHome());
});