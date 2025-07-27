export function renderExperience() {
  const experienceSection = document.getElementById('experience');
  experienceSection.innerHTML = `
    <h2>Experience</h2>
    <ul class="timeline">
      <li>
        <strong>Company A</strong> - Software Engineer (2022 - Present)<br>
        <span>Worked on web applications and cloud solutions.</span>
      </li>
      <li>
        <strong>Company B</strong> - Intern (2021 - 2022)<br>
        <span>Assisted in developing internal tools.</span>
      </li>
    </ul>
  `;
}
