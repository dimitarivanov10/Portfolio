import { html, render } from "https://unpkg.com/lit-html?module";
import { showAboutPage } from "./views/about.js";
import { showEducationPage } from "./views/education.js";
import { showHomePage } from "./views/home.js";
import { showProjectsPage } from "./views/projects.js";
import {showContactPage} from "./views/contact.js";

showAboutPage();
showEducationPage();
showHomePage();
showProjectsPage();
showContactPage();

function revealOnScroll(){
    document.querySelectorAll("section").forEach(section => {
        const rect = section.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100){
            section.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("DOMContentLoaded", revealOnScroll);

