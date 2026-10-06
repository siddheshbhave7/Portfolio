import React, { useEffect, useState, Suspense } from 'react';
import './Experience.css';
import {
  FaBriefcase,
  FaCode,
  FaServer,
  FaDatabase,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaCheckCircle,
  FaSun,
  FaMoon,
  FaCertificate,
  FaCogs,
  FaTools,
  FaFileAlt,
  FaAws,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaPhone
} from 'react-icons/fa';
import {
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiPostgresql,
  SiMongodb,
  SiAngular,
  SiNodedotjs,
  SiReact,
  SiTerraform,
  SiJenkins,
  SiRedis,
  SiMysql,
  SiLinux
} from 'react-icons/si';
import Typewriter from '../Typewriter/Typewriter';
const Projects = React.lazy(() => import('../Projects/Projects'));

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
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
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
          <p className="title-badge">
            <Typewriter words={[
              "DevOps Engineer",
              "Cloud Infrastructure Engineer",
              "Full-Stack Developer"
            ]} />
          </p>
          <p className="hero-description">
            DevOps Engineer with 3+ years of experience in application deployment, CI/CD, cloud infrastructure, and containerization. Hands-on with AWS, Docker, Kubernetes, Terraform, Jenkins, and GitHub Actions. Focused on building reliable, scalable, and efficient cloud environments.
          </p>
          <div className="hero-meta">
            <span><FaMapMarkerAlt /> Mumbai, India</span>
            <span><FaPhone /> +91 7397945487</span>
          </div>
          <div className="cta-buttons">
            <a href="#experience" className="btn-primary">View Experience</a>
            <a href="#contact" className="btn-secondary">Let's Connect</a>
          </div>
        </div>
      </section>

      {/* Key Achievements & Metrics */}
      <section id="about" className="achievements">
        <h2>Key Milestones &amp; Impact</h2>
        <div className="achievements-grid">
          <div className="achievement-card">
            <div className="achievement-icon">🐳</div>
            <h3>Multi-Stage Docker Builds</h3>
            <p>Built and maintained Docker images using Dockerfiles and multi-stage builds, enabling consistent and repeatable application deployments across environments.</p>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon">🔄</div>
            <h3>CI/CD Pipeline Automation</h3>
            <p>Implemented GitHub Actions workflows to automate build, testing, Docker image creation, tagging, and deployment activities end-to-end.</p>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon">☁️</div>
            <h3>AWS Cloud Infrastructure</h3>
            <p>Worked with AWS EC2 and Amazon ECR for application hosting and container image management as part of production deployment lifecycles.</p>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon">⚙️</div>
            <h3>Kubernetes Orchestration</h3>
            <p>Managed container workloads using Kubernetes including Deployments, Services, ConfigMaps, Secrets, rolling updates, scaling, and troubleshooting.</p>
          </div>
        </div>
      </section>

      {/* Professional Experience (2+ Years) */}
      <section id="experience" className="experience-section">
        <h2>Professional Experience</h2>

        <div className="timeline">
          {/* Vernost Tech Ventures */}
          <div className="experience-item card">
            <div className="experience-header">
              <div className="exp-role">
                <div className="briefcase-icon"><FaBriefcase /></div>
                <div>
                  <h3>DevOps Engineer</h3>
                  <p className="company">Vernost Tech Ventures Pvt. Ltd.</p>
                </div>
              </div>
              <span className="date">Sept 2024 – Present · Mumbai</span>
            </div>
            <ul className="experience-highlights">
              <li><FaCheckCircle /> Managed application build and deployment workflows using Git/GitHub, Docker, and CI/CD practices to support reliable application releases.</li>
              <li><FaCheckCircle /> Built and maintained Docker images using Dockerfiles and multi-stage builds, enabling consistent and repeatable application deployments.</li>
              <li><FaCheckCircle /> Implemented GitHub Actions CI/CD workflows to automate application build, testing, Docker image creation, tagging, and deployment activities.</li>
              <li><FaCheckCircle /> Worked with AWS EC2 and Amazon ECR for application hosting and container image management as part of the deployment lifecycle.</li>
              <li><FaCheckCircle /> Worked with Kubernetes for container orchestration, including Deployments, Services, ConfigMaps, Secrets, rolling updates, scaling, and troubleshooting application workloads.</li>
              <li><FaCheckCircle /> Used Terraform for Infrastructure as Code and repeatable provisioning of AWS infrastructure in hands-on DevOps projects.</li>
              <li><FaCheckCircle /> Supported application runtime and production troubleshooting using PM2, structured logging, monitoring, and performance optimization techniques.</li>
            </ul>
          </div>

          {/* Cognizant Technology Solutions */}
          <div className="experience-item card">
            <div className="experience-header">
              <div className="exp-role">
                <div className="briefcase-icon"><FaBriefcase /></div>
                <div>
                  <h3>Software Developer</h3>
                  <p className="company">Cognizant Technology Solutions</p>
                </div>
              </div>
              <span className="date">Jan 2022 – Mar 2023 · Pune</span>
            </div>
            <ul className="experience-highlights">
              <li><FaCheckCircle /> Performed quantitative and qualitative data analysis to support senior consultants in developing strategic recommendations for clients.</li>
              <li><FaCheckCircle /> Contributed to the development of detailed project plans and managed key workstreams for consulting engagements across multiple sectors.</li>
              <li><FaCheckCircle /> Prepared compelling client presentations and reports, translating complex data into actionable insights for decision-makers.</li>
              <li><FaCheckCircle /> Assisted in the implementation of recommended solutions, including process mapping and system integration support.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section id="skills" className="competencies">
        <h2>Technical Core &amp; Knowledge Depth</h2>
        <div className="competencies-grid">
          {/* Cloud & AWS */}
          <div className="competency-card card">
            <h3><FaAws /> Cloud &amp; AWS</h3>
            <p className="competency-desc">Scalable cloud infrastructure and services:</p>
            <div className="tech-tags">
              <span>AWS EC2</span>
              <span>Amazon S3</span>
              <span>AWS RDS</span>
              <span>Amazon ECR</span>
              <span>IAM Roles</span>
              <span>CloudWatch</span>
              <span>Cloud Deployment</span>
            </div>
          </div>

          {/* CI/CD & Automation */}
          <div className="competency-card card">
            <h3><SiJenkins /> CI/CD &amp; Automation</h3>
            <p className="competency-desc">Automated build and delivery pipelines:</p>
            <div className="tech-tags">
              <span>Jenkins</span>
              <span>GitHub Actions</span>
              <span>CI/CD Pipelines</span>
              <span>Build Automation</span>
              <span>Test Automation</span>
              <span>Artifact Workflows</span>
            </div>
          </div>

          {/* Containers & DevOps */}
          <div className="competency-card card">
            <h3><FaCogs /> Containers &amp; DevOps</h3>
            <p className="competency-desc">Containerization and orchestration tooling:</p>
            <div className="tech-tags">
              <span>Docker</span>
              <span>Dockerfiles</span>
              <span>Multi-Stage Builds</span>
              <span>Docker Compose</span>
              <span>Container Lifecycle</span>
              <span>PM2</span>
            </div>
          </div>

          {/* Kubernetes */}
          <div className="competency-card card">
            <h3><SiKubernetes /> Kubernetes</h3>
            <p className="competency-desc">Container orchestration and workload management:</p>
            <div className="tech-tags">
              <span>Pods &amp; Deployments</span>
              <span>Services</span>
              <span>ConfigMaps &amp; Secrets</span>
              <span>Rolling Updates</span>
              <span>Scaling</span>
              <span>kubectl</span>
            </div>
          </div>

          {/* Infrastructure as Code */}
          <div className="competency-card card">
            <h3><SiTerraform /> Infrastructure as Code</h3>
            <p className="competency-desc">Repeatable, declarative cloud provisioning:</p>
            <div className="tech-tags">
              <span>Terraform</span>
              <span>Reusable Modules</span>
              <span>AWS Provisioning</span>
              <span>IaC Best Practices</span>
            </div>
          </div>

          {/* Linux & Scripting */}
          <div className="competency-card card">
            <h3><SiLinux /> Linux &amp; Scripting</h3>
            <p className="competency-desc">System administration and shell automation:</p>
            <div className="tech-tags">
              <span>Ubuntu / Linux</span>
              <span>Bash / Shell Scripting</span>
              <span>Processes &amp; Services</span>
              <span>File Permissions</span>
              <span>Networking Basics</span>
            </div>
          </div>

          {/* Application Stack */}
          <div className="competency-card card">
            <h3><FaCode /> Application Stack</h3>
            <p className="competency-desc">Web and backend application development:</p>
            <div className="tech-tags">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>Angular</span>
              <span>REST APIs</span>
              <span>MySQL</span>
              <span>MongoDB</span>
              <span>Redis</span>
            </div>
          </div>

          {/* Monitoring & Security */}
          <div className="competency-card card">
            <h3><FaServer /> Monitoring &amp; Security</h3>
            <p className="competency-desc">Observability and secure infrastructure practices:</p>
            <div className="tech-tags">
              <span>CloudWatch</span>
              <span>Structured Logging</span>
              <span>IAM Policies</span>
              <span>Security Groups</span>
              <span>HTTP/HTTPS</span>
              <span>DNS Fundamentals</span>
              <span>Secrets Management</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Suspense fallback={<div className="loading-fallback" style={{ height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading Projects...</div>}>
        <Projects />
      </Suspense>

      {/* Education Section */}
      <section id="education" className="education-section">
        <h2>Education</h2>
        <div className="education-grid">
          <div className="education-card card">
            <div className="education-header">
              <div className="edu-icon"><FaGraduationCap /></div>
              <div>
                <h3>Post Graduate Diploma in Advanced Computing</h3>
                <p className="institution">CDAC (PG-DAC)</p>
              </div>
            </div>
            <span className="date">Sept 2023 – Feb 2024</span>
            <p className="edu-desc">Advanced computing specialization covering software development, cloud technologies, and system architecture.</p>
          </div>
          <div className="education-card card">
            <div className="education-header">
              <div className="edu-icon"><FaGraduationCap /></div>
              <div>
                <h3>Bachelor of Engineering</h3>
                <p className="institution">University</p>
              </div>
            </div>
            <span className="date">2017 – 2021</span>
            <p className="edu-desc">Undergraduate engineering degree providing a strong foundation in computer science and software engineering principles.</p>
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
          <div className="tech-icon-item"><SiTerraform title="Terraform" /><span>Terraform</span></div>
          <div className="tech-icon-item"><SiJenkins title="Jenkins" /><span>Jenkins</span></div>
          <div className="tech-icon-item"><SiGithubactions title="GitHub Actions" /><span>CI/CD</span></div>
          <div className="tech-icon-item"><SiAngular title="Angular" /><span>Angular</span></div>
          <div className="tech-icon-item"><SiNodedotjs title="Node.js" /><span>Node.js</span></div>
          <div className="tech-icon-item"><SiMongodb title="MongoDB" /><span>MongoDB</span></div>
          <div className="tech-icon-item"><SiRedis title="Redis" /><span>Redis</span></div>
          <div className="tech-icon-item"><SiLinux title="Linux" /><span>Linux</span></div>
          <div className="tech-icon-item"><SiMysql title="MySQL" /><span>MySQL</span></div>
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
            <p><strong>Location:</strong> Mumbai, India</p>
          </div>
          <div className="contact-links-card">
            <h4>Professional Profiles</h4>
            <div className="profile-buttons">
              <a href="https://linkedin.com/in/siddhesh-bhave" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <FaLinkedin /> LinkedIn Profile
              </a>
              <a href="https://github.com/siddheshbhave7" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <FaGithub /> GitHub Profile
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
