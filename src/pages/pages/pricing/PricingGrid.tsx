import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import PricingPackageList from 'components/list-items/PricingPackageList';
import PricingGridItem from 'components/pricing-items/PricingGridItem';
import {
  pricingBreadcrumbItems,
  pricingGridFeatures,
  pricingGridItems
} from 'data/pricing';
import { Col, Nav, Row, Tab } from 'react-bootstrap';

const PricingGrid = () => {
  return (
    <div className="mb-16">
      <PageBreadcrumb items={pricingBreadcrumbItems} />
      <h2 className="mb-12">Pricing</h2>
      <Row>
        <Col xl={12} xxl={9} className="mb-1">
          <Tab.Container defaultActiveKey="monthly">
            <Nav variant="underline" className="mb-4">
              <Nav.Item>
                <Nav.Link eventKey="yearly">Yearly</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="monthly">Monthly</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="yearly">
                <Row className="g-4">
                  {pricingGridItems.map(item => (
                    <Col key={item.id} md={6} lg={12} xl={6}>
                      <PricingGridItem item={item} pricingType="yearly" />
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="monthly">
                <Row className="g-4">
                  {pricingGridItems.map(item => (
                    <Col key={item.id} md={6} lg={12} xl={6}>
                      <PricingGridItem item={item} pricingType="monthly" />
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
          <div>
            <p className="mb-0 mt-12">
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
                className="mb-4 sm:mb-0 sm:me-4 sm:px-14"
                endIcon={
                  <FontAwesomeIcon icon={faAngleRight} transform="down-2" />
                }
              >
                Subscribe Now
              </Button>
              <Button variant="outline-primary" size="lg" className="sm:px-12">
                Start 7 days free Trial
              </Button>
            </div>
          </div>
        </Col>
        <Col xxl={3} className="mt-14">
          <h3 className="font-semibold mb-4">Included in our all packages</h3>
          <PricingPackageList features={pricingGridFeatures} />
        </Col>
      </Row>
    </div>
  );
};

export default PricingGrid;
