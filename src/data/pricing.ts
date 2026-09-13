import { PageBreadcrumbItem } from 'components/common/PageBreadcrumb';
import icon1 from 'assets/img/spot-illustrations/13.png';
import icon1Dark from 'assets/img/spot-illustrations/dark_13.png';
import icon2 from 'assets/img/spot-illustrations/14.png';
import icon2Dark from 'assets/img/spot-illustrations/dark_14.png';
import icon3 from 'assets/img/spot-illustrations/15.png';
import icon3Dark from 'assets/img/spot-illustrations/dark_15.png';
import icon4 from 'assets/img/spot-illustrations/16.png';
import icon4Dark from 'assets/img/spot-illustrations/dark_16.png';
import { BadgeBg } from 'components/base/Badge';
import bg8 from 'assets/img/bg/8.png';
import darkBg8 from 'assets/img/bg/8-dark.png';
import bg9 from 'assets/img/bg/9.png';
import darkBg9 from 'assets/img/bg/9-dark.png';
import bg10 from 'assets/img/bg/10.png';
import darkBg10 from 'assets/img/bg/10-dark.png';
import bg11 from 'assets/img/bg/bg-11.png';
import darkBg11 from 'assets/img/bg/bg-11-dark.png';
import rocket from 'assets/img/spot-illustrations/rocket.png';
import rocketDark from 'assets/img/spot-illustrations/rocket-dark.png';
import bag from 'assets/img/spot-illustrations/bag-2.png';
import bagDark from 'assets/img/spot-illustrations/bag-2-dark.png';
import star from 'assets/img/spot-illustrations/star.png';
import starDark from 'assets/img/spot-illustrations/star-dark.png';
import shield from 'assets/img/spot-illustrations/shield-2.png';
import shieldDark from 'assets/img/spot-illustrations/shield-2-dark.png';

export const pricingBreadcrumbItems: PageBreadcrumbItem[] = [
  {
    label: 'Pages',
    url: '#!'
  },
  {
    label: 'Pricing',
    url: '#!',
    active: true
  }
];

/** The grid view's gold breadcrumb reads `Pricing-grid`, not `Pricing`. */
export const pricingGridBreadcrumbItems: PageBreadcrumbItem[] = [
  {
    label: 'Pages',
    url: '#!'
  },
  {
    label: 'Pricing-grid',
    url: '#!',
    active: true
  }
];

export type Feature = {
  id: string;
  label: string;
  new?: boolean;
};

export interface PricingColumn {
  id: number;
  title: string;
  icon: string;
  iconDark: string;
  description: string;
  price: number;
  features: string[];
  selected?: boolean;
}

export const pricingColumnFeatures: Feature[] = [
  {
    id: 'advanced_search',
    label: 'Advanced Search'
  },
  {
    id: 'custom_fields',
    label: 'Custom fields',
    new: true
  },
  {
    id: 'task_dependencies',
    label: 'Task dependencies'
  },
  {
    id: 'private_teams',
    label: 'Private teams & projects'
  }
];

export const pricingGridFeatures: Feature[] = [
  {
    id: 'timeline',
    label: 'Timeline'
  },
  {
    id: 'advanced_search',
    label: 'Advanced Search'
  },
  {
    id: 'custom_fields',
    label: 'Custom fields',
    new: true
  },
  {
    id: 'task_dependencies',
    label: 'Task dependencies'
  },
  {
    id: 'additional-space',
    label: '20TB of additional space'
  },
  {
    id: 'bandwidth',
    label: 'Bandwidth of Upto 1 Gbps'
  },
  {
    id: 'private_teams',
    label: 'Private teams & projects'
  },
  {
    id: 'customer-support',
    label: 'Customer Support and Training'
  }
];

export const pricingColumnItems: PricingColumn[] = [
  {
    id: 1,
    title: 'Learner',
    icon: icon1,
    iconDark: icon1Dark,
    description:
      'For individuals who are interested in giving it a shot first.',
    price: 0,
    features: ['timeline']
  },
  {
    id: 2,
    title: 'Starter',
    icon: icon2,
    iconDark: icon2Dark,
    description: 'For teams that need to create project plans with confidence.',
    price: 14.99,
    features: ['timeline', 'advanced_search']
  },
  {
    id: 3,
    title: 'Team',
    icon: icon3,
    iconDark: icon3Dark,
    description: 'For teams that need to manage work across initiatives.',
    price: 49.99,
    selected: true,
    features: ['timeline', 'advanced_search', 'custom_fields']
  },
  {
    id: 4,
    title: 'Industry',
    icon: icon4,
    iconDark: icon4Dark,
    description: 'For organizations that need additional security and support.',
    price: 149.99,
    features: [
      'timeline',
      'advanced_search',
      'custom_fields',
      'task_dependencies',
      'private_teams'
    ]
  }
];

