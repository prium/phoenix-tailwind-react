import { faRoute } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import { Suspense, lazy } from 'react';
import PhoenixLoader from 'components/common/PhoenixLoader';

const Mapbox = lazy(() => import('components/base/Mapbox'));

/**
 * "Location" block of `+EventDetail` in mixins/events/EventDetail.pug.
 * The gold embeds a Google map (`.googlemap … h-54.5 rounded-lg`); the app
 * renders the same box with the shared lazy Mapbox instead.
 */
const Location = () => {
  return (
    <div className="mb-14">
      <h3 className="mb-8 xl:mb-6">Location </h3>
      <Suspense fallback={<PhoenixLoader />}>
        <Mapbox
          className="mb-4 xl:mb-6 border h-54.5 rounded-lg overflow-hidden"
          options={{
            center: [-74.0020158, 40.7228022],
            zoom: 15,
            scrollZoom: false
          }}
        />
      </Suspense>
      <Row className="flex-between-center g-0 gy-4">
        <Col xs={12} sm="auto" className="me-1">
          <div className="flex">
            <h3 className="font-bold text-highlight text-base me-2 mb-0">
              James Tiberius Auditorium
            </h3>
            <p className="mb-0 text-highlight text-md">Vancouver</p>
          </div>
        </Col>
        <Col xs={12} sm="auto" xl={12}>
          <Button
            variant="phoenix-primary"
            className="w-full"
            startIcon={<FontAwesomeIcon icon={faRoute} className="me-2" />}
          >
            Get directions
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Location;
