// Enhanced Portfolio JavaScript with Interactive Features

import { renderAbout } from './sections/about.js';
import { renderExperience } from './sections/experience.js';
import { renderEducation } from './sections/education.js';
import { renderProjects } from './sections/projects.js';
import { renderSkills } from './sections/skills.js';
import { renderCertifications } from './sections/certifications.js';
import { renderContact } from './sections/contact.js';

// Initialize all sections
renderAbout();
renderExperience();
renderEducation();
renderProjects();
renderSkills();
renderCertifications();
renderContact();

// ===== INTERACTIVE FEATURES =====

class PortfolioApp {
  constructor() {
    this.header = document.getElementById('header');
    this.navToggle = document.querySelector('.nav-toggle');
    this.navMenu = document.querySelector('.nav-menu');
    this.navLinks = document.querySelectorAll('.nav-link');
    this.sections = document.querySelectorAll('section[id]');
    this.contactForm = document.getElementById('contactForm');
    
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.setupScrollAnimations();
    this.setupSmoothScrolling();
    this.setupFormHandling();
    this.setupSkillAnimations();
  }

  setupEventListeners() {
    // Header scroll effect
    window.addEventListener('scroll', () => {
      this.handleScroll();
    });

    // Mobile navigation toggle
    if (this.navToggle) {
      this.navToggle.addEventListener('click', () => {
        this.toggleMobileMenu();
      });
    }

    // Close mobile menu when clicking on a link
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.closeMobileMenu();
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('nav') && this.navMenu.classList.contains('active')) {
        this.closeMobileMenu();
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.navMenu.classList.contains('active')) {
        this.closeMobileMenu();
      }
    });
  }

  handleScroll() {
    // Header scroll effect
    if (window.scrollY > 100) {
      this.header.classList.add('scrolled');
    } else {
      this.header.classList.remove('scrolled');
    }

    // Active navigation highlighting
    this.updateActiveNavLink();
  }

  toggleMobileMenu() {
    this.navMenu.classList.toggle('active');
    this.navToggle.classList.toggle('active');
    document.body.style.overflow = this.navMenu.classList.contains('active') ? 'hidden' : '';
  }

  closeMobileMenu() {
    this.navMenu.classList.remove('active');
    this.navToggle.classList.remove('active');
    document.body.style.overflow = '';
  }

  updateActiveNavLink() {
    const scrollPosition = window.scrollY + 100;

    this.sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Remove active class from all links
        this.navLinks.forEach(link => link.classList.remove('active'));
        // Add active class to current link
        if (navLink) {
          navLink.classList.add('active');
        }
      }
    });
  }

  setupScrollAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.card, .timeline-item, .project-card, .certification-card, .skill-item');
    animateElements.forEach(el => {
      el.classList.add('scroll-animate');
      observer.observe(el);
    });
  }

  setupSmoothScrolling() {
    // Smooth scrolling for navigation links
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          const headerHeight = this.header.offsetHeight;
          const targetPosition = targetSection.offsetTop - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  setupSkillAnimations() {
    // Animate skill bars when they come into view
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transform = 'translateX(0)';
        }
      });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
      skillObserver.observe(bar);
    });
  }

  setupFormHandling() {
    if (this.contactForm) {
      this.contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleFormSubmission();
      });

      // Real-time form validation
      const formInputs = this.contactForm.querySelectorAll('input, textarea, select');
      formInputs.forEach(input => {
        input.addEventListener('blur', () => {
          this.validateField(input);
        });
      });
    }
  }

  validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = '';

    // Remove existing error styling
    field.classList.remove('error');
    this.removeErrorMessage(field);

    // Validation rules
    switch (fieldName) {
      case 'name':
        if (value.length < 2) {
          isValid = false;
          errorMessage = 'Name must be at least 2 characters long';
        }
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          isValid = false;
          errorMessage = 'Please enter a valid email address';
        }
        break;
      case 'subject':
        if (value.length < 5) {
          isValid = false;
          errorMessage = 'Subject must be at least 5 characters long';
        }
        break;
      case 'message':
        if (value.length < 10) {
          isValid = false;
          errorMessage = 'Message must be at least 10 characters long';
        }
        break;
    }

    if (!isValid) {
      field.classList.add('error');
      this.showErrorMessage(field, errorMessage);
    }

    return isValid;
  }

  showErrorMessage(field, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.color = 'var(--error-color)';
    errorDiv.style.fontSize = '0.8rem';
    errorDiv.style.marginTop = '0.25rem';
    
    field.parentNode.appendChild(errorDiv);
  }

  removeErrorMessage(field) {
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
      existingError.remove();
    }
  }

  async handleFormSubmission() {
    const formData = new FormData(this.contactForm);
    const formObject = Object.fromEntries(formData);
    
    // Validate all fields
    const formInputs = this.contactForm.querySelectorAll('input, textarea, select');
    let isFormValid = true;

    formInputs.forEach(input => {
      if (!this.validateField(input)) {
        isFormValid = false;
      }
    });

    if (!isFormValid) {
      this.showNotification('Please fix the errors in the form', 'error');
      return;
    }

    // Show loading state
    const submitButton = this.contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      this.showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
      this.contactForm.reset();
      
    } catch (error) {
      this.showNotification('Failed to send message. Please try again.', 'error');
    } finally {
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }
  }

  showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.padding = '1rem 1.5rem';
    notification.style.borderRadius = 'var(--radius-lg)';
    notification.style.color = 'var(--white)';
    notification.style.fontWeight = '500';
    notification.style.zIndex = '10000';
    notification.style.transform = 'translateX(100%)';
    notification.style.transition = 'transform 0.3s ease-in-out';
    
    // Set background color based on type
    switch (type) {
      case 'success':
        notification.style.background = 'var(--success-color)';
        break;
      case 'error':
        notification.style.background = 'var(--error-color)';
        break;
      default:
        notification.style.background = 'var(--primary-color)';
    }
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 5000);
  }
}

