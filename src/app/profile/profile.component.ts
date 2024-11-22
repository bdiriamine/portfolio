import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  name: string = 'Mohamed Amine Bdiri';
  bio: string = 'Ingénieur Génie logiciel & developpeur Full Stack JS';
  linkedinUrl: string = 'https://www.linkedin.com/in/johndoe';
  githubUrl: string = 'https://github.com/johndoe';
  cvUrl: string = '/assets/resume MohamedAmineBdiriAnglais.pdf';
  cvUrlfr: string = '/assets/cv-BDIRIMohamedAminefullstack jsfrançais.pdf';

  email: string = 'bdiri.mohamedamine@gmail.com'
}
