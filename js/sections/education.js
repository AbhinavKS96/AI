export function renderEducation() {
  const educationSection = document.getElementById('education');
  educationSection.innerHTML = `
    <h2>Education</h2>
    <ul>
      <li>
        <strong>Master's Degree</strong> - University X (2019 - 2021)
      </li>
      <li>
        <strong>Bachelor's Degree</strong> - University Y (2015 - 2019)
      </li>
    </ul>
  `;
}
