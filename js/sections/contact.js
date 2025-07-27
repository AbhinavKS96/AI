export function renderContact() {
  const contactSection = document.getElementById('contact');
  contactSection.innerHTML = `
    <h2>Contact</h2>
    <ul>
      <li>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></li>
      <li>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank">yourprofile</a></li>
      <li>GitHub: <a href="https://github.com/yourusername" target="_blank">yourusername</a></li>
      <li><a href="#">Download Resume</a></li>
    </ul>
  `;
}
