import { Laptop2, Users2, ShieldCheck, Wrench } from 'lucide-react';

export const experience = {
  company: "Malakoff Humanis",
  role: "Technicien IT de Proximité (Alternance)",
  period: "2023 - 2025",
  location: "Blois, France",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuc4O3h61Bg1wjcZTRYjDKhaJnWai8mvW8EA&s",
  responsibilities: [
    {
      icon: Laptop2,
      title: "Support Utilisateur",
      tasks: [
        "Assistance technique niveau 1 et 2 pour plus de 500 utilisateurs",
        "Résolution des incidents matériels et logiciels",
        "Gestion des demandes via ServiceNow et suivi des SLAs"
      ]
    },
    {
      icon: Users2,
      title: "Gestion de Parc",
      tasks: [
        "Déploiement et configuration des postes de travail Windows 10/11",
        "Inventaire et suivi du matériel informatique avec EasyVista",
        "Maintenance préventive et mise à jour des équipements"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Sécurité",
      tasks: [
        "Application des politiques de sécurité groupe",
        "Gestion des droits d'accès et des comptes AD",
        "Déploiement des mises à jour de sécurité critiques"
      ]
    },
    {
      icon: Wrench,
      title: "Infrastructure",
      tasks: [
        "Participation aux projets de migration Windows 11",
        "Configuration des équipements réseau et VoIP",
        "Support des solutions de visioconférence Teams"
      ]
    }
  ]
};