import "normalize.css";
import "./home.css";
import img from  "./hero-food.png";

export function renderHome() {
    // create the necessary elements to render the home tab content
    const heroContainer = document.createElement("div");
    heroContainer.classList.add("hero-container");

    // hero string
    const heroStr = createElementWithClass("h1", "hero-str", "Vibrant Bowl Creations Full of Greens, Goodness, and a Fiery Kick");

    // hero sub string
    const heroSubStr = createElementWithClass("h1", "hero-sub-str", "Dive into a world of vibrant flavors with our handcrafted bowls—stacked with fresh greens, wholesome ingredients, and a kick of spice that brings every bite to life.");

    // hero github button
    const githubBtn = createElementWithClass("button", "github-btn", "Visit my GitHub");

    // hero menu button
    const heroMenuBtn = createElementWithClass("button", "hero-menu=btn", "Show me the menu");

    // create the span element containing "or"
    const spanElementOr = createElementWithClass("span", "span-or", "or");
    
    // hero img
    const heroImg = document.createElement("img");
    heroImg.src = img;

    // Helper funciton to reduce repetition
    function createElementWithClass(tag, className, textContent) {
        const element = document.createElement(tag);
        if (className) element.classList.add(className);
        if (textContent) element.textContent = textContent;
        return element;
    }

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