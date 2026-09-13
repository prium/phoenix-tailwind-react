import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faGripVertical,
  faMattressPillow,
  faTh,
  faThLarge
} from '@fortawesome/free-solid-svg-icons';

import Img42 from 'assets/img/gallery/42.png';

import Img65 from 'assets/img/gallery/65.png';
import Img66 from 'assets/img/gallery/66.png';
import Img67 from 'assets/img/gallery/67.png';
import Img68 from 'assets/img/gallery/68.png';
import Img69 from 'assets/img/gallery/69.png';

import Img70 from 'assets/img/gallery/70.png';
import Img71 from 'assets/img/gallery/71.png';
import Img72 from 'assets/img/gallery/72.png';
import Img73 from 'assets/img/gallery/73.png';
import Img74 from 'assets/img/gallery/74.png';
import Img75 from 'assets/img/gallery/75.png';
import Img76 from 'assets/img/gallery/76.png';
import Img77 from 'assets/img/gallery/77.png';
import Img78 from 'assets/img/gallery/78.png';
import Img79 from 'assets/img/gallery/79.png';

import Img80 from 'assets/img/gallery/80.png';
import Img81 from 'assets/img/gallery/81.png';
import Img82 from 'assets/img/gallery/82.png';
import Img83 from 'assets/img/gallery/83.png';
import Img84 from 'assets/img/gallery/84.png';
import Img85 from 'assets/img/gallery/85.png';
import Img86 from 'assets/img/gallery/86.png';
import Img87 from 'assets/img/gallery/87.png';
import Img88 from 'assets/img/gallery/88.png';
import Img89 from 'assets/img/gallery/89.png';
import large89 from 'assets/img/gallery/89_large.png';

import Img90 from 'assets/img/gallery/90.png';
import Img91 from 'assets/img/gallery/91.png';
import large91 from 'assets/img/gallery/91_large.png';
import Img92 from 'assets/img/gallery/92.png';
import large92 from 'assets/img/gallery/92_large.png';
import Img93 from 'assets/img/gallery/93.png';
import Img94 from 'assets/img/gallery/94.png';
import Img95 from 'assets/img/gallery/95.png';
import large95 from 'assets/img/gallery/95_large.png';
import Img96 from 'assets/img/gallery/96.png';
import Img97 from 'assets/img/gallery/97.png';
import Img98 from 'assets/img/gallery/98.png';
import Img99 from 'assets/img/gallery/99.png';

import Img100 from 'assets/img/gallery/100.png';
import Img101 from 'assets/img/gallery/101.png';
import Img102 from 'assets/img/gallery/102.png';
import Img103 from 'assets/img/gallery/103.png';
import Img104 from 'assets/img/gallery/104.png';
import Img105 from 'assets/img/gallery/105.png';
import Img106 from 'assets/img/gallery/106.png';
import large106 from 'assets/img/gallery/106_large.png';
import large107 from 'assets/img/gallery/107_large.png';
import Img108 from 'assets/img/gallery/108.png';
import large108 from 'assets/img/gallery/108_large.png';
import Img109 from 'assets/img/gallery/109.png';
import Img111 from 'assets/img/gallery/111.png';
import Img112 from 'assets/img/gallery/112.png';
import Img113 from 'assets/img/gallery/113.png';
import Img114 from 'assets/img/gallery/114.png';
import Img115 from 'assets/img/gallery/115.png';
import Img116 from 'assets/img/gallery/116.png';
import Img117 from 'assets/img/gallery/117.png';
import Img119 from 'assets/img/gallery/119.png';

import poster1 from 'assets/video/1.png';
import poster2 from 'assets/video/2.png';
import poster3 from 'assets/video/3.png';
import poster4 from 'assets/video/4.png';

import Vid1 from 'assets/video/1.mp4';
import Vid2 from 'assets/video/2.mp4';
import Vid3 from 'assets/video/3.mp4';
import Vid4 from 'assets/video/4.mp4';
import Vid96 from 'assets/img/gallery/96.mp4';
import Vid97 from 'assets/img/gallery/97.mp4';
import Vid99 from 'assets/img/gallery/99.mp4';

