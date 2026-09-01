import { faRotate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { Col, Row } from 'react-bootstrap';
import { Suspense, lazy } from 'react';
import PhoenixLoader from 'components/common/PhoenixLoader';

const Mapbox = lazy(() => import('components/base/MapBox'));

const Location = () => {
  return (
    <div className="mb-14">
      <h3 className="mb-8 xl:mb-6">Location</h3>
      <div className="mb-4 xl:mb-6 location-map border border-subtle overflow-hidden">
        <Suspense fallback={<PhoenixLoader />}>
          <Mapbox
            className="border rounded-lg"
            options={{
              center: [-74.0020158, 40.7228022],
              zoom: 14,
              scrollZoom: false
            }}
          />
        </Suspense>
      </div>
      <Row className="flex-between-center gx-0 gy-4">
        <Col xs={12} sm="auto" className="me-1">
          <div className="flex">
            <h5 className="font-bold text-highlight me-2 mb-0">
              James Tiberius Auditorium
            </h5>
            <p className="mb-0 text-highlight text-md">Vancouver</p>
          </div>
        </Col>
        <Col xs={12} sm="auto" xl={12}>
          <Button
            variant="phoenix-primary"
            className="w-full"
            startIcon={<FontAwesomeIcon icon={faRotate} className="me-2" />}
          >
            Get directions
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Location;
