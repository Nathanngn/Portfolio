import React from 'react';

interface TechBadgeProps {
  tech: string;
}

export default function TechBadge({ tech }: TechBadgeProps) {
  return (
    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium
      transform hover:scale-105 hover:bg-blue-100 transition-all duration-300">
      {tech}
    </span>
  );
}