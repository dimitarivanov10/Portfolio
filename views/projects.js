import { html, render } from "https://unpkg.com/lit-html?module";

const projectsSectionEl = document.getElementById("projects");

export function showProjectsPage() {
  render(projectsTemplate(), projectsSectionEl);
}

function projectsTemplate() {
  return html`
    <h2>Projects</h2>
    <p style="white-space: nowrap">
      This seems to be my only publicly published project, but don't worry, I'm
      working on a few others..<br />
      You can follow my GitHub account for new projects and more:
      <a href="https://github.com/dimitarivanov10">@dimitarivanov10</a>
    </p>
    <div class="gif-container">
      <img src="./assets/under_construction.gif" alt="Under Construction" />
    </div>
  `;
}
