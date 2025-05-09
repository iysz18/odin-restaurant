// module to render the about page
import "normalize.css";
import "./about.css";

// export of the renderAbout function
export function renderAbout() {
    // Create containers for textblocks
    function createElements(count, builderFn) {
        return Array.from({ length: count }, builderFn);
      }
      
      // Usage
      const containerArr = createElements(6, () => {
        const el = document.createElement("div");
        el.classList.add("content-container");
        return el;
      });
    
    // create the container which contains each element for
    // the representation of the about tab content 
    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");

    // creating each element needed to reprensent the restaurant about
    /* hero */
    const aboutHero = document.createElement("h1");
    aboutHero.textContent = "Who Are We?";
    aboutHero.classList.add("about-hero");

    /* restaurant introduction / misison statement */
    const restaurantIntroduction = document.createElement("h2");
    const restaurantIntroductionSub = document.createElement("p");
    restaurantIntroduction.textContent = "Restaurant Introduction / Mission Statement";
    restaurantIntroductionSub.textContent = "Welcome to Vibrant Bowl — where every dish is a celebration of greens, goodness, and bold flavors. We craft every bowl with purpose, packing them with fresh ingredients, dynamic textures, and that unmistakable fiery kick that fuels your day and satisfies your soul."
    containerArr[0].appendChild(restaurantIntroduction);
    containerArr[0].appendChild(restaurantIntroductionSub);

    /* our story / history */
    const history = document.createElement("h2");
    const historySub = document.createElement("p");
    history.textContent = "Our Story / History";
    historySub.textContent = "Vibrant Bowl was born from a simple idea: fast food can be fresh, nourishing, and exciting. Tired of the bland and boring, our founders set out to create a place where vibrant flavors meet mindful eating. What started as a passion project in a tiny test kitchen has grown into a bold movement — redefining how bowls should taste.";
    containerArr[1].appendChild(history);
    containerArr[1].appendChild(historySub);

    /* the chef / team */
    const team = document.createElement("h2");
    const teamSub = document.createElement("p");
    team.textContent = "The Chef / Team";
    teamSub.textContent = "Led by Chef Maya Reyes, our kitchen is powered by a team obsessed with flavor, nutrition, and a bit of spice. From slow-roasting our chili-lime chickpeas to hand-whisking our ginger-miso glaze, everything is made with intention. We’re not just cooks — we’re bowl-builders, bringing energy and care to every layer.";
    containerArr[2].appendChild(team);
    containerArr[2].appendChild(teamSub);

    /* our philosophy / ingredients /sourcing */
    const philosophy = document.createElement("h2");
    const philosophySub = document.createElement("p");
    philosophy.textContent = "Our Philosophy / Ingredients / Sourcing";
    philosophySub.textContent = "We believe good food starts with good ingredients. That’s why we partner with local farms for our greens, source organic staples whenever possible, and prepare everything in-house daily. No shortcuts. No artificial anything. Just real food that hits hard and feels good.";
    containerArr[3].appendChild(philosophy);
    containerArr[3].appendChild(philosophySub);

    /* ambience / experience */
    const ambience = document.createElement("h2");
    const ambienceSub = document.createElement("p");
    ambience.textContent = "Ambience / Experience";
    ambienceSub.textContent = "Step into Vibrant Bowl and you’ll feel the energy — bright, modern, and full of life. Whether you’re grabbing lunch on the go or chilling with friends, our space is designed to refresh your body and uplift your vibe. It’s more than a meal — it’s a mood.";
    containerArr[4].appendChild(ambience);
    containerArr[4].appendChild(ambienceSub);

    /* Closing Lien / Call to Action */
    const cta = document.createElement("h2");
    const ctaSub = document.createElement("p");
    cta.textContent = "Come and enjoy";
    ctaSub.textContent = "Ready to bowl over your senses? Come in, build your perfect bowl, and taste what happens when fresh meets fire. Follow us on Instagram @VibrantBowl and tag us with your creations — we’re all about that flavor-forward lifestyle.";
    containerArr[5].appendChild(cta);
    containerArr[5].appendChild(ctaSub);
        
    // append each element to the about container
    aboutContainer.appendChild(aboutHero);

    // for loop to append each container from containerArr
    for (let i = 0; i < containerArr.length; i++) {
        if (containerArr[i]) {
            aboutContainer.appendChild(containerArr[i]);
        }
    }

    return aboutContainer;
}