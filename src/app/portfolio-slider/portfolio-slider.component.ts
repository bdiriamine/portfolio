import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-portfolio-slider',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-slider.component.html',
  styleUrl: './portfolio-slider.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PortfolioSliderComponent {
  projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      image: 'assets/project1.jpg',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      image: 'assets/project2.jpg',
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3',
      image: 'assets/project3.jpg',
    },
  ];
}