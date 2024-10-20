import React from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Coindex",
    year: "2023",
    description:
      "A command-line interface tool for fetching and analyzing cryptocurrency data in real-time.",
    previewUrl: "#",
    githubUrl: "https://github.com/Suuraw/Coindex",
  },
  {
    title: "AgroPredict",
    year: "2022",
    description:
      "AI-powered agricultural platform for crop prediction, disease detection, and farm management.",
    previewUrl: "#",
    githubUrl: "https://github.com/Suuraw/AgroPredict",
  },
  {
    title: "Bookshop",
    year: "2021",
    description:
      "An online bookstore application with inventory management and recommendation system.",
    previewUrl: "#",
    githubUrl: "https://github.com/Suuraw/Book-shop-automation-backend",
  },
];

export default function ProjectSection() {
  return (
    <section style={{ backgroundColor: 'black', color: 'white', padding: '16px' }} id="projects">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '48px' }}>
          My Projects
        </h2>
        {projects.map((project, index) => (
          <div key={index} style={{ marginBottom: '64px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{project.title}</h3>
              <span style={{ fontSize: '1.25rem' }}> / {project.year}</span>
            </div>
            <p style={{ color: '#A0AEC0', marginBottom: '16px', maxWidth: '800px' }}>
              {project.description}
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a
                href={project.previewUrl}
                style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'white', textDecoration: 'none' }}
                onMouseOver={(e) => (e.currentTarget.style.color = '#A0AEC0')}
                onMouseOut={(e) => (e.currentTarget.style.color = 'white')}
              >
                PREVIEW <ArrowUpRight size={16} />
              </a>
              <a
                href={project.githubUrl}
                style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'white', textDecoration: 'none' }}
                onMouseOver={(e) => (e.currentTarget.style.color = '#A0AEC0')}
                onMouseOut={(e) => (e.currentTarget.style.color = 'white')}
              >
                GITHUB <ArrowUpRight size={16} />
              </a>
            </div>
            {/* Very thin white line after each project */}
            <hr style={{ borderColor: 'rgba(255, 255, 255, 0.2)', height: '0px', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderStyle: 'solid', marginTop: '70px', marginBottom: '70px' }} />
          </div>
        ))}
      </div>
    </section>
  );
}