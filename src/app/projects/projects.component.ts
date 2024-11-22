import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectsComponent implements OnInit {
  projects: { name: string; description: string; imageUrl: string; technologies: string[] }[] = [];

  constructor(private projectsService: PortfolioService) { }

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
  }
}