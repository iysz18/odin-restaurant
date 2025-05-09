import "normalize.css";
import "./styles.css";
import "./nav.css";

// importing modules to render each tab content
import { renderHome } from "./home.js";
import { renderMenu } from "./menu.js";
import { renderAbout } from "./about.js";

document.addEventListener("DOMContentLoaded", ()  => {
    // Main container holding the rendered tab content
    const contentContainer = document.querySelector(".content");

    // Render home as default tab
    contentContainer.appendChild(renderHome());

    const tabButtons = document.querySelectorAll("[data-tab]");
    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Reset the container, when new tab button has been clicked
            const tab = button.dataset.tab;
            // clear existing content
            contentContainer.innerHTML = "";

            // Call different functions based on the tab
            switch (tab) {
                case "home":
                    contentContainer.appendChild(renderHome());
                    break;
                case "menu":
                    contentContainer.appendChild(renderMenu());
                    break;
                case "about":
                    contentContainer.appendChild(renderAbout());
                    break;
            }
        });
    });
});