export interface PricingGridPlan {
  /** radio input id — the gold's `data.value` */
  id: string;
  title: string;
  /** contains the gold's hard `<br>` */
  description: string;
  img: string;
  imgDark: string;
  bg: string;
  darkBg: string;
  price: number;
  duration: string;
  /**
   * Literal border class of the feature list — kept in the data because the
   * gold sets it per card (and gets it "wrong" on the yearly Business Plus).
   */
  borderClass: string;
  badge?: {
    label: string;
    badgeBg: BadgeBg;
  };
  /** card carries the warning highlight (gold `data.selected`) */
  highlighted?: boolean;
  /** the radio that starts checked (gold `data.defaultChecked`) */
  defaultChecked?: boolean;
  /**
   * The gold renders this card through its `PricingRecommendedCard` mixin,
   * which stacks the title/badge at `md` and drops the bg-holder offset.
   */
  recommendedLayout?: boolean;
  /** feature strings — may carry inline markup */
  features: string[];
}

export const pricingGridMonthlyItems: PricingGridPlan[] = [
  {
    id: 'startup',
    title: 'Startup',
    description:
      'For individuals who are interested <br> in giving it a shot first.',
    img: rocket,
    imgDark: rocketDark,
    bg: bg8,
    darkBg: darkBg8,
    price: 0,
    duration: 'Per month',
    borderClass: 'border-subtle',
    defaultChecked: true,
    features: ['Up to 4 Members', '3 Collaboration projects']
  },
  {
    id: 'standard',
    title: 'Standard',
    description:
      'For teams that need to create <br> project plans with confidence.',
    img: bag,
    imgDark: bagDark,
    bg: bg9,
    darkBg: darkBg9,
    price: 14.99,
    duration: 'Per month',
    borderClass: 'border-subtle',
    features: [
      'Up to 8 Members',
      'Create & Share libraries',
      '10 Collaboration projects'
    ]
  },
  {
    id: 'businessPlus',
    title: 'Business Plus',
    description: 'For teams that need to manage <br> work across initiatives.',
    img: star,
    imgDark: starDark,
    bg: bg11,
    darkBg: darkBg11,
    price: 49.99,
    duration: 'Per month',
    borderClass: 'border-warning-subtle',
    badge: {
      label: 'recommended',
      badgeBg: 'warning'
    },
    highlighted: true,
    recommendedLayout: true,
    features: [
      'Technical Supports',
      'Up to 20 Members',
      'Create & Share libraries',
      '<span class="font-bold">Unlimited</span> Collaboration'
    ]
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    description:
      'For organizations that need <br> additional security and support.',
    img: shield,
    imgDark: shieldDark,
    bg: bg10,
    darkBg: darkBg10,
    price: 149.99,
    duration: 'Per month',
    borderClass: 'border-subtle',
    features: [
      '24/7 VIP Support',
      'Automated analytics',
      '<span class="font-bold">Unlimited</span> Members*',
      'Create & Share libraries',
      'Centralized billing'
    ]
  }
];

export const pricingGridYearlyItems: PricingGridPlan[] = [
  {
    id: 'startupYearly',
    title: 'Startup',
    description:
      'For individuals who are interested <br> in giving it a shot first.',
    img: rocket,
    imgDark: rocketDark,
    bg: bg8,
    darkBg: darkBg8,
    price: 0,
    duration: 'Per year',
    borderClass: 'border-subtle',
    defaultChecked: true,
    features: ['Up to 4 Members', '3 Collaboration projects']
  },
  {
    id: 'standardYearly',
    title: 'Standard',
    description:
      'For teams that need to create <br> project plans with confidence.',
    img: bag,
    imgDark: bagDark,
    bg: bg9,
    darkBg: darkBg9,
    price: 179.88,
    duration: 'Per year',
    borderClass: 'border-subtle',
    features: [
      'Up to 8 Members',
      'Create & Share libraries',
      '10 Collaboration projects'
    ]
  },
  {
    id: 'businessPlusYearly',
    title: 'Business Plus',
    description: 'For teams that need to manage <br> work across initiatives.',
    img: star,
    imgDark: starDark,
    bg: bg11,
    darkBg: darkBg11,
    price: 599.88,
    duration: 'Per year',
    // the gold's yearly card keeps the neutral border even though it is the
    // highlighted plan — mirrored verbatim
    borderClass: 'border-subtle',
    badge: {
      label: 'recommended',
      badgeBg: 'warning'
    },
    highlighted: true,
    features: [
      'Technical Supports',
      'Up to 20 Members',
      'Create & Share libraries',
      '<span class="font-bold">Unlimited</span> Collaboration'
    ]
  },
  {
    id: 'enterpriseYearly',
    title: 'Enterprise',
    description:
      'For organizations that need <br> additional security and support.',
    img: shield,
    imgDark: shieldDark,
    bg: bg10,
    darkBg: darkBg10,
    price: 1799.88,
    duration: 'Per year',
    borderClass: 'border-subtle',
    features: [
      '24/7 VIP Support',
      'Automated analytics',
      '<span class="font-bold">Unlimited</span> Members*',
      'Create & Share libraries',
      'Centralized billing'
    ]
  }
];
