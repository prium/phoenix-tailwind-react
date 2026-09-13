import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row, Tabs } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import PricingPackageList from 'components/list-items/PricingPackageList';
import PricingGridItem from 'components/pricing-items/PricingGridItem';
import {
  PricingGridPlan,
  pricingGridBreadcrumbItems,
  pricingGridFeatures,
  pricingGridMonthlyItems,
  pricingGridYearlyItems
} from 'data/pricing';

const PricingPlans = ({
  plans,
  name
}: {
  plans: PricingGridPlan[];
  name: string;
}) => (
  <Row className="g-4">
    {plans.map(plan => (
      <Col key={plan.id} xs={12} md={6} lg={12} xl={6}>
        <PricingGridItem plan={plan} name={name} />
      </Col>
    ))}
  </Row>
);

const PricingGrid = () => {
  return (
    <div className="pb-16">
      <PageBreadcrumb items={pricingGridBreadcrumbItems} />
      <h2 className="mb-12">Pricing</h2>
      <Row>
        <Col xl={12} xxl={9} className="mb-1">
          {/* The gold's `.tab-content`/`.tab-pane` classes only toggle display,
              which Radix already does through the Tabs content state. */}
          <Tabs defaultValue="monthly" className="tabs mb-12">
            <Tabs.List variant="underline" className="text-md mb-4" asChild>
              <ul id="nav-tab">
                <li className="nav-item">
                  <Tabs.Trigger value="yearly">Yearly</Tabs.Trigger>
                </li>
                <li className="nav-item">
                  <Tabs.Trigger value="monthly">Monthly</Tabs.Trigger>
                </li>
              </ul>
            </Tabs.List>
            <Tabs.Content value="monthly">
              <PricingPlans
                plans={pricingGridMonthlyItems}
                name="pricingMonthly"
              />
            </Tabs.Content>
            <Tabs.Content value="yearly">
              <PricingPlans
                plans={pricingGridYearlyItems}
                name="pricingYearly"
              />
            </Tabs.Content>
          </Tabs>
          <div>
            <p className="mb-0">
              Business Starter, Business Standard, and Business Plus plans can
              be purchased for a maximum of 300 users. There is no{' '}
              <br className="hidden xl:block 2xl:hidden" />
              maximum user limit for Enterprise plans.
            </p>
            <p className="font-semibold">
              Phoenix customers may have access to additional features for a
              limited <br className="hidden sm:block lg:hidden" />
              promotional period.
            </p>
            <div className="grid sm:flex">
              <Button
                variant="primary"
                size="lg"
                className="sm:flex items-center mb-4 sm:mb-0 sm:me-4 sm:px-14"
                endIcon={<FontAwesomeIcon icon={faAngleRight} />}
              >
                Subscribe Now
              </Button>
              <Button variant="outline-primary" size="lg" className="sm:px-12">
                Start 7 days free Trial
              </Button>
            </div>
          </div>
        </Col>
        <Col xs xxl={3} className="mt-14">
          <h3 className="font-semibold mb-4">Included in our all packages</h3>
          <PricingPackageList features={pricingGridFeatures} />
        </Col>
      </Row>
    </div>
  );
};

export default PricingGrid;
