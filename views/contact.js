import { html, render } from "https://unpkg.com/lit-html?module";

const contactSectionEl = document.getElementById("contact");

export function showContactPage() {
  render(contactTemplate(), contactSectionEl);
}

function contactTemplate() {
  return html`
      <h2>Contact Me</h2>
      <p>You can always contact me via:</p>
      <ul class="glow-list">
        <li>
          LinkedIn:
          <a href="https://www.linkedin.com/in/dimitar-ivanov-82b312229/"
            >Dimitar Ivanov</a
          >
        </li>
        <li>
          Email:
          <a href="mailto:dimitar.ivanov.business@gmail.com"
            >dimitar.ivanov.business@gmail.com</a
          >
        </li>
        <li>
          Facebook:
          <a href="https://www.facebook.com/dimi.tucha/">Димитър Иванов</a>
        </li>
        <li>
          Discord: <a href="https://discordapp.com/users/_gh0styy">_gh0Styy</a>
        </li>
      </ul>
  `;
}
