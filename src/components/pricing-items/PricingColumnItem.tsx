import { CSSProperties } from 'react';
import { faCheck, faCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@hummingbirdui/react';
import Badge from 'components/base/Badge';
import Button from 'components/base/Button';
import FaStack from 'components/base/FaStack';
import { PricingColumn, pricingColumnFeatures } from 'data/pricing';
import { currencyFormat } from 'helpers/utils';

interface PricingColumnItemProps {
  pricing: PricingColumn;
}

/**
 * The gold stacks its feature glyphs with FontAwesome's `fa-stack` (a filled
 * circle plus an inverse check/cross).
 */
const FeatureIcon = ({ included }: { included: boolean }) => (
  <span className="fa-li me-2 stack-icon-item">
    <FaStack
      className="text-xs"
      background={faCircle}
      backgroundClassName={included ? 'text-success' : 'text-soft/50'}
      icon={included ? faCheck : faTimes}
      inverse
      iconClassName={included ? 'text-white! dark:text-dark!' : 'text-subtle!'}
    />
  </span>
);

const PricingColumnItem = ({ pricing }: PricingColumnItemProps) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <img src={pricing.icon} alt="" className="w-30 h-24 mb-6 dark:hidden" />
        <img
          src={pricing.iconDark}
          alt=""
          className="w-30 h-24 mb-6 hidden dark:block"
        />
        <div className="sm:mb-8">
          <h3 className="mb-2">{pricing.title}</h3>
          <p className="text-muted mb-0 pe-3">{pricing.description}</p>
        </div>
      </div>
      <div>
        <div className="flex items-center mb-6">
          <h3 className="display-3 font-extrabold">
            {pricing.price === 0 ? 'Free' : currencyFormat(pricing.price)}
          </h3>
          {pricing.price !== 0 && (
            <h5 className="text-base font-normal ms-1">/ month</h5>
          )}
        </div>
        <Button
          variant={pricing.selected ? 'primary' : 'outline-primary'}
          size="lg"
          className="w-full mb-10"
        >
          Buy
        </Button>
        <h5 className="mb-6">What’s included</h5>
        <ul
          className="fa-ul"
          style={{ '--fa-li-margin': '1.5em' } as CSSProperties}
        >
          <li className="text-muted mb-2">
            <span className="fa-li">
              <FontAwesomeIcon icon={faCheck} className="text-primary" />
            </span>
            Timeline
          </li>
          {pricingColumnFeatures.map(item => {
            const included = pricing.features.includes(item.id);
            return (
              <li
                key={item.id}
                className={cn('mb-2', included ? 'text-default' : 'text-soft')}
              >
                <FeatureIcon included={included} />
                {item.label}
                {included && item.new && (
                  <Badge
                    variant="phoenix"
                    bg="primary"
                    className="ms-2 text-sm"
                  >
                    New
                  </Badge>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PricingColumnItem;
