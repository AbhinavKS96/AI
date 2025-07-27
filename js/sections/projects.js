export function renderProjects() {
  const projectsSection = document.getElementById('projects');
  projectsSection.innerHTML = `
    <h2>Projects</h2>
    <div class="projects-grid">
      <div class="project-card">
        <h3>Project One</h3>
        <p>Brief description of the project. <a href="#">View more</a></p>
      </div>
      <div class="project-card">
        <h3>Project Two</h3>
        <p>Brief description of the project. <a href="#">View more</a></p>
      </div>
    </div>
  `;
}
