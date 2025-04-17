import React from 'react';
import Section from './layout/Section';
import Container from './layout/Container';
import SectionTitle from './ui/SectionTitle';
import { Rss, BookOpen, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const watchCategories = [
  {
    icon: Rss,
    title: "Flux RSS",
    description: "Agrégateur de flux RSS pour suivre l'actualité IT",
    items: []
  },
  {
    icon: BookOpen,
    title: "Réseaux sociaux",
    description: "Twitter (X), Youtube, LinkedIn",
    items: []
  },
  {
    icon: Globe,
    title: "Sites Spécialisés",
    description: "Sites d'actualités et de ressources IT",
    items: []
  }
];

export default function TechWatch() {
  return (
    <Section id="techwatch" className="bg-gradient-to-br from-gray-900 to-gray-800">
      <Container>
        <SectionTitle 
          title="Veille Informatique" 
          subtitle=""
          className="text-white"
        />
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {watchCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 
                    transition-all duration-300 border border-white/10 hover:border-blue-500/30
                    group cursor-pointer"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 
                        transition-colors">
                        <Icon className="h-6 w-6 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{category.description}</p>
                    
                    <div className="flex-grow">
                      <ul className="space-y-2">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="text-gray-300 hover:text-blue-400 transition-colors">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}