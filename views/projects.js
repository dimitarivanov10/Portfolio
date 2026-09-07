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
    <div class="gif-container">
      <img src="./assets/under_construction.gif" alt="Under Construction" />
    </div>
  `;
}
