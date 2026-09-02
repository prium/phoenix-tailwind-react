import { Col, Row } from 'react-bootstrap';
import HelpCenter from '../default/address/HelpCenter';
import QueryForm from '../default/address/QueryForm';
import { lazy, Suspense } from 'react';
import PhoenixLoader from 'components/common/PhoenixLoader';
const Mapbox = lazy(() => import('components/base/MapBox'));

const AddressSection = () => {
  return (
    <section className="pb-18 xl:pb-28">
      <div className="container-small lg:px-12 2xl:px-4">
        <div className="text-center mb-12">
          <h5 className="text-info mb-4">Contact</h5>
          <h2 className="mb-2">Choose the best deal for you</h2>
        </div>
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
