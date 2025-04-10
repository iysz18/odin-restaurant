import "../css/styles.css";
import pizzaImage from "../assets/pizza.jpg";

const renderImg = document.createElement("button");
renderImg.addEventListener("click", () => {
    const image = document.createElement('img');
    image.src = pizzaImage;
    
    document.body.appendChild(image);
});

document.body.appendChild(renderImg);