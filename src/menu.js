// render the menu tab content
import "./menu.css";

export function renderMenu() {
    const menuContainer = document.createElement("div");
    const menuHeroStr = document.createElement("h1");
    menuHeroStr.textContent = "Our Menu For You";
    menuHeroStr.classList.add("menu-hero-str");

    // append each created element to menuContainer
    menuContainer.classList.add("menu-container");
    menuContainer.appendChild(menuHeroStr);

    //  sub text for the menu hero str
    const menuSubStr = document.createElement("p");
    menuSubStr.textContent = "Fuel your day with colorful, nutrient-packed bowls — loaded with crisp greens, wholesome ingredients, and a bold, spicy kick that wakes up your taste buds.";
    menuSubStr.classList.add("menu-sub-str");

    // grid-container holding each menu item
    const grid = document.createElement("div");
    grid.classList.add("grid-container");

    // create each menu item, append them to grid
    for (let i = 0; i < 8; i++) {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        menuItem.textContent = `Menu Item ${i}`;
        grid.appendChild(menuItem);
    }


    console.log(items);
    
    // append the sub text to the menuContainer
    menuContainer.appendChild(menuSubStr);
    menuContainer.appendChild(grid);

    return menuContainer;
}