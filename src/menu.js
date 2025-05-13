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
    
    // Improved way to create 8 elements in an array
    // const itemsArr = Array.from({ length: 8 }, () => {
    //     const menuItem = document.createElement("div");
    //     menuItem.classList.add("menu-item");
    //     grid.appendChild(menuItem);
        
    //     return menuItem;
    // });

    // Create and add text content to each menu item in the grid
    const menuItems = [
        { text: "Spice Kick Harvest Bowl" },
        { text: "A bold medley of roasted sweet potatoes, chili-lime chickpeas, charred corn, black beans, and quinoa, all drizzled with our signature smoky chipotle dressing. This bowl brings the heat and harmony in every bite." },

        { text: "Green Glow Buddha Bowl" },
        { text: "Packed with nutrient-rich kale, avocado, edamame, cucumber ribbons, and spirulina rice, this bowl is topped with a tangy ginger-miso glaze. Clean, green, and bursting with feel-good flavor." },

        { text: "Fire & Root Fusion" },
        { text: "Earthy roasted beets, crunchy radish slaw, and fiery gochujang tofu unite over jasmine rice, with a punchy sesame-lime vinaigrette. A grounding yet spicy experience that energizes your senses." },

        { text: "Green Glow Buddha Bowl" },
        { text: "Packed with nutrient-rich kale, avocado, edamame, cucumber ribbons, and spirulina rice, this bowl is topped with a tangy ginger-miso glaze. Clean, green, and bursting with feel-good flavor." }
    ];

    // set name and desc of each menu item
    menuItems.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.textContent = item.text;
        menuItem.classList.add("menu-item");
        grid.appendChild(menuItem);
    });

    // append the sub text to the menuContainer
    menuContainer.appendChild(menuSubStr);
    menuContainer.appendChild(grid);

    return menuContainer;
}