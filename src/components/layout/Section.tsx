import React, { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export default function Section({ id, className = '', children }: SectionProps) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      {children}
    </section>
  );
}