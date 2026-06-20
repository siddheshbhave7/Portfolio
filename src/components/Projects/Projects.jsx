import React, { useState } from 'react';
import './Projects.css';
import ProjectModal from './ProjectModal';
import { FaCloud, FaDatabase, FaFolderOpen, FaArrowRight } from 'react-icons/fa';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      category: "Cloud & Kubernetes",
      icon: <FaCloud />,
      title: "GitOps Kubernetes Cluster Deployment",
      subtitle: "AWS & Kubernetes Infrastructure as Code Project",
      description: "Provisioned a multi-node Kubernetes cluster on AWS EC2 using Terraform and managed app releases automatically using ArgoCD.",
      detailedDescription: "Designed a cloud-native infrastructure configuration deploying a highly available Kubernetes cluster on AWS EC2. Used Terraform to write clean Infrastructure-as-Code (IaC) files configuring custom VPC subnet routers, security firewalls, and IAM role authorizations. Implemented a GitOps continuous deployment pipeline with ArgoCD to monitor GitHub changes and sync configurations immediately to cluster nodes. Configured Prometheus metrics scraping and Grafana dashboards for monitoring performance bottlenecks.",
      highlights: [
        "Achieved 100% automated application deployments using GitOps (ArgoCD)",
        "Constructed reusable Terraform modules for provisioning multi-subnet AWS VPCs",
        "Configured alert triggers in Prometheus for real-time memory and CPU threshold breaches",
        "Secured cluster networking with specialized Kubernetes namespaces and Network Policies"
      ],
      cloudServices: ["AWS EC2", "AWS VPC", "AWS IAM", "Terraform", "Kubernetes", "ArgoCD", "Prometheus"],
      tags: ["IaC", "GitOps", "Kubernetes", "Monitoring"],
      githubUrl: "https://github.com/siddheshbhave7/k8s-gitops-aws",
      liveUrl: ""
    },
    {
      id: 2,
      category: "Backend & Systems",
      icon: <FaDatabase />,
      title: "HA Database Sync & Cache Engine",
      subtitle: "Distributed Data Synchronization Middleware",
      description: "High-throughput Node.js data sync layer utilising shared storage and cache clusters across EC2 nodes.",
      detailedDescription: "Built a high-performance synchronization service in Node.js that automatically replication schema records from MySQL to MongoDB. Solved session storage persistence across scaling clusters by deploying AWS ElastiCache (Redis) clusters. Leveraged AWS EFS filesystems mounted concurrently across EC2 servers to host persistent file assets with zero-lock collision issues. Configured PM2 for clustered application process management.",
      highlights: [
        "Boosted synchronization speeds by 35% using bulk transaction indexing",
        "Implemented centralized session caches with Redis, allowing stateless server scaling",
        "Designed multi-client file lockers on Amazon EFS with shared write permissions",
        "Maintained 99.9% application uptime using PM2 automatic cluster recovery processes"
      ],
      cloudServices: ["AWS EC2", "AWS EFS", "AWS ElastiCache (Redis)", "MySQL", "MongoDB", "PM2"],
      tags: ["Database Sync", "Caching", "Distributed Systems", "Clustering"],
      githubUrl: "https://github.com/siddheshbhave7/db-sync-cache-service",
      liveUrl: ""
    },
    {
      id: 3,
      category: "Serverless & APIs",
      icon: <FaFolderOpen />,
      title: "Serverless Media Pipeline",
      subtitle: "AWS Event-Driven Processing System",
      description: "Fully decoupled serverless pipeline that optimizes, metadata-extracts, and logs image assets.",
      detailedDescription: "Architected a decoupled, cost-optimized image processing pipeline on AWS. Created S3 event notifications that trigger AWS Lambda functions whenever assets are uploaded. The Lambda workers dynamically optimize, format, and resize graphics using sharp library. Documented extraction metadata into Amazon DynamoDB and configured AWS CloudWatch dashboards to capture worker execution telemetry.",
      highlights: [
        "Reduced image asset storage footprints by up to 60% through automated compression",
        "Eliminated idle server cost using event-driven pay-per-use AWS Lambda scripts",
        "Achieved sub-second worker execution times under concurrent spikes",
        "Integrated detailed execution tracking using CloudWatch Custom Logs"
      ],
      cloudServices: ["AWS Lambda", "AWS S3", "AWS DynamoDB", "Amazon CloudWatch", "Node.js"],
      tags: ["Serverless", "Event-Driven", "Image Processing", "NoSQL"],
      githubUrl: "https://github.com/siddheshbhave7/serverless-media-pipeline",
      liveUrl: ""
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Featured Engineering Projects</h2>
      
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card card">
            <div className="project-card-header">
              <span className="project-category">{project.category}</span>
              <div className="project-icon">{project.icon}</div>
            </div>
            <h3>{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
            <div className="project-actions">
              <button 
                onClick={() => setSelectedProject(project)} 
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                View Details <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;