/**
 * Data for the gallery module. Image sets, titles, counts, order and the
 * literal grid/aspect class strings are copied verbatim from the gold pug in
 * `../phoenix-tailwind/src/pug/apps/gallery/*.pug`.
 */

/** Filter values are the gold `data-filter` classes without the leading dot. */
export interface GalleryTab {
  filter: string;
  label: string;
}

/** `GalleryTabs` mixin — src/pug/mixins/gallery/GalleryTabs.pug */
export const galleryTabs: GalleryTab[] = [
  { filter: '*', label: 'All' },
  { filter: 'ecommerce', label: 'Ecommerce' },
  { filter: 'project-management', label: 'Project Management' },
  { filter: 'photography', label: 'Photography' }
];

/** The album page has its own image/video filter nav. */
export const albumTabs: GalleryTab[] = [
  { filter: '*', label: 'All' },
  { filter: 'image', label: 'Image' },
  { filter: 'video', label: 'Video' }
];

export type GalleryView =
  | 'column'
  | 'grid'
  | 'grid-title'
  | 'masonry'
  | 'slider';

export interface GalleryLayoutMenuItem {
  view: GalleryView;
  /** `data-bs-title` of the gold tooltip */
  title: string;
  icon: IconDefinition;
  link: string;
}

/** `GalleryLayoutMenu` mixin — src/pug/mixins/gallery/GalleryLayoutMenu.pug */
export const galleryLayoutMenuItems: GalleryLayoutMenuItem[] = [
  {
    view: 'column',
    title: 'Column view',
    icon: faGripVertical,
    link: '/apps/gallery/gallery-column'
  },
  {
    view: 'grid',
    title: 'Grid view',
    icon: faThLarge,
    link: '/apps/gallery/gallery-grid'
  },
  {
    view: 'grid-title',
    title: 'Grid view with title',
    icon: faThLarge,
    link: '/apps/gallery/grid-with-title'
  },
  {
    view: 'masonry',
    title: 'Masonry view',
    icon: faTh,
    link: '/apps/gallery/gallery-masonry'
  },
  {
    view: 'slider',
    title: 'Slider view',
    icon: faMattressPillow,
    link: '/apps/gallery/gallery-slider'
  }
];

export interface AlbumMedia {
  id: number;
  src: string;
  poster?: string;
  type?: 'image' | 'video';
  /** literal `photo-stack-*` class from the gold */
  className: string;
}

export interface AlbumItem {
  id: number;
  title: string;
  count: number;
  /** gold filter class — `image` or `video` */
  category: string;
  media: AlbumMedia[];
}

export interface GalleryItem {
  id: number;
  /** thumbnail rendered on the page */
  image: string;
  /** lightbox source (gold `largeImg` / `LargeImg`) */
  largeImage: string;
  video?: string;
  title: string;
  /** gold filter class, e.g. `project-management` */
  category: string;
  /** literal grid column classes copied from the gold pug */
  className?: string;
}

export interface GallerySliderItem {
  id: number;
  image: string;
  video?: string;
  title: string;
  /** literal slide aspect class from the gold — sizes the slide in swiper.css */
  aspect: 'landscape' | 'portrait' | 'square';
  /** space separated gold filter classes */
  category: string;
}

