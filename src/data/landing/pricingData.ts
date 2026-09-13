import bolt from 'assets/img/icons/illustrations/bolt.png';
import edit from 'assets/img/icons/illustrations/edit.png';
import pie from 'assets/img/icons/illustrations/pie.png';
import shield from 'assets/img/icons/illustrations/shield.png';

/**
 * A feature row of the pricing lists. `icon` absent = the greyed-out
 * "not included" row the gold renders without a `.fa-li` bullet.
 */
export interface PricingFeature {
  label: string;
  icon?: 'check' | 'star';
  /** landing-1 tags "Custom fields" with a `badge-phoenix-warning` New badge */
  newBadge?: boolean;
  /** landing-2 tags "Custom fields" with a `badge-phoenix-info` Info badge */
  infoBadge?: boolean;
}

export interface Pricing {
  id: number;
  image: string;
  category: string;
  price: string;
  /** literal gold class string for the `.card` */
  cardClass?: string;
  buyBtnClass: string;
  /** renders the `.badge-pricing` "Most popular" ribbon */
  popular?: boolean;
  features: PricingFeature[];
}

export interface PricingAlternate {
  id: number;
  category: string;
  price: string;
  cardClass: string;
  buyBtnClass: string;
  features: PricingFeature[];
}

/** `pricingCards` in landing-1/Pricing.pug */
export const pricingItems: Pricing[] = [
  {
    id: 1,
    image: pie,
    category: 'Starter',
    price: '6',
    cardClass: 'xl:rounded-e-none rounded-s',
    buyBtnClass: 'btn-outline-primary',
    features: [
      { label: 'Timeline', icon: 'check' },
      { label: 'Advanced Search', icon: 'check' },
      { label: 'Custom fields', newBadge: true },
      { label: 'Task dependencies' },
      { label: 'Private teams & projects' }
    ]
  },
  {
    id: 2,
    image: bolt,
    category: 'Team',
    price: '12',
    cardClass:
      'rounded-t-none xl:rounded-none border border-2 border-primary mt-8 md:mt-0',
    buyBtnClass: 'btn-primary',
    popular: true,
    features: [
      { label: 'Timeline', icon: 'check' },
      { label: 'Advanced Search', icon: 'check' },
      { label: 'Custom fields', icon: 'check', newBadge: true },
      { label: 'Task dependencies' },
      { label: 'Private teams & projects' }
    ]
  },
  {
    id: 3,
    image: edit,
    category: 'Business',
    price: '23',
    cardClass: 'rounded-s xl:rounded-s-none mt-8 md:mt-0',
    buyBtnClass: 'btn-outline-primary',
    features: [
      { label: 'Timeline', icon: 'check' },
      { label: 'Advanced Search', icon: 'check' },
      { label: 'Custom fields', icon: 'check', newBadge: true },
      { label: 'Task dependencies', icon: 'star' },
      { label: 'Private teams & projects' }
    ]
  },
  {
    id: 4,
    image: shield,
    category: 'Enterprise',
    price: '40',
    buyBtnClass: 'btn-outline-primary',
    features: [
      { label: 'Timeline', icon: 'check' },
      { label: 'Advanced Search', icon: 'check' },
      { label: 'Custom fields', icon: 'check', newBadge: true },
      { label: 'Task dependencies', icon: 'star' },
      { label: 'Private teams & projects', icon: 'star' }
    ]
  }
];

/** `pricingItems` in landing-2/Pricing.pug */
export const pricingItemsAlternate: PricingAlternate[] = [
  {
    id: 1,
    category: 'Starter',
    price: '15',
    cardClass: 'border-0',
    buyBtnClass: 'btn-outline-primary',
    features: [
      { label: 'Timeline', icon: 'check' },
      { label: 'Advanced Search' },
      { label: 'Custom fields' },
      { label: 'Task dependencies' },
      { label: 'Private teams & projects' }
    ]
  },
  {
    id: 2,
    category: 'Business',
    price: '23',
    cardClass: 'border border-2 border-info rounded-4',
    buyBtnClass: 'btn-primary',
    features: [
      { label: 'Timeline', icon: 'check' },
      { label: 'Advanced Search', icon: 'check' },
      { label: 'Custom fields', icon: 'check', infoBadge: true },
      { label: 'Task dependencies' },
      { label: 'Private teams & projects' }
    ]
  },
  {
    id: 3,
    category: 'Enterprise',
    price: '40',
    cardClass: 'border-0',
    buyBtnClass: 'btn-outline-primary',
    features: [
      { label: 'Timeline', icon: 'check' },
      { label: 'Advanced Search', icon: 'check' },
      { label: 'Custom fields', icon: 'check' },
      { label: 'Task dependencies', icon: 'check' },
      { label: 'Private teams & projects', icon: 'check' }
    ]
  }
];
