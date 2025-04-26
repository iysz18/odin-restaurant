// module to render the menu

export function renderMenu() {
    // create elements for the menu
    const menuContainer = document.createElement("div");
    heroContainer.classList.add("menu-container");

        // hero-menu string
        const heroStr = document.createElement("h1");
        heroStr.textContent = "We present you our menu";
        heroStr.classList.add("hero-str");
    
        // hero-menu sub string
        const heroSubStr = document.createElement("p");
        heroSubStr.textContent = "Dive into a world of vibrant flavors with our handcrafted bowls—stacked with fresh greens, wholesome ingredients, and a kick of spice that brings every bite to life.";
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
        
        // hero img
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
}