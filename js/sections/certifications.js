export function renderCertifications() {
  const certSection = document.getElementById('certifications');
  certSection.innerHTML = `
    <h2>Certifications & Achievements</h2>
    <div class="certifications-container">
      <div class="certifications-grid">
        <div class="certification-card">
          <div class="cert-header">
            <div class="cert-icon">☁️</div>
            <div class="cert-info">
              <h3>AWS Certified Solutions Architect</h3>
              <p class="cert-issuer">Amazon Web Services</p>
              <p class="cert-date">Issued: December 2023</p>
              <p class="cert-id">Credential ID: AWS-123456789</p>
            </div>
          </div>
          <div class="cert-description">
            <p>Demonstrates expertise in designing distributed systems on AWS platform, including high availability, fault tolerance, and scalability.</p>
            <div class="cert-skills">
              <span class="skill-tag">Cloud Architecture</span>
              <span class="skill-tag">AWS Services</span>
              <span class="skill-tag">Security</span>
            </div>
          </div>
          <a href="#" class="verify-link">Verify Certificate</a>
        </div>

        <div class="certification-card">
          <div class="cert-header">
            <div class="cert-icon">🔧</div>
            <div class="cert-info">
              <h3>Google Cloud Professional Developer</h3>
              <p class="cert-issuer">Google Cloud</p>
              <p class="cert-date">Issued: August 2022</p>
              <p class="cert-id">Credential ID: GCP-987654321</p>
            </div>
          </div>
          <div class="cert-description">
            <p>Validates ability to build scalable and highly available applications using Google Cloud Platform services and best practices.</p>
            <div class="cert-skills">
              <span class="skill-tag">GCP</span>
              <span class="skill-tag">Cloud Development</span>
              <span class="skill-tag">Microservices</span>
            </div>
          </div>
          <a href="#" class="verify-link">Verify Certificate</a>
        </div>

        <div class="certification-card">
          <div class="cert-header">
            <div class="cert-icon">📋</div>
            <div class="cert-info">
              <h3>Certified Scrum Master (CSM)</h3>
              <p class="cert-issuer">Scrum Alliance</p>
              <p class="cert-date">Issued: March 2021</p>
              <p class="cert-id">Credential ID: CSM-456789123</p>
            </div>
          </div>
          <div class="cert-description">
            <p>Certifies knowledge of Scrum framework and ability to facilitate Scrum events, remove impediments, and coach teams.</p>
            <div class="cert-skills">
              <span class="skill-tag">Agile</span>
              <span class="skill-tag">Scrum</span>
              <span class="skill-tag">Team Leadership</span>
            </div>
          </div>
          <a href="#" class="verify-link">Verify Certificate</a>
        </div>

        <div class="certification-card">
          <div class="cert-header">
            <div class="cert-icon">🔒</div>
            <div class="cert-info">
              <h3>Microsoft Azure Developer Associate</h3>
              <p class="cert-issuer">Microsoft</p>
              <p class="cert-date">Issued: June 2022</p>
              <p class="cert-id">Credential ID: AZ-204-123456</p>
            </div>
          </div>
          <div class="cert-description">
            <p>Demonstrates expertise in designing, building, testing, and maintaining cloud applications and services on Microsoft Azure.</p>
            <div class="cert-skills">
              <span class="skill-tag">Azure</span>
              <span class="skill-tag">Cloud Development</span>
              <span class="skill-tag">DevOps</span>
            </div>
          </div>
          <a href="#" class="verify-link">Verify Certificate</a>
        </div>

        <div class="certification-card">
          <div class="cert-header">
            <div class="cert-icon">🎯</div>
            <div class="cert-info">
              <h3>MongoDB Certified Developer</h3>
              <p class="cert-issuer">MongoDB University</p>
              <p class="cert-date">Issued: September 2021</p>
              <p class="cert-id">Credential ID: MDB-789123456</p>
            </div>
          </div>
          <div class="cert-description">
            <p>Validates skills in building applications using MongoDB, including data modeling, aggregation, and performance optimization.</p>
            <div class="cert-skills">
              <span class="skill-tag">MongoDB</span>
              <span class="skill-tag">NoSQL</span>
              <span class="skill-tag">Database Design</span>
            </div>
          </div>
          <a href="#" class="verify-link">Verify Certificate</a>
        </div>

        <div class="certification-card">
          <div class="cert-header">
            <div class="cert-icon">⚡</div>
            <div class="cert-info">
              <h3>React Developer Certification</h3>
              <p class="cert-issuer">Meta (Facebook)</p>
              <p class="cert-date">Issued: January 2023</p>
              <p class="cert-id">Credential ID: REACT-321654987</p>
            </div>
          </div>
          <div class="cert-description">
            <p>Certifies proficiency in React development, including hooks, context, performance optimization, and testing.</p>
            <div class="cert-skills">
              <span class="skill-tag">React</span>
              <span class="skill-tag">Frontend</span>
              <span class="skill-tag">JavaScript</span>
            </div>
          </div>
          <a href="#" class="verify-link">Verify Certificate</a>
        </div>
      </div>

      <div class="achievements-section">
        <h3>Additional Achievements</h3>
        <div class="achievements-grid">
          <div class="achievement-item">
            <span class="achievement-icon">🏆</span>
            <div class="achievement-content">
              <h4>1st Place - TechCrunch Disrupt Hackathon</h4>
              <p>Built an AI-powered productivity app in 24 hours</p>
              <span class="achievement-date">2023</span>
            </div>
          </div>
          <div class="achievement-item">
            <span class="achievement-icon">📚</span>
            <div class="achievement-content">
              <h4>Published 3 Technical Articles</h4>
              <p>Medium articles on React performance and cloud architecture</p>
              <span class="achievement-date">2022-2023</span>
            </div>
          </div>
          <div class="achievement-item">
            <span class="achievement-icon">🎓</span>
            <div class="achievement-content">
              <h4>Guest Lecturer - Stanford CS Department</h4>
              <p>Delivered lectures on modern web development practices</p>
              <span class="achievement-date">2023</span>
            </div>
          </div>
          <div class="achievement-item">
            <span class="achievement-icon">🌟</span>
            <div class="achievement-content">
              <h4>Open Source Contributor</h4>
              <p>Contributed to 15+ open source projects on GitHub</p>
              <span class="achievement-date">Ongoing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
