import { html, render } from "https://unpkg.com/lit-html?module";

const aboutSectionEl = document.getElementById("about");

export function showAboutPage() {
  render(aboutTemplate(), aboutSectionEl);
}

function aboutTemplate() {
  return html`
      <div class="about-container">
        <h2>About Me</h2>
        <pre><code>
      let myObj = {
        name: "Dimitar Dimitrov Ivanov",
        age: 20,
        education: "Student at the German Faculty of Engineering at TU Sofia",
        hobbies: ["Coding", "Music", "Trading", "Football", "Movies", "Books", "Personal Development", "Space"],
        qualities: ["Creativity", "Ambitousness", "Dedication", "Analytical thinking", "Teamwork", "Loyalty"]
      };
        </code></pre>
        <video width="1350" height="500" controls style="margin-top: 2rem">
          <source src="./assets/tvDimi.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p class="video-desc">
          This short video dates from 07.06.2015 and it's a sweet memory of the
          participation of the folklore group "Detelina" in the television show
          "Outplay Me", in which I give a short interview.
        </p>
      </div>
  `;
}
