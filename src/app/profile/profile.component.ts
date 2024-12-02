import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  name: string = 'Mohamed Amine Bdiri';
  bio: string = 'Ingénieur Génie logiciel & developpeur Full Stack JS';
  linkedinUrl: string = 'https://www.linkedin.com/in/johndoe';
  githubUrl: string = 'https://github.com/johndoe';
  cvUrl: string = '/assets/resume Mohamed Amine Bdiri .pdf';
  cvUrlfr: string = '/assets/cv-BDIRI Mohamed Amine full stack js.pdf';

  email: string = 'bdiri.mohamedamine@gmail.com'
  textlog = "<span>"
  closetest = "</span>"
  showSection1 = false;
  showSection2 = false;
  ngOnInit(): void {
    this.progressiveDisplay();
  }

  private progressiveDisplay(): void {
    setTimeout(() => (this.showSection1 = true), 500); // Show the first section after 0.5 seconds
    setTimeout(() => (this.showSection2 = true), 1500); // Show the second section after 1.5 seconds
  }
}