/** apps/gallery/album.pug */
export const albumItems: AlbumItem[] = [
  {
    id: 1,
    title: 'Trip',
    count: 43,
    category: 'image',
    media: [
      { id: 1, src: Img109, className: 'photo-stack-top' },
      { id: 2, src: Img77, className: 'photo-stack-middle' },
      { id: 3, src: Img78, className: 'photo-stack-bottom' }
    ]
  },
  {
    id: 2,
    title: 'Hotel',
    count: 23,
    category: 'video',
    media: [
      {
        id: 4,
        src: Vid1,
        poster: poster1,
        type: 'video',
        className: 'photo-stack-top'
      },
      { id: 5, src: Img81, className: 'photo-stack-middle' },
      { id: 6, src: Img80, className: 'photo-stack-bottom' }
    ]
  },
  {
    id: 3,
    title: 'Trip Details',
    count: 32,
    category: 'image',
    media: [
      { id: 7, src: Img111, className: 'photo-stack-top' },
      { id: 8, src: Img82, className: 'photo-stack-middle' },
      { id: 9, src: Img83, className: 'photo-stack-bottom' }
    ]
  },
  {
    id: 4,
    title: 'Landing',
    count: 12,
    category: 'video',
    media: [
      {
        id: 10,
        src: Vid2,
        poster: poster2,
        type: 'video',
        className: 'photo-stack-top'
      },
      { id: 11, src: Img84, className: 'photo-stack-middle' },
      { id: 12, src: Img85, className: 'photo-stack-bottom' }
    ]
  },
  {
    id: 5,
    title: 'E commerce',
    count: 56,
    category: 'image',
    media: [
      { id: 13, src: Img112, className: 'photo-stack-top' },
      { id: 14, src: Img86, className: 'photo-stack-middle' },
      { id: 15, src: Img87, className: 'photo-stack-bottom' }
    ]
  },
  {
    id: 6,
    title: 'Products',
    count: 45,
    category: 'image',
    media: [
      { id: 16, src: Img113, className: 'photo-stack-top' },
      { id: 17, src: Img88, className: 'photo-stack-middle' },
      { id: 18, src: Img89, className: 'photo-stack-bottom' }
    ]
  },
  {
    id: 7,
    title: 'Project Management',
    count: 61,
    category: 'image',
    media: [
      { id: 19, src: Img114, className: 'photo-stack-top' },
      { id: 20, src: Img90, className: 'photo-stack-middle' },
      { id: 21, src: Img91, className: 'photo-stack-bottom' }
    ]
  },
  {
    id: 8,
    title: 'Kanban',
    count: 45,
    category: 'image',
    media: [
      { id: 22, src: Img115, className: 'photo-stack-top' },
      { id: 23, src: Img92, className: 'photo-stack-middle' },
      { id: 24, src: Img93, className: 'photo-stack-bottom' }
    ]
  },
  {
    id: 9,
    title: 'Social',
    count: 23,
    category: 'image',
    media: [
      { id: 25, src: Img116, className: 'photo-stack-top' },
      { id: 26, src: Img94, className: 'photo-stack-middle' },
      { id: 27, src: Img95, className: 'photo-stack-bottom' }
    ]
  },
  {
    id: 10,
    title: 'Travel vlogs',
    count: 34,
    category: 'video',
    media: [
      {
        id: 28,
        src: Vid3,
        poster: poster3,
        type: 'video',
        className: 'photo-stack-top'
      },
      { id: 29, src: Img96, className: 'photo-stack-middle' },
      { id: 30, src: Img97, className: 'photo-stack-bottom' }
    ]
  },
  {
    id: 11,
    title: 'Travel Agency',
    count: 89,
    category: 'video',
    media: [
      {
        id: 31,
        src: Vid4,
        poster: poster4,
        type: 'video',
        className: 'photo-stack-top'
      },
      { id: 32, src: Img98, className: 'photo-stack-middle' },
      { id: 33, src: Img99, className: 'photo-stack-bottom' }
    ]
  },
  {
    id: 12,
    title: 'Events',
    count: 54,
    category: 'image',
    media: [
      { id: 34, src: Img117, className: 'photo-stack-top' },
      { id: 35, src: Img100, className: 'photo-stack-middle' },
      { id: 36, src: Img101, className: 'photo-stack-bottom' }
    ]
  }
];

