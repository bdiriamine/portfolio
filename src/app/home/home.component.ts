import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SkillsComponent } from "../skills/skills.component";
import { ProjectsComponent } from '../projects/projects.component';
import { EducationComponent } from '../education/education.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SkillsComponent, ProjectsComponent, EducationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {

}
