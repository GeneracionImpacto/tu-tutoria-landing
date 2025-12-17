import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

type Testimonial = {
  name: string;
  roleLine: string;   // carrera / rol
  comment: string;
  rating: number;     // 1..5
};

type TabKey = 'students' | 'tutors';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent {
  activeTab: TabKey = 'students';

  constructor(public languageService: LanguageService) {}

  setTab(tab: TabKey): void {
    this.activeTab = tab;
  }

  get activeList(): Testimonial[] {
    return this.activeTab === 'students' ? this.studentTestimonials : this.tutorTestimonials;
  }

  get studentTestimonials(): Testimonial[] {
    return [
      {
        name: this.languageService.getTranslation('testimonials.students.t1.name'),
        roleLine: this.languageService.getTranslation('testimonials.students.t1.career'),
        comment: this.languageService.getTranslation('testimonials.students.t1.comment'),
        rating: 5,
      },
      {
        name: this.languageService.getTranslation('testimonials.students.t2.name'),
        roleLine: this.languageService.getTranslation('testimonials.students.t2.career'),
        comment: this.languageService.getTranslation('testimonials.students.t2.comment'),
        rating: 5,
      },
      {
        name: this.languageService.getTranslation('testimonials.students.t3.name'),
        roleLine: this.languageService.getTranslation('testimonials.students.t3.career'),
        comment: this.languageService.getTranslation('testimonials.students.t3.comment'),
        rating: 5,
      },
    ];
  }

  get tutorTestimonials(): Testimonial[] {
    return [
      {
        name: this.languageService.getTranslation('testimonials.tutors.t1.name'),
        roleLine: this.languageService.getTranslation('testimonials.tutors.t1.role'),
        comment: this.languageService.getTranslation('testimonials.tutors.t1.comment'),
        rating: 5,
      },
      {
        name: this.languageService.getTranslation('testimonials.tutors.t2.name'),
        roleLine: this.languageService.getTranslation('testimonials.tutors.t2.role'),
        comment: this.languageService.getTranslation('testimonials.tutors.t2.comment'),
        rating: 5,
      },
      {
        name: this.languageService.getTranslation('testimonials.tutors.t3.name'),
        roleLine: this.languageService.getTranslation('testimonials.tutors.t3.role'),
        comment: this.languageService.getTranslation('testimonials.tutors.t3.comment'),
        rating: 5,
      },
    ];
  }

  getStars(rating: number): number[] {
    return Array.from({ length: 5 }, (_, i) => (i < rating ? 1 : 0));
  }

  getInitials(fullName: string): string {
    const parts = fullName.trim().split(' ').filter(Boolean);
    const first = parts[0]?.[0] ?? '';
    const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
    return (first + last).toUpperCase();
  }
}
