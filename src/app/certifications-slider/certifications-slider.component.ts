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
    {
      src: 'assets/paper/certificatmern.webp', alt: "Software Developer Bootcamp", title: "Software Developer Bootcamp MERN Certificate", description: "2024", srcSet: 'path-to-image-small.jpg 480w, path-to-image-medium.jpg 1024w, path-to-image-large.jpg 1600w',
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    },
    {
      src: 'assets/paper/Diplome  National  d\'Ingenieur.webp', alt: "National Engineering Diploma", title: "National Engineering Diploma", description: "2019", srcSet: 'path-to-image-small.jpg 480w, path-to-image-medium.jpg 1024w, path-to-image-large.jpg 1600w',
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    },
    {
      src: 'assets/paper/EPI- Prix d\'excellence PFE.webp', alt: "EPI- Prix d'excellence PFE", title: "EPI - Excellence Award for Final Year Project", description: "2019", srcSet: 'path-to-image-small.jpg 480w, path-to-image-medium.jpg 1024w, path-to-image-large.jpg 1600w',
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    },
    {
      src: 'assets/paper/diplome en electronique électrotechnique et automatisme.webp', alt: "Diploma in Electronics, Electrotechnics, and Automation", title: "Diploma in Electronics, Electrotechnics, and Automation", description: "2015", srcSet: 'path-to-image-small.jpg 480w, path-to-image-medium.jpg 1024w, path-to-image-large.jpg 1600w',
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    },
    {
      src: 'assets/paper/diplome baccalauréat.webp', alt: "High School Diploma", title: "Bachelor's degree", description: "2012",
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    },
    {
      src: 'assets/paper/attestation de travail Skillware.webp', alt: "Work Certificate from Skillware", title: "Work Certificate from Skillware", description: "",
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    },
    {
      src: 'assets/paper/attestation  de Stage EPI.webp', alt: "Internship Certificate from EPI", title: "Internship Certificate from EPI", description: "",
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    },
    {
      src: "assets/paper/attestation de Stage Peek Square.webp", alt: "Internship Certificate from Peek Square", title: "Internship Certificate from Peek Square", description: "",
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    },
    {
      src: 'assets/paper/attestation de Stage FITELEC.webp', alt: "Internship Certificate from FITELEC", title: "Internship Certificate from FITELEC", description: "",
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    },
    {
      src: 'assets/paper/attestation de stage TUNISIE TELECOM.webp', alt: "Internship Certificate from TUNISIE TELECOM", title: "Internship Certificate from TUNISIE TELECOM", description: "",
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    },
    {
      src: 'assets/paper/attestation de Stage STEG.webp', alt: "Internship Certificate from STEG", title: "Internship Certificate from STEG", description: "",
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    },
  ]
    ;

  groupedCertifications: any[] = [];

  ngOnInit(): void {
    this.groupedCertifications = this.groupArray(this.certifications, 3);
  }
  handleImageLoad(event: Event): void {
    const img = event.target as HTMLImageElement;
    const loader = img.previousElementSibling as HTMLElement; // Reference the spinner loader
    loader.style.display = 'none'; // Hide the loader
    img.classList.remove('d-none'); // Show the image
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