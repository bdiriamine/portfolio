import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit {
  stations = [
    {
      title: "Bootcamp MERN",
      institution: " GoMyCode",
      duration: " 2024"
    },
    {
      title: "Engineer's Degree in Software Engineer",
      institution: "International Multidisciplinary School (EPI)",
      duration: "2016 - 2019"
    },
    {
      title: "Diploma in Electronics, Electrotechnics, and Automation",
      institution: "Higher School of Science and Technology of Hammam Sousse (ESSTHS)",
      duration: "2012 - 2015"
    },
    {
      title: "Bachelor's Degree in Technical Sciences",
      institution: "High school Ibn Sina, Mahdia",
      duration: "2012"
    }
  ];

  activeIndex = -1; // Active station index

  ngOnInit(): void {
    this.animateStations();
  }

  animateStations(): void {
    this.stations.forEach((_, index) => {
      setTimeout(() => {
        this.activeIndex = index;
      }, index * 1500); // Animates each station every 1.5 seconds
    });
  }

  isActive(index: number): boolean {
    return index <= this.activeIndex;
  }
}