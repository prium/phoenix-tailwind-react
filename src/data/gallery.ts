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

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faGripVertical,
  faMattressPillow,
  faTh,
  faThLarge
} from '@fortawesome/free-solid-svg-icons';
export interface MediaItem {
  id: number;
  src: string;
  poster?: string;
  className?: string;
  type?: 'image' | 'video';
}

export interface AlbumItem {
  id: number;
  title: string;
  count: number;
  category: string[];
  media: MediaItem[];
}

export interface GalleryColumnItemType {
  id: number;
  title: string;
  category: string[];
  image: string;
  type?: string;
  className?: string;
}

export interface GalleryMasonryItem {
  id: number;
  image?: string;
  largeImage?: string;
  video?: string;
  title: string;
  category: string[];
  srcType?: 'img' | 'video',
  categoryTitle: string;
  className?: string;
}

export interface GallerySliderItem extends GalleryMasonryItem {
  subtitle?: string;
}

export interface GridLayoutItem {
  id: number;
  tooltipTitle: string;
  icon: IconDefinition;
  link: string;
  activeKey: string;
}

export interface IsotopeNavItem {
  eventKey: string | number;
  label: string;
  className?: string;
}

export const albumItems: AlbumItem[] = [
  {
    id: 1,
    title: 'Trip',
    count: 43,
    category: ['1', '2'],
    media: [
      {
        id: 22,
        src: Img109,
        className: 'photo-stack-top',
        type: 'image'
      },
      {
        id: 23,
        src: Img77,
        className: 'photo-stack-middle'
      },
      {
        id: 24,
        src: Img78,
        className: 'photo-stack-bottom'
      }
    ]
  },
  {
    id: 2,
    title: 'Hotel',
    count: 23,
    category: ['1', '3'],
    media: [
      {
        id: 25,
        src: Vid1,
        poster: poster1,
        className: 'photo-stack-top',
        type: 'video'
      },
      {
        id: 26,
        src: Img81,
        className: 'photo-stack-middle'
      },
      {
        id: 27,
        src: Img80,
        className: 'photo-stack-bottom'
      }
    ]
  },
  {
    id: 3,
    title: 'Trip Details',
    count: 32,
    category: ['1', '2'],
    media: [
      {
        id: 28,
        src: Img111,
        className: 'photo-stack-top',
        type: 'image'
      },
      {
        id: 29,
        src: Img82,
        className: 'photo-stack-middle'
      },
      {
        id: 30,
        src: Img83,
        className: 'photo-stack-bottom'
      }
    ]
  },
  {
    id: 4,
    title: 'Landing',
    count: 12,
    category: ['1', '3'],
    media: [
      {
        id: 31,
        src: Vid2,
        poster: poster2,
        className: 'photo-stack-top',
        type: 'video'
      },
      {
        id: 32,
        src: Img84,
        className: 'photo-stack-middle'
      },
      {
        id: 33,
        src: Img85,
        className: 'photo-stack-bottom'
      }
    ]
  },
  {
    id: 5,
    title: 'E commerce',
    count: 56,
    category: ['1', '2'],
    media: [
      {
        id: 34,
        src: Img112,
        className: 'photo-stack-top',
        type: 'image'
      },
      {
        id: 35,
        src: Img86,
        className: 'photo-stack-middle'
      },
      {
        id: 36,
        src: Img87,
        className: 'photo-stack-bottom'
      }
    ]
  },
  {
    id: 6,
    title: 'Products',
    count: 45,
    category: ['1', '2'],
    media: [
      {
        id: 37,
        src: Img113,
        className: 'photo-stack-top',
        type: 'image'
      },
      {
        id: 38,
        src: Img88,
        className: 'photo-stack-middle'
      },
      {
        id: 39,
        src: Img89,
        className: 'photo-stack-bottom'
      }
    ]
  },
  {
    id: 7,
    title: 'Project Management',
    count: 61,
    category: ['1', '2'],
    media: [
      {
        id: 40,
        src: Img114,
        className: 'photo-stack-top',
        type: 'image'
      },
      {
        id: 41,
        src: Img90,
        className: 'photo-stack-middle'
      },
      {
        id: 42,
        src: Img91,
        className: 'photo-stack-bottom'
      }
    ]
  },
  {
    id: 8,
    title: 'Kanban',
    count: 45,
    category: ['1', '2'],
    media: [
      {
        id: 43,
        src: Img115,
        className: 'photo-stack-top',
        type: 'image'
      },
      {
        id: 44,
        src: Img92,
        className: 'photo-stack-middle'
      },
      {
        id: 45,
        src: Img93,
        className: 'photo-stack-bottom'
      }
    ]
  },
  {
    id: 9,
    title: 'Social',
    count: 23,
    category: ['1', '2'],
    media: [
      {
        id: 46,
        src: Img116,
        className: 'photo-stack-top',
        type: 'image'
      },
      { id: 47, src: Img94, className: 'photo-stack-middle' },
      { id: 48, src: Img95, className: 'photo-stack-bottom' }
    ]
  },
  {
    id: 10,
    title: 'Travel vlogs',
    count: 34,
    category: ['1', '3'],
    media: [
      {
        id: 49,
        src: Vid3,
        poster: poster3,
        className: 'photo-stack-top',
        type: 'video'
      },
      {
        id: 50,
        src: Img96,
        className: 'photo-stack-middle'
      },
      {
        id: 51,
        src: Img97,
        className: 'photo-stack-bottom'
      }
    ]
  },
  {
    id: 11,
    title: 'Travel Agency',
    count: 89,
    category: ['1', '3'],
    media: [
      {
        id: 52,
        src: Vid4,
        poster: poster4,
        className: 'photo-stack-top',
        type: 'video'
      },
      {
        id: 53,
        src: Img98,
        className: 'photo-stack-middle'
      },
      {
        id: 54,
        src: Img99,
        className: 'photo-stack-bottom'
      }
    ]
  },
  {
    id: 12,
    title: 'Events',
    count: 54,
    category: ['1', '2'],
    media: [
      {
        id: 55,
        src: Img117,
        className: 'photo-stack-top',
        type: 'image'
      },
      {
        id: 56,
        src: Img100,
        className: 'photo-stack-middle'
      },
      {
        id: 57,
        src: Img101,
        className: 'photo-stack-bottom'
      }
    ]
  }
];

