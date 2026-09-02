import { UilCheckCircle } from '@iconscout/react-unicons';
import classNames from 'classnames';
import Badge from 'components/base/Badge';
import Unicon from 'components/base/Unicon';
import { PricingGrid } from 'data/pricing';
import { currencyFormat } from 'helpers/utils';
import { Card, Col, Form, Row } from 'react-bootstrap';

interface PricingGridItemProps {
  item: PricingGrid;
  pricingType: string;
}

const PricingGridItem = ({ item, pricingType }: PricingGridItemProps) => {
  return (
    <div className="h-full">
      <Form.Control
        type="radio"
        name={pricingType}
        className={classNames('pricing-plan-radio hidden', {
          'pricing-plan-recommended': item.badge?.label === 'recommended'
        })}
        defaultChecked={item.selected}
        id={`${item.title.split(' ')[0]}-${pricingType}`}
      />
      <div className="relative h-full">
        <Form.Label
          htmlFor={`${item.title.split(' ')[0]}-${pricingType}`}
          className="stretched-link"
        />
        <Card
          className={classNames('h-full overflow-hidden cursor-pointer', {
            'bg-warning-subtle border-warning warning-boxshadow pricing-business-plus':
              item.badge?.label === 'recommended'
          })}
        >
          <div
            className="bg-holder dark:hidden"
            style={{
              backgroundImage: `url(${item.bg})`,
              backgroundPosition: 'left bottom',
              backgroundSize: 'auto'
            }}
          />
          <div
            className="bg-holder hidden dark:block"
            style={{
              backgroundImage: `url(${item.darkBg})`,
              backgroundPosition: 'left bottom',
              backgroundSize: 'auto'
            }}
          />
          <Card.Body className="flex flex-col justify-between relative">
            <div className="flex justify-between">
              <div className="mb-8 md:mb-0 lg:mb-8 me-4">
                <div className="sm:flex items-center mb-4">
                  <h3 className="mb-0">{item.title}</h3>
                  {item.badge && (
                    <Badge
                      variant="default"
                      bg={item.badge.badgeBg}
                      className="sm:ms-4 text-sm uppercase"
                    >
                      {item.badge.label}
                    </Badge>
                  )}
                </div>
                <p
                  className="text-md text-subtle"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
                <div className="flex items-end md:mb-8 lg:mb-0">
                  {item.monthlyPrice === 0 || item.yearlyPrice === 0 ? (
                    <h4 className="font-black me-1">Free</h4>
                  ) : (
                    <h4 className="font-black me-1">{`${
                      pricingType === 'monthly'
                        ? currencyFormat(item.monthlyPrice)
                        : currencyFormat(item.yearlyPrice)
                    }`}</h4>
                  )}
                  {item.monthlyPrice === 0 || item.yearlyPrice === 0 ? (
                    <h5 className="text-md font-normal text-subtle ms-1">
                      Forever
                    </h5>
                  ) : (
                    <h5 className="text-md font-normal text-subtle ms-1">
                      {pricingType === 'monthly' ? 'Per month' : 'Per year'}
                    </h5>
                  )}
                </div>
              </div>
              <img
                src={item.img}
                className="dark:hidden"
                width={54}
                height={54}
                alt=""
              />
              <img
                src={item.imgDark}
                className="hidden dark:block"
                width={54}
                height={54}
                alt=""
              />
            </div>
            <Row className="flex-1 justify-end">
              <Col sm={8} md={12}>
                <div className="sm:flex md:block lg:flex justify-end items-end h-full">
                  <ul
                    className={classNames(
                      'list-unstyled mb-0 sm:border-s md:border-s-0 lg:border-s sm:ps-8 md:ps-0 lg:ps-8',
                      {
                        'border-warning-subtle':
                          item.badge?.label === 'recommended',
                        'border-subtle':
                          item.badge?.label !== 'recommended'
                      }
                    )}
                  >
                    {item.features.map((feature, index) => (
                      <li
                        key={feature}
                        className={classNames('flex items-center', {
                          'mb-2': index !== item.features.length - 1
                        })}
                      >
                        <Unicon
                          icon={UilCheckCircle}
                          fill='currentColor'
                          className="text-success me-2"
                          size={16}
                        />
                        <span
                          className="text-subtle font-semibold leading-none"
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
