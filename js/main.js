// Main JS entry point
// Import and initialize section modules here

import { renderAbout } from './sections/about.js';
import { renderExperience } from './sections/experience.js';
import { renderEducation } from './sections/education.js';
import { renderProjects } from './sections/projects.js';
import { renderSkills } from './sections/skills.js';
import { renderCertifications } from './sections/certifications.js';
import { renderContact } from './sections/contact.js';

renderAbout();
renderExperience();
renderEducation();
renderProjects();
renderSkills();
renderCertifications();
renderContact();
