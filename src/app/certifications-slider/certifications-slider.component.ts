import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-certifications-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications-slider.component.html',
  styleUrl: './certifications-slider.component.css'
})
export class CertificationsSliderComponent implements OnInit {
  certifications = [
    { src: 'assets/paper/certificatmern.png', alt: "Software Developer Bootcamp", title: "Software Developer Bootcamp MERN Certificate", description: "2024" },
    { src: 'assets/paper/Diplome  National  d\'Ingenieur.png', alt: "National Engineering Diploma", title: "National Engineering Diploma", description: "2019" },
    { src: 'assets/paper/EPI- Prix d\'excellence PFE.png', alt: "EPI- Prix d'excellence PFE", title: "EPI - Excellence Award for Final Year Project", description: "2019" },
    { src: 'assets/paper/diplome en electronique électrotechnique et automatisme.png', alt: "Diploma in Electronics, Electrotechnics, and Automation", title: "Diploma in Electronics, Electrotechnics, and Automation", description: "2015" },
    { src: 'assets/paper/diplome baccalauréat.png', alt: "High School Diploma", title: "Bachelor's degree", description: "2012" },
    { src: 'assets/paper/attestation de travail Skillware.png', alt: "Work Certificate from Skillware", title: "Work Certificate from Skillware", description: "" },
    { src: 'assets/paper/attestation  de Stage EPI.png', alt: "Internship Certificate from EPI", title: "Internship Certificate from EPI", description: "" },
    { src: "assets/paper/attestation de Stage Peek Square.png", alt: "Internship Certificate from Peek Square", title: "Internship Certificate from Peek Square", description: "" },
    { src: 'assets/paper/attestation de Stage FITELEC.png', alt: "Internship Certificate from FITELEC", title: "Internship Certificate from FITELEC", description: "" },
    { src: 'assets/paper/attestation de stage TUNISIE TELECOM.png', alt: "Internship Certificate from TUNISIE TELECOM", title: "Internship Certificate from TUNISIE TELECOM", description: "" },
    { src: 'assets/paper/attestation de Stage STEG.png', alt: "Internship Certificate from STEG", title: "Internship Certificate from STEG", description: "" },
  ]
    ;

  groupedCertifications: any[] = [];

  ngOnInit(): void {
    this.groupedCertifications = this.groupArray(this.certifications, 3);
  }

  // Groups array into chunks of specified size
  private groupArray(array: any[], chunkSize: number): any[] {
    const grouped = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      grouped.push(array.slice(i, i + chunkSize));
    }
    return grouped;
  }
}