export const gridLayoutItems: GridLayoutItem[] = [
  {
    id: 1,
    tooltipTitle: 'Column view',
    icon: faGripVertical,
    link: '/apps/gallery/gallery-column',
    activeKey: 'column'
  },
  {
    id: 2,
    tooltipTitle: 'Grid view',
    icon: faThLarge,
    link: '/apps/gallery/gallery-grid',
    activeKey: 'grid-view'
  },
  {
    id: 3,
    tooltipTitle: 'Grid view with title',
    icon: faThLarge,
    link: '/apps/gallery/grid-with-title',
    activeKey: 'grid-title'
  },
  {
    id: 4,
    tooltipTitle: 'Masonry view',
    icon: faTh,
    link: '/apps/gallery/gallery-masonry',
    activeKey: 'masonry'
  },
  {
    id: 5,
    tooltipTitle: 'Slider view',
    icon: faMattressPillow,
    link: '/apps/gallery/gallery-slider',
    activeKey: 'slider'
  }
];

export const defaultIsotopeNavItems: IsotopeNavItem[] = [
  {
    eventKey: '1',
    label: 'All'
  },
  {
    eventKey: '2',
    label: 'Ecommerce'
  },
  {
    eventKey: '3',
    label: 'Project Management'
  },
  {
    eventKey: '4',
    label: 'Photography'
  }
];

export const columnItems: GalleryColumnItemType[] = [
  {
    id: 55,
    image: Img65,
    category: ['1', '2'],
    title: 'Pixel 4a',
    type: 'Ecommerce',
  },
  {
    id: 56,
    image: Img68,
    category: ['1', '3'],
    title: 'Wooden Beetle',
    type: 'Project Management',
  },
  {
    id: 57,
    image: Img71,
    category: ['1', '4'],
    title: 'Sunset',
    type: 'Photography',
  },
  {
    id: 58,
    image: Img74,
    category: ['1', '4'],
    title: 'Nature',
    type: 'Photography',
  },
  {
    id: 59,
    image: Img75,
    category: ['1', '3'],
    title: 'Mockup',
    type: 'Project Management',
  },
  {
    id: 60,
    image: Img66,
    category: ['1', '4'],
    title: 'Mountain Sunset',
    type: 'Photography',
  },
  {
    id: 61,
    image: Img69,
    category: ['1', '3'],
    title: 'Ear Buds',
    type: 'Project Management',
  },
  {
    id: 62,
    image: Img72,
    category: ['1', '2'],
    title: 'Basketball Shoes',
    type: 'Ecommerce',
  },
  {
    id: 63,
    image: Img76,
    category: ['1', '4'],
    title: 'Pixel Watch',
    type: 'Photography',
  },
  {
    id: 64,
    image: Img70,
    category: ['1', '2'],
    title: 'Plant During Daytime',
    type: 'Ecommerce',
  },
  {
    id: 65,
    image: Img67,
    category: ['1', '4'],
    title: 'Dog Sitting',
    type: 'Photography',
  },
  {
    id: 66,
    image: Img73,
    category: ['1', '2'],
    title: 'Pixel 4a 5g',
    type: 'Ecommerce',
  }
]


