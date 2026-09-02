import { UilCheckCircle } from '@iconscout/react-unicons';
import { Card, Col, Row, cn } from '@hummingbirdui/react';
import Badge from 'components/base/Badge';
import Unicon from 'components/base/Unicon';
import { PricingGridPlan } from 'data/pricing';
import { currencyFormat } from 'helpers/utils';

interface PricingGridItemProps {
  plan: PricingGridPlan;
  /** radio group name — the gold uses `pricingMonthly` / `pricingYearly` */
  name: string;
}

const PricingGridItem = ({ plan, name }: PricingGridItemProps) => {
  // The gold has two nearly identical mixins: `PricingCard` and
  // `PricingRecommendedCard`. The recommended one stacks the title/badge at
  // `md` and drops the bg-holder's 1px bottom offset.
  const recommended = plan.recommendedLayout;

  return (
    <div className="h-full">
      {/* `.card-form-check-input:checked + div .card` — the input must stay the
          previous sibling of the `.relative` wrapper */}
      <input
        type="radio"
        name={name}
        id={plan.id}
        defaultChecked={plan.defaultChecked}
        className={cn(
          'card-form-check-input hidden',
          plan.badge && 'pricing-plan-recommended'
        )}
      />
      <div className="relative h-full">
        <label className="stretched-link" htmlFor={plan.id} />
        <Card
          className={cn(
            'h-full overflow-hidden cursor-pointer',
            plan.highlighted &&
              'bg-warning-subtle border-warning! warning-boxshadow pricing-business-plus'
          )}
        >
          <div
            className={cn(
              'bg-holder bg-left-bottom! bg-auto!',
              !recommended && '-bottom-0.25!',
              'dark:hidden'
            )}
            style={{ backgroundImage: `url(${plan.bg})` }}
          />
          <div
            className={cn(
              'bg-holder bg-left-bottom! bg-auto!',
              !recommended && '-bottom-0.25!',
              'hidden dark:block'
            )}
            style={{ backgroundImage: `url(${plan.darkBg})` }}
          />
          <Card.Body className="flex flex-col justify-between relative">
            <div className="flex justify-between">
              <div className="mb-8 md:mb-0 lg:mb-8 me-4">
                <div
                  className={cn(
                    'sm:flex items-center mb-4',
                    recommended && 'md:block lg:flex'
                  )}
                >
                  <h3 className="mb-0">{plan.title}</h3>
                  {plan.badge && (
                    <Badge
                      variant="default"
                      bg={plan.badge.badgeBg}
                      className={cn(
                        'sm:ms-4 uppercase text-sm',
                        recommended && 'md:ms-0 lg:ms-4'
                      )}
                    >
                      {plan.badge.label}
                    </Badge>
                  )}
                </div>
                <p
                  className="text-md text-subtle"
                  dangerouslySetInnerHTML={{ __html: plan.description }}
                />
                <div className="flex items-end md:mb-8 lg:mb-0">
                  <h4 className="font-extrabold me-1">
                    {plan.price === 0 ? 'Free' : currencyFormat(plan.price)}
                  </h4>
                  <h5 className="text-md font-normal text-subtle ms-1">
                    {plan.price === 0 ? 'Forever' : plan.duration}
                  </h5>
                </div>
              </div>
              <img src={plan.img} alt="" className="dark:hidden size-13.5" />
              <img
                src={plan.imgDark}
                alt=""
                className="hidden dark:block size-13.5"
              />
            </div>
            <Row className="flex-1 justify-end">
              <Col sm={8} md={12}>
                <div className="sm:flex md:block lg:flex justify-end items-end h-full">
                  <ul
                    className={cn(
                      plan.borderClass,
                      'list-none',
                      !recommended && 'ps-0',
                      'mb-0 sm:border-s md:border-s-0 lg:border-s sm:ps-8 md:ps-0 lg:ps-8'
                    )}
                  >
                    {plan.features.map(feature => (
                      <li key={feature} className="flex items-center">
                        <Unicon
                          icon={UilCheckCircle}
                          size={16}
                          fill="currentColor"
                          className="text-success"
                          lineBox
                          wrapperClassName="me-2"
                        />
                        <span
                          className="text-subtle font-semibold"
                          dangerouslySetInnerHTML={{ __html: feature }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default PricingGridItem;
