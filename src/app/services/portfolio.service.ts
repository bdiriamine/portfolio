import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private projects = [
    {
      name: 'Poster BHD',
      description: 'Le projet BHD Poster est une application web qui permet aux utilisateurs de gérer et de visualiser des affiches (posters) en ligne. Ce projet utilise Next.js pour le front-end et Express.js pour le back-end. Le but est de fournir une plateforme fluide et interactive pour la gestion des produits, des promotions et des commandes, tout en garantissant une architecture moderne, rapide et scalable.',
      technologies: ['Next.js', 'Node.js', "Express.js", 'MongoDB', 'Tailwind CSS'],
      imageUrl: 'assets/projects/poster BHD.png',
    },
    {
      name: 'Beauty Land',
      description: 'Beauty Land est un site e-commerce conçu pour répondre à tous vos besoins en matière de beauté et de soins. Spécialisé dans la vente de produits cosmétiques haut de gamme, cette boutique en ligne propose une large gamme de maquillages, mascaras, soins pour la peau, et plus encore.',
      technologies: ['React', 'Strapi', 'JavaScript', 'Tailwind CSS'],
      imageUrl: 'assets/projects/beautyland.png',
    },
    {
      name: 'Tunigramm',
      description: 'Tunigramm est une plateforme sociale tunisienne innovante, conçue pour connecter les utilisateurs dans un espace convivial où les discussions et les échanges d’idées prennent vie. Que ce soit pour débattre de sujets d’actualité, partager vos passions, ou simplement rencontrer des personnes partageant les mêmes intérêts, Tunigramm est le lieu parfait pour rester connecté.',
      technologies: ['Vite', 'React', 'Tailwind CSS', 'Express.js', 'MongoDB'],
      imageUrl: 'assets/projects/Tunigramm.png',
    }, {
      name: 'Easybet',
      description: 'EasyBet est une plateforme de paris sportifs et de casino en ligne qui combine le meilleur des deux mondes pour offrir une expérience de jeu complète et excitante. Que vous soyez un passionné de sport ou un amateur de jeux de casino, EasyBet vous permet de parier sur vos événements sportifs préférés et de profiter de jeux de casino variés, le tout sur une seule plateforme.',
      technologies: ['Angular', 'Bootstrap', 'Node.js', "Express.js", 'MySql'],
      imageUrl: 'assets/projects/easybet.png',
    },
    {
      name: 'Elissabet',
      description: 'Elissabet est une plateforme de paris sportifs et de casino en ligne qui combine le meilleur des deux mondes pour offrir une expérience de jeu complète et excitante. Que vous soyez un passionné de sport ou un amateur de jeux de casino, EasyBet vous permet de parier sur vos événements sportifs préférés et de profiter de jeux de casino variés, le tout sur une seule plateforme.',
      technologies: ['Angular', 'Bootstrap', 'Node.js', "Express.js", 'MySql'],
      imageUrl: 'assets/projects/elissabet.png',
    },
    {
      name: 'Africano365',
      description: 'Africano365 est une plateforme de paris sportifs et de casino en ligne qui combine le meilleur des deux mondes pour offrir une expérience de jeu complète et excitante. Que vous soyez un passionné de sport ou un amateur de jeux de casino, EasyBet vous permet de parier sur vos événements sportifs préférés et de profiter de jeux de casino variés, le tout sur une seule plateforme.',
      technologies: ['Angular', 'Bootstrap', 'Node.js', "Express.js", 'MySql'],
      imageUrl: 'assets/projects/favicon.png',
    }, {
      name: 'dorouBet',
      description: 'dorouBet est une plateforme de paris sportifs et de casino en ligne qui combine le meilleur des deux mondes pour offrir une expérience de jeu complète et excitante. Que vous soyez un passionné de sport ou un amateur de jeux de casino, EasyBet vous permet de parier sur vos événements sportifs préférés et de profiter de jeux de casino variés, le tout sur une seule plateforme.',
      technologies: ['Angular', 'Bootstrap', 'Node.js', "Express.js", 'MySql'],
      imageUrl: 'assets/projects/douro.png',
    },
    {
      name: 'Carthago (web)',
      description: 'CarthagoBet est une plateforme de paris sportifs et de casino en ligne qui combine le meilleur des deux mondes pour offrir une expérience de jeu complète et excitante. Que vous soyez un passionné de sport ou un amateur de jeux de casino, EasyBet vous permet de parier sur vos événements sportifs préférés et de profiter de jeux de casino variés, le tout sur une seule plateforme.',
      technologies: ['Angular', 'Bootstrap', 'Node.js', "Express.js", 'MySql'],
      imageUrl: 'assets/projects/carthagoweb.webp',
    },
    {
      name: 'Carthago (mobile)',
      description: 'CarthagoBet est une plateforme de paris sportifs et de casino en ligne qui combine le meilleur des deux mondes pour offrir une expérience de jeu complète et excitante. Que vous soyez un passionné de sport ou un amateur de jeux de casino, EasyBet vous permet de parier sur vos événements sportifs préférés et de profiter de jeux de casino variés, le tout sur une seule plateforme.',
      technologies: ['Angular', 'Bootstrap', 'Node.js', "Express.js", 'MySql'],
      imageUrl: 'assets/projects/carthagoweb.png',
    },
    {
      name: 'Back Office Bet',
      description: "Un Back Office Bet pour l'analyse des revenus et des jeux les plus joués est une interface de gestion pour une plateforme de paris sportifs et de casino en ligne. Ce back office permet aux administrateurs de surveiller les performances des paris et de suivre les statistiques essentielles des jeux pour optimiser les revenus.",
      technologies: ['Angular', 'Bootstrap', 'Node.js', "Express.js"],
      imageUrl: 'assets/projects/backoffice.png',
    },
    {
      name: 'Tunisia Carnaval',
      description: "Le Carnaval de la Tunisie fait référence à plusieurs événements vibrants et festifs qui se déroulent dans différentes régions du pays, souvent associés à des célébrations culturelles, des traditions locales et des influences internationales. Bien que la Tunisie n'ait pas de Carnaval national comme ceux du Brésil ou des Caraïbes, le pays organise plusieurs festivals qui présentent des éléments de carnaval, avec des parades, de la musique, des danses et des festivités.",
      technologies: ['Angular', 'Bootstrap', 'Node.js', "Express.js", 'Firebase'],
      imageUrl: 'assets/projects/a.png',
    }, {
      name: 'Elite',
      description: "Créer un projet pour générer un template de CV avec Terraform permet d’automatiser le déploiement d'un site web où vous pouvez présenter votre CV de manière dynamique et professionnelle.",
      technologies: ['Angular', 'Bootstrap', 'Node.js', "Express.js", 'Firebase'],
      imageUrl: 'assets/projects/logo.png',
    }, {
      name: 'Darsi',
      description: "Darsi est une plateforme éducative en ligne conçue pour permettre aux étudiants d'accéder facilement aux cours, de passer des examens et de suivre leur progression académique.",
      technologies: ['Ionic', 'Bootstrap', 'Node.js', "Express.js", 'Firebase'],
      imageUrl: 'assets/projects/darsi.gif',
    },
    {
      name: 'Mahdia Fruit (Web)',
      description: "Mahdia Fruit est une boutique web en ligne  spécialisée dans la vente de jus de fruits frais, offrant une gamme variée de produits à base de fruits naturels, pressés à froid et sans conservateurs. La plateforme propose une solution simple et pratique pour accéder à des jus de haute qualité, tout en promouvant les bienfaits de la consommation de fruits frais.",
      technologies: ['Angular', 'Bootstrap', 'Node.js', "Express.js", 'Firebase'],
      imageUrl: 'assets/projects/mahdiafruit.png',
    },
    {
      name: 'Mahdia Fruit (Mobile)',
      description: "Mahdia Fruit est une application  mobile en ligne  spécialisée dans la vente de jus de fruits frais, offrant une gamme variée de produits à base de fruits naturels, pressés à froid et sans conservateurs. La plateforme propose une solution simple et pratique pour accéder à des jus de haute qualité, tout en promouvant les bienfaits de la consommation de fruits frais.",
      technologies: ['Ionic', 'Bootstrap', 'Node.js', "Express.js", 'Firebase'],
      imageUrl: 'assets/projects/mahdiafruit.png',
    },

  ];
  getProjects() {
    return this.projects;
  }
}