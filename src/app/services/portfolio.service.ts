import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private projects = [
    {
      name: 'Poster BHD',
      description: 'The BHD Poster project is a web application that allows users to manage and view posters online. This project uses Next.js for the front-end and Express.js for the back-end. The goal is to provide a fluid and interactive platform for managing products, promotions and orders, while ensuring a modern, fast and scalable architecture.',
      technologies: ['Next.js', 'Node.js', "Express.js", 'MongoDB', 'Tailwind CSS'],
      imageUrl: 'assets/projects/poster BHD.png',
    },
    {
      name: 'Beauty Land',
      description: 'Beauty Land is an e-commerce site designed to meet all your beauty and personal care needs. Specializing in the sale of high-end cosmetic products, this online store offers a wide range of makeup, mascaras, skin care, and more.',
      technologies: ['React', 'Strapi', 'JavaScript', 'Tailwind CSS'],
      imageUrl: 'assets/projects/beautyland.png',
    },
    {
      name: 'Tunigramm',
      description: 'Tunigramm is an innovative Tunisian social platform, designed to connect users in a friendly space where discussions and exchanges of ideas come to life. Whether it is to debate current topics, share your passions, or simply meet people with similar interests, Tunigramm is the perfect place to stay connected.',
      technologies: ['Vite', 'React', 'Tailwind CSS', 'Express.js', 'MongoDB'],
      imageUrl: 'assets/projects/Tunigramm.png',
    }, {
      name: 'Easybet',
      description: 'EasyBet is an online sports betting and casino platform that combines the best of both worlds to offer a complete and exciting gaming experience. Whether you are a sports enthusiast or a casino games lover, EasyBet allows you to bet on your favorite sporting events and enjoy a variety of casino games, all on one platform.',
      technologies: ['Angular', 'Bootstrap', 'Node.js', "Express.js", 'MySql'],
      imageUrl: 'assets/projects/easybet.png',
    },
    {
      name: 'Elissabet',
      description: 'Elissabet is an online sports betting and casino platform that combines the best of both worlds to offer a complete and exciting gaming experience. Whether you are a sports enthusiast or a casino games lover, EasyBet allows you to bet on your favorite sporting events and enjoy a variety of casino games, all on one platform.',
      technologies: ['Angular', 'Bootstrap', 'Node.js', "Express.js", 'MySql'],
      imageUrl: 'assets/projects/elissabet.png',
    },
    {
      name: 'Africano365',
      description: 'Africano365 is an online sports betting and casino platform that combines the best of both worlds to offer a complete and exciting gaming experience. Whether you are a sports enthusiast or a casino games lover, EasyBet allows you to bet on your favorite sporting events and enjoy a variety of casino games, all on one platform.',
      technologies: ['Angular', 'Bootstrap', 'Node.js', "Express.js", 'MySql'],
      imageUrl: 'assets/projects/favicon.png',
    }, {
      name: 'dorouBet',
      description: 'dorouBet is an online sports betting and casino platform that combines the best of both worlds to offer a complete and exciting gaming experience. Whether you are a sports enthusiast or a casino games lover, EasyBet allows you to bet on your favorite sporting events and enjoy a variety of casino games, all on one platform.',
      technologies: ['Angular', 'Bootstrap', 'Node.js', "Express.js", 'MySql'],
      imageUrl: 'assets/projects/douro.png',
    },
    {
      name: 'Carthago (web)',
      description: 'Carthago is an online sports betting and casino platform that combines the best of both worlds to offer a complete and exciting gaming experience. Whether you are a sports enthusiast or a casino games lover, EasyBet allows you to bet on your favorite sporting events and enjoy a variety of casino games, all on one platform.',
      technologies: ['Angular', 'Bootstrap', 'Node.js', "Express.js", 'MySql'],
      imageUrl: 'assets/projects/carthagoweb.webp',
    },
    {
      name: 'Carthago (mobile)',
      description: 'Carthago is an online application sports betting and casino platform that combines the best of both worlds to offer a complete and exciting gaming experience. Whether you are a sports enthusiast or a casino games lover, EasyBet allows you to bet on your favorite sporting events and enjoy a variety of casino games, all on one platform.',
      technologies: ['ionic', 'Bootstrap', 'Node.js', "Express.js", 'MySql'],
      imageUrl: 'assets/projects/carthagoweb.png',
    },
    {
      name: 'Back Office Bet',
      description: "A Bet Back Office for Revenue and Most Played Games Analysis is a management interface for an online sports betting and casino platform. This back office allows administrators to monitor betting performance and track essential game statistics to optimize revenue.",
      technologies: ['Angular', 'Bootstrap', 'Node.js', "Express.js"],
      imageUrl: 'assets/projects/backoffice.png',
    },
    {
      name: 'Tunisia Carnaval',
      description: "Tunisia's Carnival refers to several vibrant and festive events that take place in different regions of the country, often associated with cultural celebrations, local traditions, and international influences. Although Tunisia does not have a national Carnival like those in Brazil or the Caribbean, the country does hold several festivals that feature elements of carnival, with parades, music, dancing, and festivities.",
      technologies: ['Angular', 'Bootstrap', 'Node.js', "Express.js", 'Firebase'],
      imageUrl: 'assets/projects/a.png',
    }, {
      name: 'Elite',
      description: "Creating a project to generate a CV template with Terraform allows you to automate the deployment of a website where you can present your CV in a dynamic and professional way.",
      technologies: ['Angular', 'Bootstrap', 'Node.js', "Express.js", 'Firebase'],
      imageUrl: 'assets/projects/logo.png',
    }, {
      name: 'Darsi',
      description: "Darsi is an online educational platform designed to make it easy for students to access courses, take exams, and track their academic progress.",
      technologies: ['Ionic', 'Bootstrap', 'Node.js', "Express.js", 'Firebase'],
      imageUrl: 'assets/projects/darsi.gif',
    },
    {
      name: 'Mahdia Fruit (Web)',
      description: "Mahdia Fruit is an online web store specializing in the sale of fresh fruit juices, offering a varied range of products based on natural fruits, cold pressed and without preservatives. The platform offers a simple and practical solution to access high-quality juices, while promoting the benefits of consuming fresh fruit.",
      technologies: ['Angular', 'Bootstrap', 'Node.js', "Express.js", 'Firebase'],
      imageUrl: 'assets/projects/mahdiafruit.png',
    },
    {
      name: 'Mahdia Fruit (Mobile)',
      description: "Mahdia Fruit is an online mobile application specializing in the sale of fresh fruit juices, offering a varied range of products based on natural fruits, cold pressed and without preservatives. The platform offers a simple and practical solution to access high-quality juices, while promoting the benefits of consuming fresh fruits.",
      technologies: ['Ionic', 'Bootstrap', 'Node.js', "Express.js", 'Firebase'],
      imageUrl: 'assets/projects/mahdiafruit.png',
    },

  ];
  getProjects() {
    return this.projects;
  }
}