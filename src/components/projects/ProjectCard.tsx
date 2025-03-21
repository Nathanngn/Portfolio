import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import type { Project } from '../../data/projects';
import TechBadge from './TechBadge';
import ProjectModal from './ProjectModal';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl 
          transition-all duration-500 border border-gray-100 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent z-10" />
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <h3 className="text-xl font-bold text-white mb-2 
              transform group-hover:translate-x-2 transition-transform duration-300">
              {project.title}
            </h3>
            <div className="flex gap-3">
              {project.links?.github && (
                <a 
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="h-5 w-5" />
                </a>
              )}
              {project.links?.demo && (
                <a 
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="p-6">
          <p className="text-gray-600 mb-6 line-clamp-2">
            {project.description}
          </p>
          
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <TechBadge key={tech} tech={tech} />
              ))}
              {project.technologies.length > 3 && (
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center justify-end">
            <span className="text-blue-600 group-hover:underline text-sm font-medium">
              Voir plus de détails
            </span>
          </div>
        </div>
      </motion.div>

      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}