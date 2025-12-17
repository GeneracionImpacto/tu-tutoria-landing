import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Language = 'es' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguageSubject = new BehaviorSubject<Language>('es');
  public currentLanguage$ = this.currentLanguageSubject.asObservable();

  private translations: Record<Language, any> = {
    es: {
      nav: {
        home: 'Inicio',
        problem: 'Problema',
        solution: 'Solución',
        benefits: 'Beneficios',
        objectives: 'Objetivos',
        contact: 'Contacto'
      },
      hero: {
        title: 'Generación Impacto',
        subtitle: 'Conectando estudiantes para crear oportunidades',
        description: 'Una plataforma que une a estudiantes con altas calificaciones pero dificultades económicas, con estudiantes que necesitan apoyo académico en cursos desafiantes.',
        cta: 'Únete Ahora'
      },
      problem: {
        title: 'El Problema',
        description: 'Muchos estudiantes enfrentan dos desafíos críticos que pueden llevar al abandono de sus estudios:',
        point1: {
          title: 'Dificultades Económicas',
          text: 'Estudiantes con excelente rendimiento académico pero recursos económicos limitados que dificultan continuar sus estudios.'
        },
        point2: {
          title: 'Dificultades Académicas',
          text: 'Estudiantes que luchan con cursos desafiantes como Cálculo, Física, Química y Programación, perdiendo confianza y motivación.'
        },
        conclusion: 'Estos factores contribuyen significativamente a la deserción estudiantil.'
      },
      solution: {
        title: 'Nuestra Solución',
        description: 'Generación Impacto conecta a estos dos grupos de estudiantes para crear un ecosistema de apoyo mutuo:',
        point1: {
          title: 'Tutorías Personalizadas',
          text: 'Estudiantes con altas calificaciones ofrecen tutorías personalizadas a cambio de un pago justo, generando ingresos mientras ayudan a otros.'
        },
        point2: {
          title: 'Apoyo Accesible',
          text: 'Estudiantes que necesitan ayuda académica pueden acceder a tutorías de calidad a precios accesibles, mejorando su rendimiento y confianza.'
        },
        point3: {
          title: 'Comunidad Colaborativa',
          text: 'Creamos una red de apoyo estudiantil que fortalece habilidades, mejora el desempeño académico y reduce la deserción.'
        }
      },
      benefits: {
        title: 'Beneficios',
        subtitle: 'Para todos los involucrados',
        forTutors: {
          title: 'Para Tutores',
          items: [
            'Genera ingresos adicionales mientras estudias',
            'Refuerza tus conocimientos enseñando a otros',
            'Desarrolla habilidades de liderazgo y comunicación',
            'Construye tu red profesional desde la universidad'
          ]
        },
        forStudents: {
          title: 'Para Estudiantes',
          items: [
            'Accede a tutorías personalizadas y accesibles',
            'Mejora tu rendimiento en cursos desafiantes',
            'Aumenta tu confianza y motivación académica',
            'Conecta con tutores validados y confiables'
          ]
        },
        forCommunity: {
          title: 'Para la Comunidad',
          items: [
            'Reduce la deserción estudiantil',
            'Fortalece el ecosistema educativo',
            'Crea oportunidades económicas para estudiantes',
            'Fomenta la colaboración y el apoyo mutuo'
          ]
        }
      },
      objectives: {
        title: 'Nuestros Objetivos',
        description: 'Trabajamos para lograr un impacto real en la educación superior',
        items: [
          {
            title: 'Reducir la Deserción',
            text: 'Disminuir significativamente las tasas de abandono estudiantil por dificultades académicas o económicas.'
          },
          {
            title: 'Crear Oportunidades',
            text: 'Proporcionar una fuente de ingresos para estudiantes talentosos mientras apoyan a sus compañeros.'
          },
          {
            title: 'Mejorar el Rendimiento',
            text: 'Ayudar a estudiantes a superar cursos desafiantes y mejorar su confianza académica.'
          },
          {
            title: 'Construir Comunidad',
            text: 'Fomentar un ambiente colaborativo donde los estudiantes se apoyan mutuamente.'
          }
        ]
      },
      contact: {
        title: '¿Interesado?',
        subtitle: 'Únete a nuestra comunidad y sé parte del cambio',
        form: {
          name: 'Nombre completo',
          email: 'Correo electrónico',
          position: 'Posición deseada',
          positionStudent: 'Estudiante (necesito tutorías)',
          positionTutor: 'Tutor (quiero dar tutorías)',
          submit: 'Enviar',
          submitting: 'Enviando...',
          success: '¡Gracias! Nos pondremos en contacto contigo pronto.',
          error: 'Hubo un error. Por favor, intenta nuevamente.',
          required: 'Este campo es obligatorio',
          invalidEmail: 'Por favor, ingresa un correo electrónico válido',
          minLength: 'Este campo debe tener al menos 2 caracteres'
        }
      },
      footer: {
        text: 'Generación Impacto - Conectando estudiantes para crear oportunidades',
        rights: 'Todos los derechos reservados'
      }
    },
    en: {
      nav: {
        home: 'Home',
        problem: 'Problem',
        solution: 'Solution',
        benefits: 'Benefits',
        objectives: 'Objectives',
        contact: 'Contact'
      },
      hero: {
        title: 'Generación Impacto',
        subtitle: 'Connecting students to create opportunities',
        description: 'A platform that connects students with high grades but economic difficulties, with students who need academic support in challenging courses.',
        cta: 'Join Now'
      },
      problem: {
        title: 'The Problem',
        description: 'Many students face two critical challenges that can lead to dropping out:',
        point1: {
          title: 'Economic Difficulties',
          text: 'Students with excellent academic performance but limited economic resources that make it difficult to continue their studies.'
        },
        point2: {
          title: 'Academic Difficulties',
          text: 'Students struggling with challenging courses like Calculus, Physics, Chemistry, and Programming, losing confidence and motivation.'
        },
        conclusion: 'These factors significantly contribute to student dropout.'
      },
      solution: {
        title: 'Our Solution',
        description: 'Generación Impacto connects these two groups of students to create a mutual support ecosystem:',
        point1: {
          title: 'Personalized Tutoring',
          text: 'Students with high grades offer personalized tutoring in exchange for fair payment, generating income while helping others.'
        },
        point2: {
          title: 'Accessible Support',
          text: 'Students who need academic help can access quality tutoring at affordable prices, improving their performance and confidence.'
        },
        point3: {
          title: 'Collaborative Community',
          text: 'We create a student support network that strengthens skills, improves academic performance, and reduces dropout rates.'
        }
      },
      benefits: {
        title: 'Benefits',
        subtitle: 'For everyone involved',
        forTutors: {
          title: 'For Tutors',
          items: [
            'Generate additional income while studying',
            'Reinforce your knowledge by teaching others',
            'Develop leadership and communication skills',
            'Build your professional network from university'
          ]
        },
        forStudents: {
          title: 'For Students',
          items: [
            'Access personalized and affordable tutoring',
            'Improve your performance in challenging courses',
            'Increase your academic confidence and motivation',
            'Connect with validated and reliable tutors'
          ]
        },
        forCommunity: {
          title: 'For the Community',
          items: [
            'Reduces student dropout',
            'Strengthens the educational ecosystem',
            'Creates economic opportunities for students',
            'Fosters collaboration and mutual support'
          ]
        }
      },
      objectives: {
        title: 'Our Objectives',
        description: 'We work to achieve real impact in higher education',
        items: [
          {
            title: 'Reduce Dropout',
            text: 'Significantly decrease student dropout rates due to academic or economic difficulties.'
          },
          {
            title: 'Create Opportunities',
            text: 'Provide an income source for talented students while supporting their peers.'
          },
          {
            title: 'Improve Performance',
            text: 'Help students overcome challenging courses and improve their academic confidence.'
          },
          {
            title: 'Build Community',
            text: 'Foster a collaborative environment where students support each other.'
          }
        ]
      },
      contact: {
        title: 'Interested?',
        subtitle: 'Join our community and be part of the change',
        form: {
          name: 'Full name',
          email: 'Email address',
          position: 'Desired position',
          positionStudent: 'Student (I need tutoring)',
          positionTutor: 'Tutor (I want to give tutoring)',
          submit: 'Submit',
          submitting: 'Submitting...',
          success: 'Thank you! We will contact you soon.',
          error: 'There was an error. Please try again.',
          required: 'This field is required',
          invalidEmail: 'Please enter a valid email address',
          minLength: 'This field must be at least 2 characters long'
        }
      },
      footer: {
        text: 'Generación Impacto - Connecting students to create opportunities',
        rights: 'All rights reserved'
      }
    }
  };

  constructor() {
    // Load saved language preference or default to Spanish
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
      this.currentLanguageSubject.next(savedLang);
    }
  }

  getCurrentLanguage(): Language {
    return this.currentLanguageSubject.value;
  }

  setLanguage(lang: Language): void {
    this.currentLanguageSubject.next(lang);
    localStorage.setItem('language', lang);
  }

  getTranslation(key: string): string {
    const keys = key.split('.');
    let value = this.translations[this.currentLanguageSubject.value];
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) return key;
    }
    
    return value || key;
  }

  getTranslations(): any {
    return this.translations[this.currentLanguageSubject.value];
  }
}

