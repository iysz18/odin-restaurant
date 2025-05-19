import "normalize.css";
import "./home.css";
import img from  "./hero-food.png";

// Collection of helper functions
function createElementWithClass(tag, className, textContent) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    if (textContent) element.textContent = textContent;
    return element;
}

function createHeroSection() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("left-container");

    const title = createElementWithClass("h1", "hero-str", "Vibrant Bowl Creations Full of Greens, Goodness, and a Fiery Kick");
    const subtitle = createElementWithClass("h1", "hero-sub-str", "Dive into a world of vibrant flavors with our handcrafted bowls—stacked with fresh greens, wholesome ingredients, and a kick of spice that brings every bite to life.");
    
    wrapper.appendChild(title);
    wrapper.appendChild(subtitle);
    wrapper.appendChild(createButtonSection());

    return wrapper;
}

function createButtonSection() {
    const container = document.createElement("div");
    container.classList.add("button-container");

    const githubBtn = createElementWithClass("button", "github-btn", "Visit my GitHub");
    const spanElementOr = createElementWithClass("span", "span-or", "or");
    const heroMenuBtn = createElementWithClass("button", "hero-menu-btn", "Show me the menu");

    container.appendChild(githubBtn);
    container.appendChild(spanElementOr);
    container.appendChild(heroMenuBtn);

    return container;
}

export function renderHome() {  
    const container = document.createElement("div");
    container.classList.add("hero-container");
    container.appendChild(createHeroSection());
    
    const heroImg = document.createElement("img");
    heroImg.src = img;
    container.appendChild(heroImg);

    return container;
};