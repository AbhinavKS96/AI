export function renderProjects() {
  const projectsSection = document.getElementById('projects');
  projectsSection.innerHTML = `
    <h2>Featured Projects</h2>
    <div class="projects-grid">
      <div class="project-card">
        <div class="project-image">
          <img src="https://via.placeholder.com/300x200/4A90E2/FFFFFF?text=E-Commerce+Platform" alt="E-Commerce Platform">
        </div>
        <div class="project-content">
          <h3>E-Commerce Platform</h3>
          <p>A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built with modern technologies and scalable architecture.</p>
          <div class="project-features">
            <ul>
              <li>🔐 JWT Authentication & Authorization</li>
              <li>💳 Stripe Payment Integration</li>
              <li>📊 Real-time Analytics Dashboard</li>
              <li>📱 Responsive Mobile Design</li>
              <li>🚀 AWS Deployment</li>
            </ul>
          </div>
          <div class="tech-stack">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">MongoDB</span>
            <span class="tech-tag">Stripe</span>
            <span class="tech-tag">AWS</span>
          </div>
          <div class="project-links">
            <a href="#" class="btn btn-primary">Live Demo</a>
            <a href="#" class="btn btn-secondary">GitHub</a>
          </div>
        </div>
      </div>

      <div class="project-card">
        <div class="project-image">
          <img src="https://via.placeholder.com/300x200/50C878/FFFFFF?text=Task+Manager" alt="Task Manager">
        </div>
        <div class="project-content">
          <h3>Task Management System</h3>
          <p>A collaborative task management application with real-time updates, team collaboration features, and progress tracking. Includes drag-and-drop functionality and deadline management.</p>
          <div class="project-features">
            <ul>
              <li>👥 Team Collaboration</li>
              <li>🔄 Real-time Updates</li>
              <li>📅 Calendar Integration</li>
              <li>📊 Progress Analytics</li>
              <li>🔔 Push Notifications</li>
            </ul>
          </div>
          <div class="tech-stack">
            <span class="tech-tag">Vue.js</span>
            <span class="tech-tag">Express.js</span>
            <span class="tech-tag">PostgreSQL</span>
            <span class="tech-tag">Socket.io</span>
            <span class="tech-tag">Docker</span>
          </div>
          <div class="project-links">
            <a href="#" class="btn btn-primary">Live Demo</a>
            <a href="#" class="btn btn-secondary">GitHub</a>
          </div>
        </div>
      </div>

      <div class="project-card">
        <div class="project-image">
          <img src="https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Weather+App" alt="Weather App">
        </div>
        <div class="project-content">
          <h3>Weather Dashboard</h3>
          <p>A weather application with location-based forecasts, interactive maps, and historical weather data visualization. Features include 7-day forecasts and weather alerts.</p>
          <div class="project-features">
            <ul>
              <li>🌍 Location-based Weather</li>
              <li>🗺️ Interactive Maps</li>
              <li>📈 Historical Data Charts</li>
              <li>⚡ Weather Alerts</li>
              <li>🌙 Dark/Light Theme</li>
            </ul>
          </div>
          <div class="tech-stack">
            <span class="tech-tag">JavaScript</span>
            <span class="tech-tag">OpenWeather API</span>
            <span class="tech-tag">Chart.js</span>
            <span class="tech-tag">Leaflet.js</span>
            <span class="tech-tag">CSS3</span>
          </div>
          <div class="project-links">
            <a href="#" class="btn btn-primary">Live Demo</a>
            <a href="#" class="btn btn-secondary">GitHub</a>
          </div>
        </div>
      </div>

      <div class="project-card">
        <div class="project-image">
          <img src="https://via.placeholder.com/300x200/9B59B6/FFFFFF?text=AI+Chatbot" alt="AI Chatbot">
        </div>
        <div class="project-content">
          <h3>AI-Powered Chatbot</h3>
          <p>An intelligent chatbot using natural language processing to provide customer support and answer queries. Integrates with multiple messaging platforms and includes sentiment analysis.</p>
          <div class="project-features">
            <ul>
              <li>🤖 Natural Language Processing</li>
              <li>💬 Multi-platform Support</li>
              <li>📊 Sentiment Analysis</li>
              <li>🎯 Intent Recognition</li>
              <li>📚 Learning Capabilities</li>
            </ul>
          </div>
          <div class="tech-stack">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">TensorFlow</span>
            <span class="tech-tag">NLTK</span>
            <span class="tech-tag">Flask</span>
            <span class="tech-tag">WebSocket</span>
          </div>
          <div class="project-links">
            <a href="#" class="btn btn-primary">Live Demo</a>
            <a href="#" class="btn btn-secondary">GitHub</a>
          </div>
        </div>
      </div>
    </div>

    <div class="more-projects">
      <h3>Other Projects</h3>
      <div class="mini-projects">
        <div class="mini-project">
          <h4>Portfolio Website</h4>
          <p>Responsive personal portfolio built with HTML, CSS, and JavaScript</p>
          <a href="#" class="link">View Project</a>
        </div>
        <div class="mini-project">
          <h4>Calculator App</h4>
          <p>Advanced calculator with scientific functions and history</p>
          <a href="#" class="link">View Project</a>
        </div>
        <div class="mini-project">
          <h4>Todo List</h4>
          <p>Simple todo application with local storage</p>
          <a href="#" class="link">View Project</a>
        </div>
      </div>
    </div>
  `;
}