// ===== UTILITY FUNCTIONS =====

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// ===== INITIALIZATION =====

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize the portfolio app
  const app = new PortfolioApp();
  
  // Add some additional interactive features
  
  // Parallax effect for profile image
  const profilePhoto = document.querySelector('.profile-photo');
  if (profilePhoto) {
    window.addEventListener('scroll', throttle(() => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      profilePhoto.style.transform = `translateY(${rate}px) scale(1.05)`;
    }, 16));
  }
  
  // Add hover effects to project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-12px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });
  
  // Add typing effect to the main title
  const mainTitle = document.querySelector('.profile-info h1');
  if (mainTitle) {
    const text = mainTitle.textContent;
    mainTitle.textContent = '';
    mainTitle.style.borderRight = '2px solid var(--primary-color)';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        mainTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      } else {
        mainTitle.style.borderRight = 'none';
      }
    };
    
    // Start typing effect when the section comes into view
    const titleObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          typeWriter();
          titleObserver.unobserve(entry.target);
        }
      });
    });
    
    titleObserver.observe(mainTitle);
  }
  
  // Add download functionality to resume button
  const downloadBtn = document.querySelector('.btn-download');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', (e) => {
      e.preventDefault();
      app.showNotification('Resume download started!', 'success');
      
      // Simulate download (replace with actual file download)
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = 'data:text/plain;charset=utf-8,John%20Doe%20Resume';
        link.download = 'John_Doe_Resume.pdf';
        link.click();
      }, 1000);
    });
  }
  
  // Add copy email functionality
  const emailLink = document.querySelector('a[href^="mailto:"]');
  if (emailLink) {
    emailLink.addEventListener('click', (e) => {
      e.preventDefault();
      const email = emailLink.href.replace('mailto:', '');
      navigator.clipboard.writeText(email).then(() => {
        app.showNotification('Email copied to clipboard!', 'success');
      });
    });
  }
});

// Export for potential use in other modules
export { PortfolioApp };
