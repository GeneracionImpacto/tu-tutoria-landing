import { Component, HostListener } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isScrolled = false;
  isMobileMenuOpen = false;
  currentLanguage: string = 'es';

  constructor(public languageService: LanguageService) {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Altura del navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    this.isMobileMenuOpen = false;
  }

  toggleLanguage(): void {
    const newLang = this.currentLanguage === 'es' ? 'en' : 'es';
    this.languageService.setLanguage(newLang);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  onSignIn(): void {
    // Redirigir a la plataforma de Sign In
    window.open('https://tu-plataforma.com/signin', '_blank');
  }

  onSignUp(): void {
    // Redirigir a la plataforma de Sign Up
    window.open('https://tu-plataforma.com/signup', '_blank');
  }
}