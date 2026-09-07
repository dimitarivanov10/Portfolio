import { html, render } from "https://unpkg.com/lit-html?module";

const projectsSectionEl = document.getElementById("projects");

export function showProjectsPage() {
  render(projectsTemplate(), projectsSectionEl);
}

function projectsTemplate() {
  return html`
    <h2>Projects</h2>
    <p style="white-space: nowrap">
      A short list of my (un)finished projects, on which I was/am working the last years:<br />
      You can follow my GitHub account for new projects and more:
      <a href="https://github.com/dimitarivanov10">@dimitarivanov10</a>
    </p>
      <div class="project-container">
        <div class="project-grid">
          <article class="project-card">
            <img class="project-media" src="./assets/MovieMagic_logo.jpg" alt="Movie Magic Workshop" />
            <div class="project-content">
              <h3>Movie Magic Workshop</h3>
              <p class="project-excerpt">A full-stack web application for movie enthusiasts to discover, review, and manage movies and casts. Built with modern JavaScript technologies following MVC architecture.</p>
              <ul class="tech-list">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB / Mongoose</li>
                <li>bcrypt / jsonwebtoken</li>
                <li>express-handlebars</li>
              </ul>
              <div class="project-links">
                <a href="https://github.com/dimitarivanov10/Softuni-Movie-Magic-Workshop" target="_blank">GitHub</a>
                <a href="#" class="disabled">Live Demo</a>
              </div>
            </div>
          </article>
          <article class="project-card">
            <img class="project-media" src="./assets/CBS_logo.jpg" alt="CBS Website" />
            <div class="project-content">
              <h3>CBS Website</h3>
              <p class="project-excerpt">Modern SPA for a small hardware company built with TypeScript, HTML and CSS. Clean corporate aesthetic, responsive and modular architecture.</p>
              <ul class="tech-list">
                <li>TypeScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Vite</li>
              </ul>
              <div class="project-links">
                <a href="https://github.com/dimitarivanov10/CBS-Website" target="_blank">GitHub</a>
                <a href="#" class="disabled">Live Demo</a>
              </div>
            </div>
          </article>
        </div>
      </div>
  `;
}
