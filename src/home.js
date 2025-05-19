import "normalize.css";
import "./home.css";
import img from "./hero-food.png";

// Helper function
function createElementWithClass(tag, className, textContent) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    if (textContent) element.textContent = textContent;
    return element;
}

function createButtonSection() {
    const container = document.createElement("div");
    container.classList.add("button-container");
    const githubBtn = document.createElement("a");
    githubBtn.classList.add("github-btn");
    githubBtn.textContent = "Visit my GitHub";
    githubBtn.href = "https://github.com/iysz18 ";
    githubBtn.target = "_blank";
    githubBtn.rel = "noopener noreferrer";
    const spanElementOr = createElementWithClass("span", "span-or", "or");
    const heroMenuBtn = createElementWithClass("button", "hero-menu-btn", "Show me the menu");
    container.appendChild(githubBtn);
    container.appendChild(spanElementOr);
    container.appendChild(heroMenuBtn);
    return container;
}

function createHeroSection() {
    const leftContainer = document.createElement("div");
    leftContainer.classList.add("left-container");
    const title = createElementWithClass("h1", "hero-str", "Vibrant Bowl Creations Full of Greens, Goodness, and a Fiery Kick");
    const subtitle = createElementWithClass("p", "hero-sub-str", "Dive into a world of vibrant flavors with our handcrafted bowls—stacked with fresh greens, wholesome ingredients, and a kick of spice that brings every bite to life.");
    leftContainer.appendChild(title);
    leftContainer.appendChild(subtitle);
    leftContainer.appendChild(createButtonSection());
    return leftContainer;
}

function createImage({ src, alt = "", loading = "lazy", className = "" }) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.loading = loading;
    if (className) img.classList.add(className);
    return img;
}

export function renderHome() {
    // Main function to render/create elements for the hero container
    const heroContainer = document.createElement("div");
    heroContainer.classList.add("hero-container");

    const heroImg = createImage({
        src: img,
        alt: "A bowl of vibrant, spicy food",
        className: "hero-img",
    });

    heroContainer.appendChild(createHeroSection());
    heroContainer.appendChild(heroImg);

    return heroContainer;
}