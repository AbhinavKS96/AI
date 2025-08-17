export function renderContact() {
  const contactSection = document.getElementById('contact');
  contactSection.innerHTML = `
    <h2>Get In Touch</h2>
    <div class="contact-container">
      <div class="contact-info">
        <h3>Let's Connect</h3>
        <p>I'm always interested in hearing about new opportunities, interesting projects, or just having a chat about technology. Feel free to reach out!</p>
        
        <div class="contact-details">
          <div class="contact-item">
            <span class="contact-icon">📧</span>
            <div class="contact-text">
              <h4>Email</h4>
              <a href="mailto:john.doe@example.com">john.doe@example.com</a>
            </div>
          </div>
          
          <div class="contact-item">
            <span class="contact-icon">📱</span>
            <div class="contact-text">
              <h4>Phone</h4>
              <a href="tel:+1-555-123-4567">+1 (555) 123-4567</a>
            </div>
          </div>
          
          <div class="contact-item">
            <span class="contact-icon">📍</span>
            <div class="contact-text">
              <h4>Location</h4>
              <p>San Francisco, CA</p>
            </div>
          </div>
          
          <div class="contact-item">
            <span class="contact-icon">⏰</span>
            <div class="contact-text">
              <h4>Availability</h4>
              <p>Open to new opportunities</p>
            </div>
          </div>
        </div>

        <div class="social-links">
          <h4>Follow Me</h4>
          <div class="social-grid">
            <a href="https://linkedin.com/in/johndoe" target="_blank" class="social-link linkedin">
              <span class="social-icon">💼</span>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/johndoe" target="_blank" class="social-link github">
              <span class="social-icon">🐙</span>
              <span>GitHub</span>
            </a>
            <a href="https://twitter.com/johndoe" target="_blank" class="social-link twitter">
              <span class="social-icon">🐦</span>
              <span>Twitter</span>
            </a>
            <a href="https://medium.com/@johndoe" target="_blank" class="social-link medium">
              <span class="social-icon">📝</span>
              <span>Medium</span>
            </a>
            <a href="https://dev.to/johndoe" target="_blank" class="social-link devto">
              <span class="social-icon">💻</span>
              <span>Dev.to</span>
            </a>
            <a href="https://stackoverflow.com/users/johndoe" target="_blank" class="social-link stackoverflow">
              <span class="social-icon">🔍</span>
              <span>Stack Overflow</span>
            </a>
          </div>
        </div>

        <div class="resume-section">
          <h4>Resume</h4>
          <a href="#" class="btn btn-primary">Download Resume (PDF)</a>
        </div>
      </div>

      <div class="contact-form">
        <h3>Send Me a Message</h3>
        <form id="contactForm" class="form">
          <div class="form-group">
            <label for="name">Name *</label>
            <input type="text" id="name" name="name" required placeholder="Your full name">
          </div>
          
          <div class="form-group">
            <label for="email">Email *</label>
            <input type="email" id="email" name="email" required placeholder="your.email@example.com">
          </div>
          
          <div class="form-group">
            <label for="subject">Subject *</label>
            <input type="text" id="subject" name="subject" required placeholder="What's this about?">
          </div>
          
          <div class="form-group">
            <label for="message">Message *</label>
            <textarea id="message" name="message" rows="6" required placeholder="Tell me about your project, opportunity, or just say hello!"></textarea>
          </div>
          
          <div class="form-group">
            <label for="budget">Budget Range (Optional)</label>
            <select id="budget" name="budget">
              <option value="">Select budget range</option>
              <option value="under-5k">Under $5,000</option>
              <option value="5k-10k">$5,000 - $10,000</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k-50k">$25,000 - $50,000</option>
              <option value="over-50k">Over $50,000</option>
            </select>
          </div>
          
          <div class="form-group">
            <label for="timeline">Timeline (Optional)</label>
            <select id="timeline" name="timeline">
              <option value="">Select timeline</option>
              <option value="asap">ASAP</option>
              <option value="1-2-weeks">1-2 weeks</option>
              <option value="1-month">1 month</option>
              <option value="2-3-months">2-3 months</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>
          
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>

    <div class="availability-section">
      <h3>Current Availability</h3>
      <div class="availability-grid">
        <div class="availability-item">
          <span class="availability-icon">✅</span>
          <div class="availability-content">
            <h4>Open to Full-time Opportunities</h4>
            <p>Looking for senior developer roles in San Francisco or remote</p>
          </div>
        </div>
        <div class="availability-item">
          <span class="availability-icon">✅</span>
          <div class="availability-content">
            <h4>Available for Freelance Projects</h4>
            <p>Taking on interesting side projects and consulting work</p>
          </div>
        </div>
        <div class="availability-item">
          <span class="availability-icon">✅</span>
          <div class="availability-content">
            <h4>Open to Speaking Opportunities</h4>
            <p>Available for tech talks, workshops, and conferences</p>
          </div>
        </div>
        <div class="availability-item">
          <span class="availability-icon">✅</span>
          <div class="availability-content">
            <h4>Mentoring & Code Reviews</h4>
            <p>Happy to help junior developers and review code</p>
          </div>
        </div>
      </div>
    </div>
  `;
}
