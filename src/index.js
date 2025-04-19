import "./styles.css";
import img from "./heroImg.jpg";
import { greeting } from "../src/greeting.js";

// references to elements
const content = document.querySelector(".content");

// creating elements for the home tab
// the heroImage containing the image
const foodImg = document.createElement("img");
foodImg.src = img;

// appending each created element to the contant container
content.appendChild(foodImg);

console.log(greeting);