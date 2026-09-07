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
            <img class="project-media" src="./assets/CBS_NEW_LOGO.jpg" alt="CBS Website" />
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
          <article class="project-card">
            <img class="project-media" src="./assets/quantum_circuit_sim_logo.jpg" alt="Quantum Engine v1.0" />
            <div class="project-content">
              <h3>Quantum Engine v1.0</h3>
              <p class="project-excerpt">Full-stack 2-qubit quantum circuit simulator with environmental noise models, fidelity analysis and Bloch sphere visualizations. Modular architecture separating computation from presentation.</p>
              <ul class="tech-list">
                <li>Python 3.10+</li>
                <li>FastAPI</li>
                <li>Qiskit</li>
                <li>NumPy</li>
                <li>Matplotlib</li>
                <li>Uvicorn</li>
              </ul>
              <div class="project-links">
                <a href="https://github.com/dimitarivanov10/Quantum-Circuit-Noise-Sim" target="_blank">GitHub</a>
                <a href="https://dimitarivanov10.github.io/Quantum-Circuit-Noise-Sim/" target="_blank">Live Demo</a>
              </div>
            </div>
          </article>
          <article class="project-card">
            <img class="project-media" src="./assets/ai_visual_attendance_recognizer.jpg" alt="AI Facial Attendance" />
            <div class="project-content">
              <h3>AI-Powered Facial Recognition Attendance</h3>
              <p class="project-excerpt">Real-time attendance tracking using FaceNet embeddings for high-confidence recognition and a React + Tailwind dashboard for live updates and management.</p>
              <ul class="tech-list">
                <li>React (TypeScript)</li>
                <li>Tailwind CSS</li>
                <li>FaceNet (Keras)</li>
                <li>FastAPI</li>
                <li>OpenCV</li>
                <li>NumPy</li>
              </ul>
              <div class="project-links">
                <a href="https://github.com/dimitarivanov10/Neural-Face-Analysis" target="_blank">GitHub</a>
                <a href="#" class="disabled">Live Demo</a>
              </div>
            </div>
          </article>
        </div>
      </div>
  `;
}
