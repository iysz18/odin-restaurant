// render the menu tab content
import "./menu.css";

export function renderMenu() {
    // menu container with each menu item listed
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    // Grid container to hold each menu item in place
    const menuGrid = document.createElement("div");
    menuGrid.classList.add("menu-grid-container");
    
    // Hero container, string and substring
    const heroContainer = document.createElement("div");
    heroContainer.classList.add("menu-hero-container");
    
    const heroString = document.createElement("h1");
    heroString.textContent = "Wholesome Bowls, Bold Flavors";
    heroString.classList.add("menu-hero-string");

    const heroSub = document.createElement("p");
    heroSub.textContent = "Crafted with vibrant veggies, grains, and global spices";
    heroSub.classList.add("menu-hero-sub-string");

    heroContainer.appendChild(heroString);
    heroContainer.appendChild(heroSub);

    menuContainer.appendChild(heroContainer);
    
    // Arra containing key-value pairs of each item on the menu
    const menuItems = [
        {
            text: "Spice Kick Harvest Bowl",
            desc: "A bold medley of roasted sweet potatoes, chili-lime chickpeas, charred corn, black beans, and quinoa, drizzled with smoky chipotle dressing."
        },
        {
            text: "Green Glow Buddha Bowl",
            desc: "Kale, avocado, edamame, cucumber ribbons, and spirulina rice topped with tangy ginger-miso glaze."
        },
        {
            text: "Fire & Root Fusion",
            desc: "Roasted beets, radish slaw, and gochujang tofu over jasmine rice with sesame-lime vinaigrette."
        },
        {
            text: "Crispy Chickpea Crunch",
            desc: "Crunchy chickpeas, baby greens, cherry tomatoes, and tahini-lemon drizzle over farro."
        },
        {
            text: "Tropical Quinoa Delight",
            desc: "Grilled pineapple, coconut flakes, black rice, and chili mango vinaigrette for a sweet-spicy bite."
        },
        {
            text: "Mediterranean Power Bowl",
            desc: "Hummus, olives, feta, roasted veggies, and zesty lemon-garlic dressing over couscous."
        }
    ];

    // Create for each menu item a div containing text/desc
    menuItems.forEach(item => {
        const nameDiv = document.createElement("div");
        nameDiv.textContent = item.text;
        nameDiv.classList.add("menu-item-name");

        const descDiv = document.createElement("div");
        descDiv.textContent = item.desc;
        descDiv.classList.add("menu-item-desc");

        menuGrid.appendChild(nameDiv);
        menuGrid.appendChild(descDiv);
    });

    menuContainer.appendChild(menuGrid);

    return menuContainer;
}