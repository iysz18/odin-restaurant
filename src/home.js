import "normalize.css";
import "./home.css";


export function renderHome() {
    // create the necessary elements to render the home tab content
    const heroContainer = document.createElement("div");
    heroContainer.classList.add("hero-containre");

    // hero string
    const heroStr = document.createElement("h1");
    heroStr.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit.";
    heroStr.classList.add("hero-str");

    // hero sub string
    const heroSubStr = document.createElement("p");
    heroSubStr.textContent = "Cumque earum asperiores exercitationem quae. Perspiciatis, atque? Nihil natus aperiam soluta excepturi, exercitationem, voluptatibus similique quod ea, culpa atque nesciunt iure laudantium.";
    heroSubStr.classList.add("hero-sub-str");

    // hero github button
    const githubBtn = document.createElement("button");
    githubBtn.textContent = "Visit my GitHub!";
    githubBtn.classList.add("github-Btn");

    // hero menu button
    const heroMenuBtn = document.createElement("button");
    heroMenuBtn.textContent = "Show me the menu";
    heroMenuBtn.classList.add("hero-menu-btn");

    // create the span element containing "or"
    const spanElementOr = document.createElement("span");
    spanElementOr.textContent = "or";
    spanElementOr.classList.add("span-or");

    
    // hero image
    const heroImg = document.createElement("img");
    heroImg.src = foodImg;
    
    heroContainer.appendChild(heroStr);
    heroContainer.appendChild(heroSubStr);
    heroContainer.appendChild(githubBtn);
    heroContainer.appendChild(spanElementOr);
    heroContainer.appendChild(heroMenuBtn);

    return heroContainer;
}



