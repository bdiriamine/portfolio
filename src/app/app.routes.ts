import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'projects', loadComponent: () => import('./projects/projects.component').then((c) => c.ProjectsComponent) },
    { path: 'skills', loadComponent: () => import('./skills/skills.component').then((c) => c.SkillsComponent) },
    { path: 'education', loadComponent: () => import('./education/education.component').then((c) => c.EducationComponent) },
];
