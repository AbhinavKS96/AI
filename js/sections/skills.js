export function renderSkills() {
  const skillsSection = document.getElementById('skills');
  skillsSection.innerHTML = `
    <h2>Skills & Technologies</h2>
    <div class="skills-container">
      <div class="skills-category">
        <h3>Frontend Development</h3>
        <div class="skills-grid">
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">React.js</span>
              <span class="skill-level">Advanced</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: 90%"></div>
            </div>
          </div>
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">Vue.js</span>
              <span class="skill-level">Advanced</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: 85%"></div>
            </div>
          </div>
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">JavaScript (ES6+)</span>
              <span class="skill-level">Expert</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: 95%"></div>
            </div>
          </div>
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">TypeScript</span>
              <span class="skill-level">Advanced</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: 80%"></div>
            </div>
          </div>
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">HTML5 & CSS3</span>
              <span class="skill-level">Expert</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: 95%"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="skills-category">
        <h3>Backend Development</h3>
        <div class="skills-grid">
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">Node.js</span>
              <span class="skill-level">Advanced</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: 88%"></div>
            </div>
          </div>
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">Express.js</span>
              <span class="skill-level">Advanced</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: 85%"></div>
            </div>
          </div>
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">Python</span>
              <span class="skill-level">Intermediate</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: 75%"></div>
            </div>
          </div>
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">Django</span>
              <span class="skill-level">Intermediate</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: 70%"></div>
            </div>
          </div>
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">RESTful APIs</span>
              <span class="skill-level">Advanced</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: 90%"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="skills-category">
        <h3>Databases & Cloud</h3>
        <div class="skills-grid">
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">MongoDB</span>
              <span class="skill-level">Advanced</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: 85%"></div>
            </div>
          </div>
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">PostgreSQL</span>
              <span class="skill-level">Advanced</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: 80%"></div>
            </div>
          </div>
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">AWS</span>
              <span class="skill-level">Intermediate</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: 75%"></div>
            </div>
          </div>
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">Docker</span>
              <span class="skill-level">Intermediate</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: 70%"></div>
            </div>
          </div>
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">Redis</span>
              <span class="skill-level">Intermediate</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: 65%"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="skills-category">
        <h3>Tools & Others</h3>
        <div class="skills-tags">
          <span class="skill-tag">Git & GitHub</span>
          <span class="skill-tag">VS Code</span>
          <span class="skill-tag">Webpack</span>
          <span class="skill-tag">Jest</span>
          <span class="skill-tag">Postman</span>
          <span class="skill-tag">Figma</span>
          <span class="skill-tag">Agile/Scrum</span>
          <span class="skill-tag">CI/CD</span>
          <span class="skill-tag">Linux</span>
          <span class="skill-tag">NPM/Yarn</span>
        </div>
      </div>

      <div class="skills-category">
        <h3>Soft Skills</h3>
        <div class="soft-skills">
          <div class="soft-skill-item">
            <span class="skill-icon">🤝</span>
            <span class="skill-name">Team Collaboration</span>
          </div>
          <div class="soft-skill-item">
            <span class="skill-icon">💬</span>
            <span class="skill-name">Communication</span>
          </div>
          <div class="soft-skill-item">
            <span class="skill-icon">🔍</span>
            <span class="skill-name">Problem Solving</span>
          </div>
          <div class="soft-skill-item">
            <span class="skill-icon">⏰</span>
            <span class="skill-name">Time Management</span>
          </div>
          <div class="soft-skill-item">
            <span class="skill-icon">📚</span>
            <span class="skill-name">Continuous Learning</span>
          </div>
          <div class="soft-skill-item">
            <span class="skill-icon">🎯</span>
            <span class="skill-name">Attention to Detail</span>
          </div>
        </div>
      </div>
    </div>
  `;
}
