import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import Section from 'components/base/Section';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import PhoenixLoader from 'components/common/PhoenixLoader';
import OrderTrackingTimeline from 'components/timelines/OrderTrackingTimeline';
import { defaultBreadcrumbItems } from 'data/commonData';
import { orderTrackingTimelineData } from 'data/timelineData';
import { lazy, Suspense } from 'react';
import { Col, Row } from '@hummingbirdui/react';

const Mapbox = lazy(() => import('components/base/Mapbox'));

const OrderTracking = () => {
  return (
    <div className="pt-8 mb-16">
      <Section small className="py-0">
        <PageBreadcrumb items={defaultBreadcrumbItems} />
        <div className="flex flex-wrap justify-between items-end mb-8">
          <div>
            <h2>Order #234 Status</h2>
            <p className="text-muted mb-0">
              Payment Via{' '}
              <a className="font-bold" href="#!">
                Cash on delivery
              </a>
              ,<br className="sm:hidden" />
              <span className="sm:ms-1">Nov 12, 2021, 8:54AM.</span>
            </p>
          </div>
          <Button variant="outline" color="primary" className="mt-4">
            <FontAwesomeIcon icon={faPhone} className="me-2" />
            Call Support
          </Button>
        </div>
        <Row className="gy-16 gx-8">
          <Col xs={12} lg={6}>
            <Suspense fallback={<PhoenixLoader />}>
              <Mapbox
                className="border rounded-lg overflow-hidden h-full min-h-[50vh]"
                options={{
                  center: [-74.0020158, 40.7228022],
                  zoom: 15,
                  scrollZoom: false
                }}
              />
            </Suspense>
          </Col>
          <Col xs={12} lg={6}>
            <OrderTrackingTimeline data={orderTrackingTimelineData} />
          </Col>
        </Row>
      </Section>
    </div>
  );
};

export default OrderTracking;
