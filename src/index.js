import greeting from './quickDo';
import "./main.css";

const content = document.querySelector(".content");

content.innerHTML = greeting();

console.log("Hi");

