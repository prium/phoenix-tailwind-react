import { Col, Row } from 'react-bootstrap';
import HelpCenter from './HelpCenter';
import QueryForm from './QueryForm';
import { lazy, Suspense } from 'react';
import PhoenixLoader from 'components/common/PhoenixLoader';

const Mapbox = lazy(() => import('components/base/MapBox'));

const AddressSection = () => {
  return (
    <section>
      <div className="container-small lg:px-12 2xl:px-4">
        <div className="mb-6">
          <h4 className="text-primary font-black mb-4">Address</h4>
          <h2>If you need to find us:</h2>
        </div>

        <Row className="mb-4 text-center sm:text-start">
          <Col md={6}>
            <p>
              Do not lose your potential customers to others. Tell them exactly
              where you are with Geolocation enabled Phoenix admin dashboard. No
              need to take the burden of communicating directly.
            </p>
          </Col>
          <Col md={6}>
            <p>
              You can easily tell your customers where to find you with a
              precise location map. Getting closer was never easier!
            </p>
          </Col>
        </Row>
        <div className="mb-30">
          <Suspense fallback={<PhoenixLoader />}>
            <Mapbox
              className="rounded-2xl"
              style={{ height: 380 }}
              options={{
                center: [-74.0020158, 40.7228022],
                zoom: 14,
                scrollZoom: false
              }}
            />
          </Suspense>
        </div>
        <Row className="g-8 lg:g-8">
          <Col
            xs={12}
            md={6}
            className="mb-8 md:mb-0 text-center md:text-start"
          >
            <HelpCenter />
          </Col>
          <Col xs={12} md={6} className="text-center md:text-start">
            <QueryForm />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AddressSection;
