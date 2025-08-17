export function renderAbout() {
  const aboutSection = document.getElementById('about');
  aboutSection.innerHTML = `
    <div class="about-container">
      <div class="profile-section">
        <div class="profile-image">
          <img src="https://via.placeholder.com/200x200/4A90E2/FFFFFF?text=Profile" alt="Profile Photo" class="profile-photo">
        </div>
        <div class="profile-info">
          <h1>John Doe</h1>
          <h2>Full Stack Developer</h2>
          <p class="location">📍 San Francisco, CA</p>
        </div>
      </div>
      
      <div class="about-content">
        <h3>About Me</h3>
        <p>I'm a passionate Full Stack Developer with 5+ years of experience building scalable web applications and digital solutions. I specialize in modern JavaScript frameworks, cloud technologies, and creating user-centric experiences that drive business value.</p>
        
        <p>My journey in tech started with a curiosity about how things work on the web, which evolved into a career building everything from e-commerce platforms to enterprise SaaS applications. I believe in writing clean, maintainable code and staying current with industry best practices.</p>
        
        <div class="key-highlights">
          <h4>Key Highlights:</h4>
          <ul>
            <li>🚀 Led development of 10+ production applications</li>
            <li>👥 Mentored 5 junior developers</li>
            <li>🏆 Won 2 hackathon competitions</li>
            <li>📈 Improved application performance by 40%</li>
          </ul>
        </div>
        
        <div class="interests">
          <h4>When I'm not coding:</h4>
          <p>I enjoy hiking, reading tech blogs, contributing to open source projects, and experimenting with new technologies. I'm also passionate about tech education and regularly participate in local developer meetups.</p>
        </div>
      </div>
    </div>
  `;
}