/** apps/gallery/gallery-column.pug */
export const columnItems: GalleryItem[] = [
  {
    id: 1,
    image: Img65,
    largeImage: Img65,
    category: 'ecommerce',
    title: 'Pixel 4a'
  },
  {
    id: 2,
    image: Img68,
    largeImage: Img68,
    category: 'project-management',
    title: 'Wooden Beetle'
  },
  {
    id: 3,
    image: Img71,
    largeImage: Img71,
    category: 'photography',
    title: 'Sunset'
  },
  {
    id: 4,
    image: Img74,
    largeImage: Img74,
    category: 'photography',
    title: 'Nature'
  },
  {
    id: 5,
    image: Img75,
    largeImage: Img75,
    category: 'project-management',
    title: 'Mockup'
  },
  {
    id: 6,
    image: Img66,
    largeImage: Img66,
    category: 'photography',
    title: 'Mountain Sunset'
  },
  {
    id: 7,
    image: Img69,
    largeImage: Img69,
    category: 'project-management',
    title: 'Ear Buds'
  },
  {
    id: 8,
    image: Img72,
    largeImage: Img72,
    category: 'ecommerce',
    title: 'Basketball Shoes'
  },
  {
    id: 9,
    image: Img76,
    largeImage: Img76,
    category: 'photography',
    title: 'Pixel Watch'
  },
  {
    id: 10,
    image: Img70,
    largeImage: Img70,
    category: 'ecommerce',
    title: 'Plant During Daytime'
  },
  {
    id: 11,
    image: Img67,
    largeImage: Img67,
    category: 'photography',
    title: 'Dog Sitting'
  },
  {
    id: 12,
    image: Img73,
    largeImage: Img73,
    category: 'ecommerce',
    title: 'Pixel 4a 5g'
  }
];

/** apps/gallery/gallery-grid.pug and apps/gallery/grid-with-title.pug */
export const gridItems: GalleryItem[] = [
  {
    id: 1,
    image: Img77,
    largeImage: Img77,
    category: 'ecommerce',
    title: 'Basketball Shoes'
  },
  {
    id: 2,
    image: Img78,
    largeImage: Img78,
    category: 'photography',
    title: 'Beach Sunset'
  },
  {
    id: 3,
    image: Img79,
    largeImage: Img79,
    category: 'photography',
    title: 'Camera'
  },
  {
    id: 4,
    image: Img80,
    largeImage: Img80,
    category: 'ecommerce',
    title: 'Telephone'
  },
  {
    id: 5,
    image: Img81,
    largeImage: Img81,
    category: 'photography',
    title: 'Sea Beach'
  },
  {
    id: 6,
    image: Img82,
    largeImage: Img82,
    category: 'photography',
    title: 'Wooden Beetle'
  },
  {
    id: 7,
    image: Img83,
    largeImage: Img83,
    category: 'project-management',
    title: 'Boat on Water'
  },
  {
    id: 8,
    image: Img84,
    largeImage: Img84,
    category: 'photography',
    title: 'Sunset Horizon'
  },
  {
    id: 9,
    image: Img85,
    largeImage: Img85,
    category: 'project-management',
    title: 'Trail Ahead'
  },
  {
    id: 10,
    image: Img86,
    largeImage: Img86,
    category: 'project-management',
    title: 'Mountain Sunset'
  },
  {
    id: 11,
    image: Img87,
    largeImage: Img87,
    category: 'ecommerce',
    title: 'Dog Sitting'
  },
  {
    id: 12,
    image: Img88,
    largeImage: Img88,
    category: 'photography',
    title: 'Tree near Lake'
  }
];

/**
 * apps/gallery/gallery-masonry.pug — the pug emits the items in this order
 * (not the order of its `images` array), and the column spans are per item.
 */
