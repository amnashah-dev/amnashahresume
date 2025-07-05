// script.js

document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to Amna Shah's Portfolio Website!");

    // Example: Add a simple animation to section titles
    const sections = document.querySelectorAll(".section h2");
    sections.forEach((title, index) => {
title.style.opacity = 0;
title.style.transition = "opacity 1s ease-in-out";
setTimeout(() => {
        title.style.opacity = 1;
      }, index * 300);
    });
});