// render the menu tab content
import "./menu.css";

export function renderMenu() {
    const menuContainer = document.createElement("div");
    const menuHeroStr = document.createElement("h1");
    menuHeroStr.textContent = "Our Menu For You";

    // append each created element to menuContainer
    menuContainer.appendChild(menuHeroStr);

    return menuContainer;
}