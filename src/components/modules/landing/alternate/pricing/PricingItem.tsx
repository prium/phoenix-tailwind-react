import { faCheck, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@hummingbirdui/react';

import type { PricingAlternate } from 'data/landing/pricingData';

const icons = { check: faCheck, star: faStar };

/** `+PricingList` in landing-2/Pricing.pug */
const PricingItem = ({ pricing }: { pricing: PricingAlternate }) => (
  <div className="pricing-card">
    <div className={cn('card bg-transparent rounded-2xl', pricing.cardClass)}>
      <div className="card-body p-12">
        <h3 className="mb-8">{pricing.category}</h3>
        <h1 className="text-4xl flex items-center gap-1 mb-4">
          ${pricing.price}
          <span className="text-base font-normal">/ month</span>
        </h1>
        <button className={cn('btn btn-lg w-full mb-12', pricing.buyBtnClass)}>
          Buy
        </button>
        <h5 className="mb-6">What’s included</h5>
        <ul className="fa-ul ps-6 ms-6! rtl:ms-0! mb-0">
          {pricing.features.map((feature, index) => (
            <li
              className={cn(
                'flex items-center',
                index === pricing.features.length - 1 ? 'mb-0' : 'mb-4'
              )}
              key={feature.label}
            >
              {/* the gold keeps the empty `.fa-li` slot on excluded rows */}
              <span className="fa-li">
                {feature.icon ? (
                  <FontAwesomeIcon
                    icon={icons[feature.icon]}
                    className="text-primary"
                  />
                ) : (
                  <span />
                )}
              </span>
              <p className="mb-0">{feature.label}</p>
              {feature.infoBadge && (
                <span className="badge badge-phoenix-info ms-2 text-sm">
                  Info
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default PricingItem;
