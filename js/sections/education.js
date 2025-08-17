export function renderEducation() {
  const educationSection = document.getElementById('education');
  educationSection.innerHTML = `
    <h2>Education</h2>
    <div class="education-container">
      <div class="education-item">
        <div class="education-header">
          <h3>Master of Science in Computer Science</h3>
          <h4>Stanford University</h4>
          <span class="duration">2019 - 2021</span>
          <span class="gpa">GPA: 3.8/4.0</span>
        </div>
        <div class="education-details">
          <p>Specialized in Software Engineering and Artificial Intelligence. Completed thesis on "Machine Learning Applications in Web Development."</p>
          <div class="coursework">
            <strong>Relevant Coursework:</strong>
            <ul>
              <li>Advanced Algorithms and Data Structures</li>
              <li>Machine Learning and AI</li>
              <li>Software Engineering Principles</li>
              <li>Database Systems</li>
              <li>Computer Networks</li>
            </ul>
          </div>
          <div class="achievements">
            <strong>Achievements:</strong>
            <ul>
              <li>🏆 Dean's List (2019-2021)</li>
              <li>🎓 Teaching Assistant for CS101</li>
              <li>📚 Published 2 research papers</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="education-item">
        <div class="education-header">
          <h3>Bachelor of Science in Computer Science</h3>
          <h4>University of California, Berkeley</h4>
          <span class="duration">2015 - 2019</span>
          <span class="gpa">GPA: 3.7/4.0</span>
        </div>
        <div class="education-details">
          <p>Major in Computer Science with minor in Mathematics. Active member of the Computer Science Club and participated in multiple hackathons.</p>
          <div class="coursework">
            <strong>Relevant Coursework:</strong>
            <ul>
              <li>Introduction to Programming</li>
              <li>Data Structures and Algorithms</li>
              <li>Web Development</li>
              <li>Operating Systems</li>
              <li>Software Engineering</li>
            </ul>
          </div>
          <div class="achievements">
            <strong>Achievements:</strong>
            <ul>
              <li>🏆 Magna Cum Laude</li>
              <li>💻 1st Place - University Hackathon 2018</li>
              <li>👥 President - Computer Science Club</li>
              <li>📊 Research Assistant - Data Science Lab</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="certifications-preview">
        <h3>Additional Certifications</h3>
        <div class="cert-grid">
          <div class="cert-item">
            <span class="cert-name">AWS Certified Solutions Architect</span>
            <span class="cert-date">2023</span>
          </div>
          <div class="cert-item">
            <span class="cert-name">Google Cloud Professional Developer</span>
            <span class="cert-date">2022</span>
          </div>
          <div class="cert-item">
            <span class="cert-name">Certified Scrum Master (CSM)</span>
            <span class="cert-date">2021</span>
          </div>
        </div>
      </div>
    </div>
  `;
}
