import { html, render } from "https://unpkg.com/lit-html?module";

const homeSectionEl = document.getElementById("home");

export function showHomePage(){
    render(homeTemplate(), homeSectionEl);
}

function homeTemplate() {
  return html`
      <div class="home-container">
        <div class="home-text">
          <h2>Welcome to my personal website</h2>
          <p>
            A quick project, made to show my skills and development as a future
            web developer
          </p>
        </div>
        <img
          src="./assets/animated_Dimi.PNG"
          style="
              width: 350px;
              height: auto;
              display: flex;
              margin-left: auto;
              margin-right: 100px;
            "
        />
      </div>
  `;
}
