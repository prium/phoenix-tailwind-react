import illustration22 from 'assets/img/spot-illustrations/22_2.png';
import illustration22dark from 'assets/img/spot-illustrations/dark_22.png';
import illustration23 from 'assets/img/spot-illustrations/23_2.png';
import illustration23dark from 'assets/img/spot-illustrations/dark_23.png';
import illustration24 from 'assets/img/spot-illustrations/24_2.png';
import illustration24dark from 'assets/img/spot-illustrations/dark_24.png';
import blog1 from 'assets/img/blog/blog-1.png';
import blog2 from 'assets/img/blog/blog-2.png';
import blog3 from 'assets/img/blog/blog-3.png';
import blog4 from 'assets/img/blog/blog-4.png';
import gallery1 from 'assets/img/gallery/1.png';
import gallery2 from 'assets/img/gallery/2.png';
import gallery3 from 'assets/img/gallery/3.png';
import gallery4 from 'assets/img/gallery/4.png';
import gallery5 from 'assets/img/gallery/5.png';
import gallery6 from 'assets/img/gallery/6.png';
import gallery7 from 'assets/img/gallery/7.png';
import gallery8 from 'assets/img/gallery/8.png';
import gallery9 from 'assets/img/gallery/9.png';
import gallery10 from 'assets/img/gallery/10.png';
import team62 from 'assets/img/team/62.webp';
import team63 from 'assets/img/team/63.webp';
import team64 from 'assets/img/team/64.webp';
import team65 from 'assets/img/team/65.webp';
import team66 from 'assets/img/team/66.webp';
import team67 from 'assets/img/team/67.webp';
import team68 from 'assets/img/team/68.webp';
import team69 from 'assets/img/team/69.webp';

/** `Features.pug` — the three alternating image/copy rows below the intro. */
export type Feature = {
  lightImage: string;
  darkImage: string;
  /** the gold only sets `height` on the 2nd and 3rd illustration */
  imageHeight?: number;
  label: string;
  title: string;
  details: string;
  link: string;
  /** the middle row puts the illustration last on large screens */
  reverse?: boolean;
};

export type Blog = {
  id: number;
  image: string;
  views: number;
  likes: number;
  comments: number;
  category: string;
  title: string;
};

export type TeamMember = {
  id: number;
  image: string;
  name: string;
  designation: string;
};

/**
 * `[data-sl-isotope]` gallery item. `className` is the literal gold column +
 * isotope class string (Tailwind can only see class names it finds verbatim),
 * `filters` mirrors the `data-filter` values of the isotope nav.
 */
export type GalleryItem = {
  image: string;
  className: string;
  filters: string[];
};

export const defaultFeatures: Feature[] = [
  {
    lightImage: illustration22,
    darkImage: illustration22dark,
    label: 'SIGNAL',
    title: 'Recieve the signals instantly',
    details:
      'Phoenix makes it possible for you to quickly and effectively receive every signal. No need for drawn-out waiting.',
    link: '#!'
  },
  {
    lightImage: illustration23,
    darkImage: illustration23dark,
    imageHeight: 394,
    label: 'REVENUE',
    title: 'See Your Revenue Grow',
    details:
      'Grow with Phoenix. We help you with everything you might need., We make it easy and keep it simple.',
    link: '#!',
    reverse: true
  },
  {
    lightImage: illustration24,
    darkImage: illustration24dark,
    imageHeight: 394,
    label: 'REPORTS',
    title: 'Get Reports Ready',
    details:
      'With Phoenix, you can get ready reports on your growth analysis anytime. This dashboard also has all filters accessible according to your needs.',
    link: '#!'
  }
];

