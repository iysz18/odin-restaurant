import "normalize.css";
import "./home.css";
import img from  "./hero-food.png";


export function renderHome() {
    // Helper funciton to reduce redundance
    function createElementWithClass(tag, className, textContent) {
        const element = document.createElement(tag);
        if (className) element.classList.add(className);
        if (textContent) element.textContent = textContent;
        return element;
    }

    // create the necessary elements to render the home tab content
    const heroContainer = document.createElement("div");
    heroContainer.classList.add("hero-container");

    // Create each needd element
    const heroStr = createElementWithClass("h1", "hero-str", "Vibrant Bowl Creations Full of Greens, Goodness, and a Fiery Kick");

    const heroSubStr = createElementWithClass("h1", "hero-sub-str", "Dive into a world of vibrant flavors with our handcrafted bowls—stacked with fresh greens, wholesome ingredients, and a kick of spice that brings every bite to life.");
    const githubBtn = createElementWithClass("button", "github-btn", "Visit my GitHub");
    const heroMenuBtn = createElementWithClass("button", "hero-menu-btn", "Show me the menu");
    const spanElementOr = createElementWithClass("span", "span-or", "or");
    const heroImg = document.createElement("img");
    heroImg.src = img;

    // I couldn't fix this with css so this container will fix it instead
    // why? because the cta buttons in hero-container > left-container arent alined to the left
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    buttonContainer.appendChild(githubBtn);
    buttonContainer.appendChild(spanElementOr);
    buttonContainer.appendChild(heroMenuBtn);
    
    // wrapper holding the left side (anything but the img)
    const leftWrapper = document.createElement("div");
    leftWrapper.classList.add("left-container");
    leftWrapper.appendChild(heroStr);
    leftWrapper.appendChild(heroSubStr);
    leftWrapper.appendChild(buttonContainer);
        
    // append each createc child node to the heroContainer
    heroContainer.appendChild(leftWrapper);
    heroContainer.appendChild(heroImg);

    return heroContainer;
};