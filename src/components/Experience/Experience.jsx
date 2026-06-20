import React, { useEffect, useState } from 'react';
import './Experience.css';
import {
  FaBriefcase,
  FaCode,
  FaServer,
  FaDatabase,
  FaEnvelope,
  FaLinkedin,
  FaCheckCircle,
  FaSun,
  FaMoon,
  FaCertificate,
  FaCogs,
  FaTools,
  FaFileAlt,
  FaAws
} from 'react-icons/fa';
import {
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiPostgresql,
  SiMongodb,
  SiAngular,
  SiNodedotjs,
  SiReact
} from 'react-icons/si';

const Experience = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="resume-container">
      {/* Sticky Navigation Bar */}
      <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <a href="#hero" className="logo">
            Siddhesh<span>.DevOps</span>
          </a>
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
            <a href="mailto:siddheshbhave7@gmail.com" className="nav-cta">Hire Me</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <div className="tagline">Welcome to my portfolio</div>
          <h1>Siddhesh Bhave</h1>
          <p className="title-badge">Software & DevOps Engineer</p>
          <p className="hero-description">
            Specializing in bridging the gap between development and operations. With 2+ years of professional experience, I architect scalable web applications, containerize workflows, and engineer automated, secure cloud infrastructures.
          </p>
          <div className="cta-buttons">
            <a href="#experience" className="btn-primary">View Experience</a>
            <a href="#contact" className="btn-secondary">Let's Connect</a>
          </div>
        </div>
      </section>

      {/* Key Achievements & Metrics */}
      <section id="about" className="achievements">
        <h2>Key Milestones & Impact</h2>
        <div className="achievements-grid">
          <div className="achievement-card">
            <div className="achievement-icon">⚡</div>
            <h3>40% API Performance Boost</h3>
            <p>Refactored Node.js backend middleware, secured routes via JWT/OAuth2, and reduced roundtrip query latencies from 500ms to 300ms.</p>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon">🐳</div>
            <h3>Multi-Environment Delivery</h3>
            <p>Containerized complex stack configurations using Docker, guaranteeing configuration parity across staging and production.</p>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon">☁️</div>
            <h3>Cloud Interoperability</h3>
            <p>Configured shared EFS volumes mounted concurrently across multi-OS EC2 nodes (Ubuntu, RHEL, Amazon Linux 2) for persistent workloads.</p>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon">🔄</div>
            <h3>CI/CD Pipeline Automation</h3>
            <p>Implemented end-to-end GitHub Actions workflows to automate code checks, dependency linting, unit testing, and builds.</p>
          </div>
        </div>
      </section>

      {/* Professional Experience (2+ Years) */}
      <section id="experience" className="experience-section">
        <h2>Professional Experience</h2>

        <div className="timeline">
          {/* Vernost Tech Venture */}
          <div className="experience-item card">
            <div className="experience-header">
              <div className="exp-role">
                <div className="briefcase-icon"><FaBriefcase /></div>
                <div>
                  <h3>Software & DevOps Engineer</h3>
                  <p className="company">Vernost Tech Venture Pvt. Ltd.</p>
                </div>
              </div>
              <span className="date">Sept 2024 - Present</span>
            </div>
            <ul className="experience-highlights">
              <li><FaCheckCircle /> Deployed and maintained containerized MEAN stack applications on AWS cloud environments.</li>
              <li><FaCheckCircle /> Built and maintained automated CI/CD release pipelines using GitHub Actions to streamline staging deployments.</li>
              <li><FaCheckCircle /> Configured AWS EFS mounted across multiple EC2 instances running different operating systems (Ubuntu, RHEL, and AL2) for centralized storage architectures.</li>
              <li><FaCheckCircle /> Managed application lifetimes and microservices clustering in production using PM2 and Docker.</li>
              <li><FaCheckCircle /> Designed and optimized relational schemas and structured indexes in MySQL and MongoDB, boosting search query speed by 35%.</li>
              <li><FaCheckCircle /> Handled third-party REST API integrations, security middleware, role-based access controls, and OAuth authentication flows.</li>
            </ul>
          </div>

          {/* Cognizant Technology Solutions */}
          <div className="experience-item card">
            <div className="experience-header">
              <div className="exp-role">
                <div className="briefcase-icon"><FaBriefcase /></div>
                <div>
                  <h3>Software Engineer</h3>
                  <p className="company">Cognizant Technology Solutions</p>
                </div>
              </div>
              <span className="date">Jan 2022 - Mar 2023</span>
            </div>
            <ul className="experience-highlights">
              <li><FaCheckCircle /> Developed responsive, state-driven frontends and modular reusable views using Angular and JavaScript.</li>
              <li><FaCheckCircle /> Collaborated with DevOps engineers to integrate frontend packages into dockerized container images.</li>
              <li><FaCheckCircle /> Wrote unit test suites using Jasmine and Karma to maintain robust codebase coverage.</li>
              <li><FaCheckCircle /> Participated in agile ceremonies, version control workflows via Git, and helped resolve deployment environment mismatches.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Intermediate Knowledge & Skills */}
      <section id="skills" className="competencies">
        <h2>Technical Core & Knowledge Depth</h2>
        <div className="competencies-grid">
          {/* AWS Cloud */}
          <div className="competency-card card">
            <h3><FaAws /> AWS Cloud Services</h3>
            <p className="competency-desc">Intermediate understanding of scalable cloud architecture:</p>
            <div className="tech-tags">
              <span>EC2</span>
              <span>Amazon EFS</span>
              <span>VPC Networks</span>
              <span>Security Groups</span>
              <span>IAM Roles</span>
              <span>S3 Buckets</span>
              <span>CloudWatch Monitoring</span>
            </div>
          </div>

          {/* DevOps & Tooling */}
          <div className="competency-card card">
            <h3><FaCogs /> DevOps & Containerization</h3>
            <p className="competency-desc">Orchestration and automated delivery configurations:</p>
            <div className="tech-tags">
              <span>Docker</span>
              <span>Docker Compose</span>
              <span>Kubernetes Basics</span>
              <span>GitHub Actions</span>
              <span>CI/CD Pipelines</span>
              <span>PM2 Process Management</span>
              <span>Linux Administration</span>
            </div>
          </div>

          {/* Development Stack */}
          <div className="competency-card card">
            <h3><FaCode /> Software & Web Development</h3>
            <p className="competency-desc">Building and delivering modern stack applications:</p>
            <div className="tech-tags">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>Angular</span>
              <span>React</span>
              <span>JavaScript / ES6</span>
              <span>RESTful API Design</span>
              <span>JWT Authentication</span>
            </div>
          </div>

          {/* Databases */}
          <div className="competency-card card">
            <h3><FaDatabase /> Database Architectures</h3>
            <p className="competency-desc">Managing relational and non-relational structures:</p>
            <div className="tech-tags">
              <span>MySQL</span>
              <span>MongoDB</span>
              <span>Schema Indexing</span>
              <span>Query Optimization</span>
              <span>Aggregation Pipelines</span>
              <span>Data Normalization</span>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="certifications-section">
        <h2>Professional Certifications</h2>
        <div className="certifications-grid">
          <div className="certification-card card placeholder-card">
            <div className="cert-header">
              <div className="cert-icon"><FaCertificate /></div>
              <div className="cert-details">
                <h3>AWS Certified DevOps Engineer</h3>
                <p className="issuer">Amazon Web Services (AWS)</p>
              </div>
            </div>
            <div className="cert-placeholder-body">
              <div className="pulse-dot-container">
                <span className="pulse-dot"></span>
                <p className="status-text">Verification Pending — Certificate File Coming Soon</p>
              </div>
              <p className="cert-desc">
                Focuses on provisioning, operating, and managing distributed application systems on the AWS platform, covering continuous delivery, system automation, and monitoring.
              </p>
              <div className="placeholder-tag">Upload Pending</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Icons Quick Look */}
      <section className="tech-stack">
        <h2>Technology Ecosystem</h2>
        <div className="tech-grid">
          <div className="tech-icon-item"><FaAws title="AWS" /><span>AWS</span></div>
          <div className="tech-icon-item"><SiDocker title="Docker" /><span>Docker</span></div>
          <div className="tech-icon-item"><SiKubernetes title="Kubernetes" /><span>Kubernetes</span></div>
          <div className="tech-icon-item"><SiGithubactions title="GitHub Actions" /><span>CI/CD</span></div>
          <div className="tech-icon-item"><SiAngular title="Angular" /><span>Angular</span></div>
          <div className="tech-icon-item"><SiReact title="React" /><span>React</span></div>
          <div className="tech-icon-item"><SiNodedotjs title="Node.js" /><span>Node.js</span></div>
          <div className="tech-icon-item"><SiMongodb title="MongoDB" /><span>MongoDB</span></div>
          <div className="tech-icon-item"><SiPostgresql title="PostgreSQL" /><span>PostgreSQL</span></div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="contact-cta">
        <h2>Let's Build Something Together</h2>
        <p>Whether you're looking to automate deployments, migrate infrastructure, or build high-performance web systems, feel free to reach out.</p>
        <div className="contact-grid">
          <div className="contact-info-card">
            <h4>Direct Contact</h4>
            <p><strong>Email:</strong> <a href="mailto:siddheshbhave7@gmail.com">siddheshbhave7@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+917397945487">+91 7397945487</a></p>
          </div>
          <div className="contact-links-card">
            <h4>Professional Profiles</h4>
            <div className="profile-buttons">
              <a href="https://linkedin.com/in/siddhesh-bhave-1684bb303" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <FaLinkedin /> LinkedIn Profile
              </a>
              <a href="mailto:siddheshbhave7@gmail.com" className="btn-secondary">
                <FaEnvelope /> Send an Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