/** `FunFacts.pug` — countUp figures over the world-map background. */
export const funFacts = [
  {
    id: 1,
    endValue: 125,
    duration: 10,
    suffix: '+',
    lines: ['Every month, there are more', 'than 125+ sales.']
  },
  {
    id: 2,
    endValue: 308,
    duration: 10,
    suffix: 'k',
    lines: ['We have 308+ active paid.', 'subscribers.']
  },
  {
    id: 3,
    endValue: 12,
    duration: 0.5,
    lines: ['We have won 12 awards so', 'far with great success. ']
  }
];

export const galleryItems: GalleryItem[] = [
  {
    image: gallery1,
    className: 'col-6 md:col-4 lg:col-3 px-2 isotope-item fourth',
    filters: ['fourth']
  },
  {
    image: gallery2,
    className: 'col-6 md:col-4 lg:col-3 px-2 isotope-item third',
    filters: ['third']
  },
  {
    image: gallery3,
    className: 'col-6 md:col-4 lg:col-3 px-2 isotope-item second',
    filters: ['second']
  },
  {
    image: gallery5,
    className: 'col-6 md:col-4 lg:col-3 px-2 isotope-item third',
    filters: ['third']
  },
  {
    image: gallery4,
    className: 'col-6 md:col-4 lg:col-3 px-2 isotope-item third second',
    filters: ['third', 'second']
  },
  {
    image: gallery6,
    className: 'col-6 md:col-4 lg:col-3 px-2 isotope-item second',
    filters: ['second']
  },
  {
    image: gallery7,
    className: 'col-6 md:col-4 lg:col-3 px-2 isotope-item second',
    filters: ['second']
  },
  {
    image: gallery9,
    className: 'col-6 md:col-4 lg:col-6 px-2 isotope-item second',
    filters: ['second']
  },
  {
    image: gallery8,
    className: 'col-6 md:col-4 lg:col-3 px-2 isotope-item fourth',
    filters: ['fourth']
  },
  {
    image: gallery10,
    className: 'col-6 md:col-4 lg:col-6 px-2 isotope-item second',
    filters: ['second']
  }
];

export const blogs: Blog[] = [
  {
    id: 1,
    image: blog1,
    views: 2563,
    likes: 125,
    comments: 125,
    category: 'SEO',
    title: 'Top 10 ways to Ace SEO for your business'
  },
  {
    id: 2,
    image: blog2,
    views: 1256,
    likes: 325,
    comments: 32,
    category: 'Marketing',
    title: 'Top 12 Marketing strategies you can take'
  },
  {
    id: 3,
    image: blog3,
    views: 142,
    likes: 123,
    comments: 22,
    category: 'Marketing',
    title: 'The top 7 methods to improve as a marketer'
  },
  {
    id: 4,
    image: blog4,
    views: 2563,
    likes: 325,
    comments: 112,
    category: 'Tech',
    title: 'Best places for a tech job in U.S'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    image: team62,
    name: 'John Smith',
    designation: 'CEO, Global Cheat'
  },
  {
    id: 2,
    image: team63,
    name: 'Marc Chiasson',
    designation: 'Vice President'
  },
  {
    id: 3,
    image: team64,
    name: 'Lilah Lola',
    designation: 'Marketing Manager'
  },
  { id: 4, image: team65, name: 'Thomas Doe', designation: 'UX Designer' },
  {
    id: 5,
    image: team66,
    name: 'Alan Casey',
    designation: 'Front End Developer'
  },
  {
    id: 6,
    image: team67,
    name: 'Narokin Hijita',
    designation: 'CEO, Global Cheat'
  },
  {
    id: 7,
    image: team68,
    name: 'Narokin Hijita',
    designation: 'CEO, Global Cheat'
  },
  {
    id: 8,
    image: team69,
    name: 'Narokin Hijita',
    designation: 'CEO, Global Cheat'
  }
];

/** `[data-filter-nav]` above the gallery. */
export const galleryFilters = [
  { eventKey: '*', label: 'First' },
  { eventKey: 'second', label: 'Second' },
  { eventKey: 'third', label: 'Third' },
  { eventKey: 'fourth', label: 'Fourth' }
];
