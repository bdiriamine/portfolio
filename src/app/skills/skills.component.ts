import { Component, OnInit } from '@angular/core';
import { Skill, SkillsService } from '../services/skills.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];
  frontEndFrameworks = ['React', 'Angular', 'Vue.js'];
  backendTechnologies = ['Node.js', 'Express.js', 'Django'];
  databases = ['MongoDB', 'MySQL', 'PostgreSQL'];
  constructor(private skillsService: SkillsService) { }

  ngOnInit(): void {
    // Fetch skills when the component initializes
    this.skillsService.getSkills().subscribe((data) => {
      this.skills = data;
    });
  }
}
