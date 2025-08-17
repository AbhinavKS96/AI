export function renderExperience() {
  const experienceSection = document.getElementById('experience');
  experienceSection.innerHTML = `
    <h2>Professional Experience</h2>
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <div class="job-header">
            <h3>Senior Full Stack Developer</h3>
            <h4>TechCorp Inc.</h4>
            <span class="duration">March 2022 - Present</span>
            <span class="location">San Francisco, CA</span>
          </div>
          <div class="job-description">
            <p>Lead development of enterprise-level SaaS applications serving 100K+ users. Collaborate with cross-functional teams to deliver high-impact features.</p>
            <ul>
              <li>Architected and developed a microservices-based platform using Node.js, React, and AWS</li>
              <li>Improved application performance by 40% through optimization and caching strategies</li>
              <li>Mentored 3 junior developers and conducted code reviews</li>
              <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
            </ul>
            <div class="tech-stack">
              <strong>Technologies:</strong> React, Node.js, TypeScript, AWS, Docker, PostgreSQL, Redis
            </div>
          </div>
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <div class="job-header">
            <h3>Full Stack Developer</h3>
            <h4>StartupXYZ</h4>
            <span class="duration">June 2020 - February 2022</span>
            <span class="location">Remote</span>
          </div>
          <div class="job-description">
            <p>Built and maintained multiple web applications for a fast-growing startup. Worked closely with product managers to implement new features.</p>
            <ul>
              <li>Developed a real-time dashboard using WebSocket and Chart.js</li>
              <li>Created RESTful APIs serving 50K+ daily requests</li>
              <li>Implemented user authentication and authorization systems</li>
              <li>Reduced bug reports by 30% through comprehensive testing</li>
            </ul>
            <div class="tech-stack">
              <strong>Technologies:</strong> JavaScript, Python, Django, Vue.js, MySQL, Redis, WebSocket
            </div>
          </div>
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <div class="job-header">
            <h3>Frontend Developer Intern</h3>
            <h4>Digital Solutions Ltd.</h4>
            <span class="duration">May 2019 - August 2019</span>
            <span class="location">New York, NY</span>
          </div>
          <div class="job-description">
            <p>Assisted in developing responsive web applications and improving user experience across multiple projects.</p>
            <ul>
              <li>Built responsive UI components using React and Material-UI</li>
              <li>Optimized website loading speed by 25%</li>
              <li>Collaborated with designers to implement pixel-perfect designs</li>
              <li>Participated in agile development processes</li>
            </ul>
            <div class="tech-stack">
              <strong>Technologies:</strong> React, HTML5, CSS3, JavaScript, Git, Figma
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
