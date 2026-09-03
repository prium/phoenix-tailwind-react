import { Col, Row } from '@hummingbirdui/react';
import EcomTotalOrdersCard from 'components/cards/EcomTotalOrdersCard';
import EcomNewCustomersCard from 'components/cards/EcomNewCustomersCard';
import EcomTopCouponsCard from 'components/cards/EcomTopCouponsCard';
import EcomPayingVsNonPayingCard from 'components/cards/EcomPayingVsNonPayingCard';
import EcomLatestReviewsTable from 'components/tables/EcomLatestReviewsTable';
import EcomTopRegionsMap from 'components/leaflet-maps/EcomTopRegionsMap';
import EcomStats from 'components/stats/EcomStats';
import { mapMarkerPoints } from 'data/mapMarkerPoints';
import EcomProjectionVsActual from 'components/modules/e-commerce/dashboard/EcomProjectionVsActual';
import EcomReturningCustomerRate from 'components/modules/e-commerce/dashboard/EcomReturningCustomerRate';
import EcomTotalSells from 'components/modules/e-commerce/dashboard/EcomTotalSells';
import EcomTopRegions from 'components/modules/e-commerce/dashboard/EcomTopRegions';

/** Mirrors phoenix-tailwind `src/pug/index.pug` (E-commerce dashboard). */
const Ecommerce = () => {
  return (
    <>
      <div className="pb-8">
        <Row className="g-6">
          <Col xs={12} xxl={6}>
            <div className="mb-14">
              <h2 className="mb-2">Ecommerce Dashboard</h2>
              <h5 className="text-subtle font-semibold">
                Here’s what’s going on at your business right now
              </h5>
            </div>
            <EcomStats />
            <hr className="bg-muted mb-10 mt-6" />
            <EcomTotalSells />
          </Col>
          <Col xs={12} xxl={6}>
            <Row className="g-4">
              <Col xs={12} md={6}>
                <EcomTotalOrdersCard />
              </Col>
              <Col xs={12} md={6}>
                <EcomNewCustomersCard />
              </Col>
              <Col xs={12} md={6}>
                <EcomTopCouponsCard />
              </Col>
              <Col xs={12} md={6}>
                <EcomPayingVsNonPayingCard />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="-mx-6 px-6 lg:-mx-10 lg:px-10 bg-soft pt-12 border-y">
        <EcomLatestReviewsTable />
      </div>
      <Row className="gx-10">
        <Col xs={12} xl={6}>
          <EcomTopRegions />
        </Col>
        <Col xs={12} xl={6}>
          <div className="-mx-6 lg:-mx-10 xl:ms-0 h-full">
            <div className="h-full w-full">
              <EcomTopRegionsMap data={mapMarkerPoints} />
            </div>
          </div>
        </Col>
      </Row>
      <div className="-mx-6 px-6 lg:-mx-10 lg:px-10 bg-soft pt-10 pb-16 border-t">
        <Row className="g-10">
          <Col xs={12} xl={6}>
            <EcomProjectionVsActual />
          </Col>
          <Col xs={12} xl={6}>
            <EcomReturningCustomerRate />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Ecommerce;