export const gridItems: GalleryColumnItemType[] = [
  {
    id: 70,
    image: Img77,
    category: ['1', '2'],
    title: "Basketball Shoes",
    type: 'Ecommerce'
  },
  {
    id: 71,
    image: Img78,
    category: ['1', '4'],
    title: 'Beach Sunset',
    type: 'Photography'
  },
  {
    id: 72,
    image: Img79,
    category: ['1', '4'],
    title: 'Camera',
    type: 'Photography'
  },
  {
    id: 73,
    image: Img80,
    category: ['1', '2'],
    title: 'Telephone',
    type: 'Ecommerce'
  },
  {
    id: 74,
    image: Img81,
    category: ['1', '4'],
    title: 'Sea Beach',
    type: 'Photography'
  },
  {
    id: 75,
    image: Img82,
    category: ['1', '4'],
    title: 'Wooden Beetle',
    type: 'photography'
  },
  {
    id: 76,
    image: Img83,
    category: ['1', '3'],
    title: 'Boat on Water',
    type: 'Project management'
  },
  {
    id: 77,
    image: Img84,
    category: ['1', '4'],
    title: 'Sunset Horizon',
    type: 'Photography'
  },
  {
    id: 78,
    image: Img85,
    category: ['1', '3'],
    title: 'Trail Ahead',
    type: 'Project management'
  },
  {
    id: 79,
    image: Img86,
    category: ['1', '3'],
    title: 'Mountain Sunset',
    type: 'Project management'
  },
  {
    id: 80,
    image: Img87,
    category: ['1', '2'],
    title: 'Dog Sitting',
    type: 'Ecommerce'
  },
  {
    id: 81,
    image: Img88,
    category: ['1', '4'],
    title: 'Tree near Lake',
    type: 'Photography'
  }
];

export const masonryItems: GalleryMasonryItem[] = [
  {
    id: 1,
    image: Img89,
    largeImage: large89,
    category: ['1', '2'],
    title: 'Pixel 4a 5g',
    categoryTitle: 'Ecommerce',
    srcType: 'img',
    className: 'col-span-12 col-span-sm-8 col-span-xl-4'
  },
  {
    id: 2,
    image: Img90,
    largeImage: Img86,
    category: ['1', '4'],
    title: 'Sunset',
    categoryTitle: 'Photography',
    srcType: 'img',
    className: 'col-span-12 col-span-sm-4 col-span-xl-2'
  },
  {
    id: 3,
    image: Img91,
    largeImage: large91,
    title: 'Trees During Night',
    category: ['1', '3'],
    categoryTitle: 'Project management',
    srcType: 'img',
    className: 'col-span-12 col-span-sm-6  col-span-xl-3'
  },
  {
    id: 4,
    image: Img92,
    largeImage: large92,
    title: 'Mountain Sunset',
    category: ['1', '2'],
    categoryTitle: 'Ecommerce',
    srcType: 'img',
    className: 'col-span-12 col-span-sm-6 col-span-xl-3'
  },
  {
    id: 5,
    image: Img94,
    largeImage: Img77,
    category: ['1', '2'],
    categoryTitle: 'Ecommerce',
    title: 'Basketball Shoes',
    srcType: 'img',
    className: 'col-span-12 col-span-sm-6 col-span-md-4 col-span-xl-2'
  },
  {
    id: 6,
    image: Img95,
    largeImage: large95,
    category: ['1', '3'],
    categoryTitle: 'Project management',
    title: 'Aurora',
    srcType: 'img',
    className: 'col-span-12 col-span-sm-6 col-span-md-4 col-span-xl-2'
  },
  {
    id: 7,
    image: Img93,
    largeImage: Img79,
    category: ['1', '4'],
    categoryTitle: 'Photography',
    title: 'Camera',
    srcType: 'img',
    className: 'col-span-12 col-span-sm-4 order-sm-1 order-md-0 col-span-md-4 col-span-xl-2'
  },
  {
    id: 8,
    image: Img96,
    video: Vid96,
    category: ['1', '3'],
    categoryTitle: 'Project management',
    title: 'Beautiful Nature',
    srcType: 'video',
    className: 'col-span-12 col-span-sm-6 col-span-md-6 col-span-xl-3'
  },
  {
    id: 9,
    image: Img97,
    video: Vid97,
    category: ['1', '2'],
    categoryTitle: 'Ecommerce',
    title: 'Bike Ride',
    srcType: 'video',
    className: 'col-span-12 col-span-sm-6 col-span-md-6 col-span-xl-3'
  },
  {
    id: 10,
    image: Img99,
    video: Vid99,
    category: ['1', '4'],
    categoryTitle: 'Photography',
    title: 'Air Balloons',
    srcType: 'video',
    className: 'col-span-12 col-span-sm-8 col-span-md-8 col-span-xl-4'
  },
  {
    id: 11,
    image: Img106,
    largeImage: large106,
    category: ['1', '4'],
    categoryTitle: 'Photography',
    title: 'MI Phone',
    srcType: 'img',
    className: 'col-span-12 col-span-sm-4 col-span-md-4 col-span-xl-2'
  },
  {
    id: 12,
    image: Img108,
    largeImage: large108,
    category: ['1', '4'],
    categoryTitle: 'Photography',
    title: 'House near lake',
    srcType: 'img',
    className: 'col-span-12 col-span-sm-4 col-span-md-3 col-span-xl-2'
  },
  {
    id: 13,
    image: Img119,
    largeImage: large107,
    category: ['1', '3'],
    categoryTitle: 'Project management',
    title: 'Car',
    srcType: 'img',
    className: 'col-span-12 col-span-sm-8 col-span-md-6 col-span-xl-4'
  },
];

