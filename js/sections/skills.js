export function renderSkills() {
  const skillsSection = document.getElementById('skills');
  skillsSection.innerHTML = `
    <h2>Skills</h2>
    <ul class="skills-list">
      <li>JavaScript</li>
      <li>HTML & CSS</li>
      <li>React</li>
      <li>Python</li>
      <li>SQL</li>
    </ul>
  `;
}
