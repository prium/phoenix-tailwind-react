import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from 'components/base/Badge';
import Button from 'components/base/Button';
import { Pricing, pricingFeatures } from 'data/landing/pricingData';
import React, { CSSProperties } from 'react';

interface PricingItemProps {
  pricing: Pricing;
}

const PricingItem = ({ pricing }: PricingItemProps) => {
  return (
    <>
      <div className="px-8">
        <div className="text-center pt-8">
          <img src={pricing.icon} width={48} height={48} alt="" />
          <h3 className="font-semibold my-6">{pricing.category}</h3>
        </div>
        <div className="text-center">
          <h1 className="font-semibold text-primary mb-6">
            $<span className="font-black">{pricing.price}</span>
            <span className="text-emphasis text-lg ms-1 font-black">USD</span>
          </h1>
          <Button
            variant={pricing.popular ? 'primary' : 'outline-primary'}
            className={`btn btn-lg mb-18 w-full`}
          >
            Buy
          </Button>
        </div>
      </div>
      <ul className="fa-ul pricing-list">
        {pricingFeatures.map(feature => (
          <li key={feature.id} className="mb-6 flex items-center">
            {pricing.features.includes(feature.id) && (
              <span className="fa-li">
                <FontAwesomeIcon
                  icon={feature.icon as IconProp}
                  className="text-primary"
                />
              </span>
            )}
            <span
              className="text-muted"
              style={
                pricing.features.includes(feature.id)
                  ? ({ '--phoenix-text-opacity': 1 } as CSSProperties)
                  : ({ '--phoenix-text-opacity': 0.5 } as CSSProperties)
              }
            >
              {feature.label}
            </span>
            {feature.new && (
              <Badge bg="warning" variant="phoenix" className="ms-2 text-sm">
                New
              </Badge>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PricingItem;
