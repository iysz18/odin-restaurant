// module to render the about page
import "normalize.css";
import "./about.css";

// export of the renderAbout function
export function renderAbout() {
    // create sub containers to 
    let containerArr = [];
    for (let i = 0; i < 6; i++) {
        const container = document.createElement("div");
        container.classList.add("content-container");
        containerArr.push(container);
    }

    

    // create the container which contains each element for
    // the representation of the about tab content 
    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");

    // creating each element needed to reprensent the restaurant about
    /* hero */
    const aboutHero = document.createElement("h1");
    aboutHero.textContent = "Who Are We?";
    aboutHero.classList.add("about-hero");

    /* restaurant introduction / misison statement */
    const restaurantIntroduction = document.createElement("h2");
    const restaurantIntroductionSub = document.createElement("p");
    

    
    // append each element to the about container
    aboutContainer.appendChild(aboutHero);

    return aboutContainer;
}