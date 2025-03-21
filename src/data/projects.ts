export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  tasks: string[];
  procedureUrl: string;
  links?: {
    github?: string;
    demo?: string;
  };
}

export const projects: Project[] = [
  {
    title: "DHCP RELAY",
    description: "Mise en place d'une infrastructure réseau complète pour une PME de 50 postes, incluant la sécurisation et l'optimisation des ressources.",
    technologies: ["Windows Server", "Active Directory", "VLAN", "Pare-feu pfSense"],
    image: "https://images.unsplash.com/photo-1520869562399-e772f042f422?auto=format&fit=crop&q=80&w=1200",
    tasks: [
      "Configuration des services Active Directory et stratégies de groupe",
      "Mise en place d'une stratégie de sauvegarde complète",
      "Sécurisation du réseau avec pfSense et configuration des VLANs"
    ],
    procedureUrl: "/procedures/infrastructure-reseau.pdf",
    links: {
      github: "https://github.com/username/network-infrastructure",
      demo: "https://example.com/network-demo"
    }
  },
  {
    title: "Système de Supervision",
    description: "Déploiement d'une solution de supervision moderne pour surveiller l'infrastructure IT en temps réel.",
    technologies: ["Zabbix", "Grafana", "Docker", "Linux"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    tasks: [
      "Installation et configuration de Zabbix avec haute disponibilité",
      "Création de tableaux de bord personnalisés avec Grafana",
      "Mise en place d'un système d'alertes intelligent"
    ],
    procedureUrl: "/procedures/supervision.pdf"
  },
  {
    title: "Sécurisation Infrastructure",
    description: "Audit complet et renforcement de la sécurité d'une infrastructure existante selon les bonnes pratiques.",
    technologies: ["Nessus", "Wireshark", "Snort", "OpenVAS"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
    tasks: [
      "Réalisation d'un audit de sécurité approfondi",
      "Implémentation d'un IDS/IPS avec Snort",
      "Hardening des serveurs et mise en conformité"
    ],
    procedureUrl: "/procedures/securisation.pdf"
  },
  {
    title: "Migration Cloud Azure",
    description: "Projet de migration d'une infrastructure on-premise vers Microsoft Azure avec mise en place d'une architecture hybride.",
    technologies: ["Microsoft Azure", "Azure AD", "Terraform", "PowerShell"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    tasks: [
      "Analyse et planification de la migration",
      "Déploiement d'une architecture cloud sécurisée",
      "Configuration de la synchronisation Azure AD",
      "Automatisation avec Terraform et PowerShell"
    ],
    procedureUrl: "/procedures/migration-azure.pdf"
  },
  {
    title: "Virtualisation VMware",
    description: "Mise en place d'une infrastructure virtualisée haute disponibilité avec VMware vSphere.",
    technologies: ["VMware vSphere", "vCenter", "vSAN", "NSX"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200",
    tasks: [
      "Installation et configuration de l'infrastructure VMware",
      "Mise en place du cluster HA/DRS",
      "Configuration du stockage vSAN",
      "Déploiement de la virtualisation réseau avec NSX"
    ],
    procedureUrl: "/procedures/virtualisation-vmware.pdf"
  }
];