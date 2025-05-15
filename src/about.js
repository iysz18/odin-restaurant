// module to render the about page
import "normalize.css";
import "./about.css";

// export of the renderAbout function
export function renderAbout() {
    // data structure for each para and header string
    const aboutSections = [
        {
            heading: "Restaurant Introduction / Mission Statement",
            paragraph: "Welcome to Vibrant Bowl — where every dish is a celebration of greens, goodness, and bold flavors. We craft every bowl with purpose, packing them with fresh ingredients, dynamic textures, and that unmistakable fiery kick that fuels your day and satisfies your soul. Our mission is to prove that healthy food doesn't have to be boring — it can be fast, flavorful, and full of heart."
        },
        {
            heading: "Our Story / History",
            paragraph: "Vibrant Bowl was born from a simple idea: fast food can be fresh, nourishing, and exciting. Tired of the bland and boring, our founders set out to create a place where vibrant flavors meet mindful eating. What started as a passion project in a tiny test kitchen has grown into a bold movement — redefining how bowls should taste. Today, we’re proud to serve a community that values health, taste, and authenticity."
        },
        {
            heading: "The Chef / Team",
            paragraph: "Led by Chef Maya Reyes, our kitchen is powered by a team obsessed with flavor, nutrition, and a bit of spice. From slow-roasting our chili-lime chickpeas to hand-whisking our ginger-miso glaze, everything is made with intention. We’re not just cooks — we’re bowl-builders, bringing energy and care to every layer. Each team member shares our passion for culinary creativity and a deep respect for the ingredients we use."
        },
        {
            heading: "Our Philosophy / Ingredients / Sourcing",
            paragraph: "We believe good food starts with good ingredients. That’s why we partner with local farms for our greens, source organic staples whenever possible, and prepare everything in-house daily. No shortcuts. No artificial anything. Just real food that hits hard and feels good. Our sourcing practices reflect our commitment to sustainability, supporting ethical agriculture and reducing our environmental impact."
        },
        {
            heading: "Ambience / Experience",
            paragraph: "Step into Vibrant Bowl and you’ll feel the energy — bright, modern, and full of life. Whether you’re grabbing lunch on the go or chilling with friends, our space is designed to refresh your body and uplift your vibe. It’s more than a meal — it’s a mood. With curated playlists, natural textures, and colorful design, we create an experience that nourishes not just your body, but your whole being."
        },
        {
            heading: "Come and enjoy",
            paragraph: "Ready to bowl over your senses? Come in, build your perfect bowl, and taste what happens when fresh meets fire. Follow us on Instagram @VibrantBowl and tag us with your creations — we’re all about that flavor-forward lifestyle. Whether you're a first-timer or a regular, we can't wait to welcome you to the Vibrant Bowl family."
        }
    ];

    // Create the grid which contains each textblock
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-container");

    // Implementing a helpfer funtion to dont DRY!
    function createSection(heading, para) {
        const section = document.createElement("div");
        
        const h2 = document.createElement("h2");
        h2.textContent = heading;

        const p = document.createElement("p");
        p.textContent = para;

        section.appendChild(h2);
        section.appendChild(p);
        section.classList.add("grid-item");

        return section;
    }

    // aboutContainer contains each div block with h2 and p's
    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");

    const aboutHero = document.createElement("h1");
    aboutHero.textContent = "Who are We?";
    aboutHero.classList.add("about-hero");
    aboutContainer.appendChild(aboutHero);

    // Iterate through each aboutSection's content, create for each
    // new div containing h2 and p's
    aboutSections.forEach(section => {
        const content = createSection(section.heading, section.paragraph);
        gridContainer.appendChild(content);
    });

    // Last: append the grid-container to the aboutContainer
    aboutContainer.appendChild(gridContainer);

    return aboutContainer;
}