export const sliderItems: GallerySliderItem[] = [
  {
    id: 1,
    image: Img100,
    className: 'landscape',
    category: ['1', '2'],
    categoryTitle: 'Ecommerce',
    title: 'Nature',
    subtitle: 'Beautiful natural scene.',
    srcType: 'img'
  },
  {
    id: 2,
    image: Img101,
    className: 'landscape',
    category: ['1', '4'],
    categoryTitle: 'Photography',
    title: 'Pixel 4',
    subtitle: 'Modern tech capture.',
    srcType: 'img'
  },
  {
    id: 3,
    image: Img102,
    className: 'portrait',
    category: ['1', '2'],
    categoryTitle: 'Ecommerce',
    title: 'Sunset',
    subtitle: 'Golden hour moment.',
    srcType: 'img'
  },
  {
    id: 4,
    image: Img103,
    className: 'square',
    category: ['1', '3'],
    categoryTitle: 'Project management',
    title: 'Ear Buds',
    subtitle: 'Premium audio gear.',
    srcType: 'img'
  },
  {
    id: 5,
    image: Img104,
    className: 'landscape',
    categoryTitle: '',
    category: ['1', '2', '4'],
    title: 'Sunset Horizon',
    subtitle: 'Calm evening horizon.',
    srcType: 'img'
  },
  {
    id: 6,
    image: Img71,
    className: 'portrait',
    categoryTitle: '',
    category: ['1', '3', '4'],
    title: 'Sunset',
    subtitle: 'Warm sunset portrait.',
    srcType: 'img'
  },
  {
    id: 7,
    image: Img105,
    className: 'landscape',
    category: ['1', '4'],
    categoryTitle: 'Portrait',
    title: 'Ear Buds',
    subtitle: 'Stylish sound design.',
    srcType: 'img'
  },
  {
    id: 8,
    image: poster2,
    video: Vid2,
    category: ['1', '2', '4'],
    categoryTitle: '',
    className: 'square',
    title: 'Mountain Sunset',
    subtitle: 'Sunset over mountains.',
    srcType: 'video'
  },
  {
    id: 9,
    image: poster3,
    video: Vid3,
    className: 'landscape',
    category: ['1', '3'],
    categoryTitle: '',
    title: 'Mountain river view',
    subtitle: 'Calm river through mountains.',
    srcType: 'video'
  },
  {
    id: 10,
    image: Img66,
    className: 'portrait',
    category: ['1', '3'],
    categoryTitle: 'Project management',
    title: 'Desert Photography',
    subtitle: 'Capturing desert beauty.',
    srcType: 'img'
  },
  {
    id: 11,
    image: Img42,
    className: 'square',
    category: ['1', '3'],
    categoryTitle: 'Project management',
    title: 'London',
    subtitle: 'Iconic city vibes.',
    srcType: 'img'
  }
]