export const masonryItems: GalleryItem[] = [
  {
    id: 1,
    image: Img89,
    largeImage: large89,
    category: 'ecommerce',
    title: 'Pixel 4a 5g',
    className: 'sm:col-6 md:col-8 xl:col-4'
  },
  {
    id: 2,
    image: Img90,
    largeImage: Img86,
    category: 'photography',
    title: 'Sunset',
    className: 'sm:col-6 md:col-4 xl:col-2'
  },
  {
    id: 3,
    image: Img91,
    largeImage: large91,
    category: 'project-management',
    title: 'Trees During Night',
    className: 'sm:col-6 md:col-4 xl:col-3'
  },
  {
    id: 4,
    image: Img92,
    largeImage: large92,
    category: 'ecommerce',
    title: 'Mountain Sunset',
    className: 'sm:col-6 md:col-4 xl:col-3'
  },
  {
    id: 5,
    image: Img96,
    largeImage: Vid96,
    video: Vid96,
    category: 'project-management',
    title: 'Beautiful Nature',
    className: 'sm:col-6 md:col-4 xl:col-3'
  },
  {
    id: 6,
    image: Img97,
    largeImage: Vid97,
    video: Vid97,
    category: 'ecommerce',
    title: 'Bike Ride',
    className: 'sm:col-6 md:col-8 xl:col-3'
  },
  {
    id: 7,
    image: Img93,
    largeImage: Img79,
    category: 'photography',
    title: 'Camera',
    className: 'sm:col-6 md:col-4 xl:col-2'
  },
  {
    id: 8,
    image: Img94,
    largeImage: Img77,
    category: 'ecommerce',
    title: 'Basketball Shoes',
    className: 'sm:col-6 md:col-4 xl:col-2'
  },
  {
    id: 9,
    image: Img95,
    largeImage: large95,
    category: 'project-management',
    title: 'Aurora',
    className: 'sm:col-6 md:col-4 xl:col-2'
  },
  {
    id: 10,
    image: Img108,
    largeImage: large108,
    category: 'photography',
    title: 'House near lake',
    className: 'sm:col-6 md:col-4 xl:col-2'
  },
  {
    id: 11,
    image: Img119,
    largeImage: large107,
    category: 'project-management',
    title: 'Car',
    className: 'sm:col-6 md:col-8 xl:col-4'
  },
  {
    id: 12,
    image: Img106,
    largeImage: large106,
    category: 'photography',
    title: 'MI Phone',
    className: 'sm:col-6 md:col-4 xl:col-2'
  },
  {
    id: 13,
    image: Img99,
    largeImage: Vid99,
    video: Vid99,
    category: 'photography',
    title: 'Air Balloons',
    className: 'sm:col-6 md:col-8 xl:col-4'
  }
];

/** apps/gallery/gallery-slider.pug */
export const sliderItems: GallerySliderItem[] = [
  {
    id: 1,
    image: Img100,
    aspect: 'landscape',
    category: 'ecommerce',
    title: 'Nature'
  },
  {
    id: 2,
    image: Img101,
    aspect: 'landscape',
    category: 'photography',
    title: 'Pixel 4'
  },
  {
    id: 3,
    image: Img102,
    aspect: 'portrait',
    category: 'ecommerce',
    title: 'Sunset'
  },
  {
    id: 4,
    image: Img103,
    aspect: 'square',
    category: 'project-management',
    title: 'Ear Buds'
  },
  {
    id: 5,
    image: Img104,
    aspect: 'landscape',
    category: 'ecommerce photography',
    title: 'Sunset Horizon'
  },
  {
    id: 6,
    image: Img71,
    aspect: 'portrait',
    category: 'project-management photography',
    title: 'Sunset'
  },
  {
    id: 7,
    image: Img105,
    aspect: 'landscape',
    category: 'photography',
    title: 'Ear Buds'
  },
  {
    id: 8,
    image: poster2,
    video: Vid2,
    aspect: 'square',
    category: 'ecommerce photography',
    title: 'Bike Ride'
  },
  {
    id: 9,
    image: poster3,
    video: Vid3,
    aspect: 'landscape',
    category: 'project-management',
    title: 'Mountain Sunset'
  },
  {
    id: 10,
    image: Img66,
    aspect: 'portrait',
    category: 'project-management',
    title: 'Desert Photography'
  },
  {
    id: 11,
    image: Img42,
    aspect: 'square',
    category: 'project-management',
    title: 'London'
  }
];
