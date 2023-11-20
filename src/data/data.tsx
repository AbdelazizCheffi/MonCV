import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'MonCV',
  description: "Abdelaziz Cheffi",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Abdelaziz Cheffi`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      Actuellement étudiant en <strong className="text-stone-100">Master 2</strong>, spécialisé en Analyse de Données, je suis à la recherche d'un
        <strong className="text-stone-100"> stage de 6 mois disponible dès janvier</strong>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      Mon parcours académique et mes compétences techniques,associée à ma rigueur et à mon souci du détail, me prédispose à apporter une contribution de
grande valeur à votre équipe
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Actuellement étudiant en Master 2 spécialisé en Analyse de Données, je suis à la recherche d'un
  stage de 6 mois disponible dès janvier. Mon parcours académique et mes compétences techniques,
  associée à ma rigueur et à mon souci du détail, me prédispose à apporter une contribution de
  grande valeur à votre équipe.
  `,
  aboutItems: [
    {label: 'Location', text: 'Lille, Wattignies', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationalité', text: 'Marocain', Icon: FlagIcon},
    {label: 'Intérêts', text: 'Technologies, Films, Jeux video', Icon: SparklesIcon},
    {label: 'Education', text: 'Université de Lille', Icon: AcademicCapIcon},
    
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Langues',
    skills: [
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'Francais',
        level: 7,
      },
      {
        name: 'Arabe',
        level: 7,
      },
    ],
  },
  {
    name: 'Web analyst',
    skills: [
      {
        name: 'Power BI',
        level: 9,
      },
      {
        name: 'Python',
        level: 7,
      },
      {
        name: 'Google analytics 4',
        level: 6,
      },
    ],
  },
  {
    name: 'Web development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Laravel',
        level: 6,
      },
      {
        name: 'Symfony',
        level: 4,
      },
    ],
  },
  {
    name: 'Soft skills',
    skills: [
      {
        name: "Travail d'équipe ",
        level: 9,
      },
      {
        name: 'Adaptabilité ',
        level: 7,
      },
      {
        name: 'Communication efficace',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2022 - 2024',
    location: 'Lille- France',
    title: 'Master MIASHS parcours Web analyst',
    content: <p>Visualisation et interprétation des données, Tests A/B et expérimentation, Développement
    web, Exploration et analyse de données, Analyse marketing</p>,
  },
  {
    date: '2015 - 2020',
    location: 'Tétouan - Maroc',
    title: 'Diplôme ingénieur informatique',
    content: <p>Ecole Nationale des Sciences Appliquées de Tétouan</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2023 (2 mois) ',
    location: 'Look & style / Lille- France ',
    title: 'Stage Web analyste ',
    content: (
      <p>
        Au cours de mon stage de 2 mois en tant qu'analyste web, j'ai amélioré un site de
commerce électronique Shopify en optimisant les données des produits et en renforçant
les stratégies de gestion des stocks et de tarification.

<b>Tâches effectuées :</b>

- Nettoyer et formater les données des produits dans des feuilles de calcul pour assurer
leur cohérence et leur précision avant de les intégrer à Shopify.
- Intégration d'API pour automatiser le téléchargement et la synchronisation des données
des produits entre les feuilles de calcul et la boutique Shopify.
- Configuration des règles de gestion des stocks dans Shopify pour surveiller les niveaux
de stock et déclencher des notifications en cas de stock faible.

      </p>
    ),
  },
  {
    date: '2021 - 2022 (6 mois) ',
    location: 'SUPDATA / Casablanca - Maroc ',
    title: 'Consultant Relation Clients',
    content: (
      <p>
        J'ai travaillé chez SUPDATA sur un projet visant à concevoir et développer une plateforme
de gestion des tickets clients pour un service CRM. Dans ce cadre, j'ai rejoint l'équipe de
support pour aider à résoudre les tickets clients et assurer la maintenance du site web de
l'entreprise.

<b>Tâches effectuées :</b>

- Gestion des tickets de support de niveau 1 et niveau 2 en répondant aux demandes des
utilisateurs conformément aux directives de niveau de service (SLA).
- Assistance technique à distance en utilisant l'outil AnyDesk pour se connecter aux
serveurs des clients
- Conception et mise en place de tableaux de bord basés sur l'analyse des indicateurs
clés de performance (KPI) en utilisant les données des tickets clients pour suivre la
performance de l'entreprise.

      </p> 
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/'},
];
