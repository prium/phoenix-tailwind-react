import { faCheck, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@hummingbirdui/react';

import type { Pricing } from 'data/landing/pricingData';

const icons = { check: faCheck, star: faStar };

/** `+PriceItem` + `+PriceList` in landing-1/Pricing.pug */
const PricingItem = ({ pricing }: { pricing: Pricing }) => (
  <>
    <div className="px-8">
      <div className="text-center pt-8">
        <img src={pricing.image} width={48} height={48} alt="" />
        <h3 className="font-semibold my-6">{pricing.category}</h3>
      </div>
      <div className="text-center">
        <h1 className="font-semibold text-primary">
          $<span className="font-extrabold">{pricing.price}</span>
          <span className="text-emphasis text-lg ms-1 font-black">USD</span>
        </h1>
        <h5 className="mb-6 text-default" />
        <button className={cn('btn btn-lg mb-10 w-full', pricing.buyBtnClass)}>
          Buy
        </button>
      </div>
    </div>

    <ul className="fa-ul pricing-list">
      {pricing.features.map(feature => (
        <li className="mb-6 flex items-center" key={feature.label}>
          {feature.icon && (
            <span className="fa-li">
              <FontAwesomeIcon
                icon={icons[feature.icon]}
                className="text-primary"
              />
            </span>
          )}
          <span className={feature.icon ? 'text-muted' : 'text-muted/50'}>
            {feature.label}
          </span>
          {feature.newBadge && (
            <span
              className={cn(
                'badge badge-phoenix-warning ms-2 text-sm',
                !feature.icon && 'opacity-50'
              )}
            >
              New
            </span>
          )}
        </li>
      ))}
    </ul>
  </>
);

export default PricingItem;
