import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Badge from 'components/base/Badge';
import Button from 'components/base/Button';
import {
  PricingAlternate,
  pricingFeaturesAlternate
} from 'data/landing/pricingData';
import React from 'react';
import { Card } from 'react-bootstrap';

const PricingItem = ({ pricing }: { pricing: PricingAlternate }) => {
  return (
    <div className="pricing-card">
      <Card
        className={classNames('bg-transparent', {
          'border border-2 border-info rounded-2xl':
            pricing.category === 'Business',
          'border-0 border-subtle': pricing.category !== 'Business'
        })}
      >
        <Card.Body className="p-12">
          <h3 className="mb-8">{pricing.category}</h3>
          <h1 className="text-4xl flex items-center gap-1 mb-4">
            ${pricing.price}
            <span className="text-base font-normal"> / month</span>
          </h1>
          <Button
            variant={
              pricing.category === 'Business' ? 'primary' : 'outline-primary'
            }
            size="lg"
            className="w-full mb-12"
          >
            Buy
          </Button>
          <h5 className="mb-6">What’s included</h5>
          <ul className="fa-ul ps-6 m-0 pricing">
            {pricingFeaturesAlternate.map((feature, index) => (
              <li
                key={feature.id}
                className={classNames('flex items-center', {
                  'mb-6': index !== pricingFeaturesAlternate.length - 1
                })}
              >
                {pricing.features.includes(feature.id) && (
                  <span className="fa-li">
                    <FontAwesomeIcon
                      icon={feature.icon}
                      className="text-primary"
                    />
                  </span>
                )}
                <p className="mb-0">{feature.label}</p>
                {feature.new && pricing.category === 'Business' && (
                  <Badge variant="phoenix" bg="info" className="ms-2 text-sm">
                    New
                  </Badge>
                )}
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PricingItem;
