import "./styles.css";
import img from "./heroImg.jpg";
import { greeting } from "../src/greeting.js";

const content = document.querySelector(".content");
const foodImg = document.createElement("img");
foodImg.src = img;

content.appendChild(foodImg);

console.log(greeting);