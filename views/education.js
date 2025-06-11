import { html, render } from "https://unpkg.com/lit-html?module";

const educationSectionEl = document.getElementById("education");

export function showEducationPage() {
  render(educationTemplate(), educationSectionEl);
}

function educationTemplate() {
  return html`
      <h2>Education</h2>
      <div class="timeline-horizontal">
        <div class="milestone">
          <div class="marker"></div>
          <p class="year">2018</p>
          <p class="desc">
            Graduated Secondary School<br />SU "Sv.Sofroniy Vrachanski"
            <br />Plovdiv
          </p>
        </div>
        <div class="milestone">
          <div class="marker"></div>
          <p class="year">2022</p>
          <p class="desc">Started Softuni<br />with JS-Basics</p>
        </div>

        <div class="milestone">
          <div class="marker"></div>
          <p class="year">2023</p>
          <p class="desc">Issued German Certificate (C1)<br />DSD II</p>
        </div>
        <div class="milestone">
          <div class="marker"></div>
          <p class="year">2024 (Jun)</p>
          <p class="desc">
            Graduated Highschool<br />"Ivan Vazov" Highschool <br />
            Plovdiv
          </p>
        </div>
        <div class="milestone">
          <div class="marker"></div>
          <p class="year">2024 (Sept)</p>
          <p class="desc">
            Started studying Computer Science <br />
            at FDIBA to TU-Sofia
          </p>
        </div>
      </div>
      <p style="white-space: nowrap;">
        For more info about my certificates or work expierence, You can check my
        LinkedIn profile:
        <a href="https://www.linkedin.com/in/dimitar-ivanov-82b312229/"
          >Dimitar Ivanov</a
        >
      </p>
      <p style="white-space: nowrap">
        For more info about the tech stack, that I'm using, or I have used in my
        university you can always check my CV:
        <a href="./assets/CV_DI_PR.pdf" download>Download now</a>
      </p>
  `;
}
