import React, { useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCloud, FaServer, FaCogs } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    // Disable body scrolling when modal is active
    document.body.style.overflow = 'hidden';
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal-content card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <FaTimes />
        </button>
        
        <div className="modal-body">
          <span className="modal-badge">{project.category}</span>
          <h2>{project.title}</h2>
          <p className="modal-subtitle">{project.subtitle}</p>
          
          <div className="modal-grid">
            <div className="modal-main-details">
              <h4>System Architecture Overview</h4>
              <p className="modal-description">{project.detailedDescription}</p>
              
              <h4>Key Architecture Highlights</h4>
              <ul className="modal-highlights">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>
                    <FaCogs className="highlight-bullet-icon" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="modal-sidebar-details">
              <h4><FaCloud /> Cloud Services Used</h4>
              <div className="cloud-list">
                {project.cloudServices.map((service, idx) => (
                  <span key={idx} className="cloud-service-badge">
                    <FaServer className="badge-icon" /> {service}
                  </span>
                ))}
              </div>

              <h4>Technologies</h4>
              <div className="tech-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx}>{tag}</span>
                ))}
              </div>

              <div className="modal-actions">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    <FaGithub /> View Source
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
