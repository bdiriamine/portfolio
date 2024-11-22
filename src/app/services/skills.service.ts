import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Skill {
  name: string;
  image: string;
}
@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private skills: Skill[] = [
    { name: 'React', image: 'assets/skills/react.png' },
    { name: 'Angular', image: 'assets/skills/Angular.jpg' },
    { name: 'Next.js', image: 'assets/skills/Next.webp' },
    { name: 'Ionic', image: 'assets/skills/logo-IONIC.png' },
    { name: 'Express-js', image: 'assets/skills/express-js.png' },
    { name: 'Strapi', image: 'assets/skills/Strapi_logo.jpg' },
    { name: 'Spring boot', image: 'assets/skills/springboot-inner.svg' },
    { name: 'Node.js', image: 'assets/skills/nodejs.webp' },
    { name: 'MongoDB', image: 'assets/skills/mongodb.png' },
    { name: 'Postgresql', image: 'assets/skills/Postgresql.png' },
    { name: 'Mysql', image: 'assets/skills/mysql.png' },
    { name: 'Firebase', image: 'assets/skills/touchicon-180.png' },
    { name: 'Saas', image: 'assets/skills/saas.png' },
    { name: 'Bootstrap', image: 'assets/skills/bootstrap.jfif' },
    { name: 'Tailwind CSS', image: 'assets/skills/tailwindpng.png' },
    { name: 'JavaScript', image: 'assets/skills/javascript.png' },
    { name: 'Java', image: 'assets/skills/Java-Logo.png' },
    { name: 'Python', image: 'assets/skills/Python.webp' },
    { name: 'Typescript', image: 'assets/skills/typescript.png' },
    { name: 'Git', image: 'assets/skills/git.png' },
    { name: 'Scrum', image: 'assets/skills/scrum.png' },
    { name: 'Kanban', image: 'assets/skills/kanban.jpg' },
    { name: 'Trello', image: 'assets/skills/Trello-Logo.png' },
    { name: 'Jira', image: 'assets/skills/jira-bpm.png' },
    { name: 'HTML5', image: 'assets/skills/html5.webp' },
    { name: 'CSS3', image: 'assets/skills/CSS3.webp' },


  ];
  getSkills(): Observable<Skill[]> {
    return of(this.skills);
  }
}
