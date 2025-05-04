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

    let itemsArr = [];

    // create each menu item, append them to grid
    for (let i = 0; i < 8; i++) {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        // add menu item to imtesArr
        itemsArr.push(menuItem);
        grid.appendChild(menuItem);
    }

    // add to each card next its sibling grid element the name of the menu item
    itemsArr[0].textContent = "Spice Kick Harvest Bowl";
    itemsArr[0].classList.add("menu-item-name");
    itemsArr[1].textContent = "A bold medley of roasted sweet potatoes, chili-lime chickpeas, charred corn, black beans, and quinoa, all drizzled with our signature smoky chipotle dressing. This bowl brings the heat and harmony in every bite.";
    itemsArr[1].classList.add("menu-item-desc");

    itemsArr[2].textContent = "Green Glow Buddha Bowl";
    itemsArr[2].classList.add("menu-item-name");
    itemsArr[3].textContent = "Packed with nutrient-rich kale, avocado, edamame, cucumber ribbons, and spirulina rice, this bowl is topped with a tangy ginger-miso glaze. Clean, green, and bursting with feel-good flavor.";
    itemsArr[3].classList.add("menu-item-desc");

    itemsArr[4].textContent = "Fire & Root Fusion";
    itemsArr[4].classList.add("menu-item-name");
    itemsArr[5].textContent = "Earthy roasted beets, crunchy radish slaw, and fiery gochujang tofu unite over jasmine rice, with a punchy sesame-lime vinaigrette. A grounding yet spicy experience that energizes your senses.";
    itemsArr[5].classList.add("menu-item-desc");

    itemsArr[6].textContent = "Green Glow Buddha Bowl";
    itemsArr[6].classList.add("menu-item-name");
    itemsArr[7].textContent = "Packed with nutrient-rich kale, avocado, edamame, cucumber ribbons, and spirulina rice, this bowl is topped with a tangy ginger-miso glaze. Clean, green, and bursting with feel-good flavor.";
    itemsArr[7].classList.add("menu-item-desc");

    // append the sub text to the menuContainer
    menuContainer.appendChild(menuSubStr);
    menuContainer.appendChild(grid);

    return menuContainer;
}