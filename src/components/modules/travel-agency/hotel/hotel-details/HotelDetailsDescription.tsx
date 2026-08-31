import { lazy, Suspense, useEffect, useRef } from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Map } from 'mapbox-gl';
import PhoenixLoader from 'components/common/PhoenixLoader';
const Mapbox = lazy(() => import('components/base/MapBox'));

const HotelDetailsDescription = ({ activeKey }: { activeKey: string }) => {
  const mapRef = useRef<Map | null>(null);
  useEffect(() => {
    if (activeKey === 'description') {
      mapRef.current?.resize();
    }
  }, [activeKey]);

  return (
    <>
      <h3 className="mb-4 font-bold">Description</h3>
      <p className="text-default">
        Welcome to our hotel, an opulent and cozy setting with everything you
        need for a comfortable and happy stay. The city's biggest attractions,
        dining, shopping, and entertainment options are close to our hotel,
        which is situated in a desirable area.
      </p>
      <p className="text-default">
        Your comfort is our top priority when designing our rooms and suites,
        which include soft beds, fine linens, and contemporary conveniences like
        flat-screen TVs, fast internet access, and mini-fridges. Also, each room
        features a sizeable workstation, making it the perfect accommodation for
        business traveler's who need to remain connected and productive.
      </p>
      <div className="p-4 border bg-subtle border-subtle rounded-md flex flex-between-center flex-wrap gap-4">
        <h5 className="mb-0">
          <span className="text-subtle font-normal">
            Number of rooms :
          </span>{' '}
          70
        </h5>
        <h5 className="mb-0">
          <span className="text-subtle font-normal">
            Number of floors :
          </span>{' '}
          14
        </h5>
        <h5 className="mb-0">
          <span className="text-subtle font-normal">
            Construction year :
          </span>{' '}
          2018
        </h5>
      </div>
      <Card className="bg-default mt-8">
        <Card.Body>
          <div className="mb-6">
            <Suspense fallback={<PhoenixLoader />}>
              <Mapbox
                mapRef={mapRef}
                className="rounded-md border border-subtle overflow-hidden w-full"
                style={{ height: 300 }}
                options={{
                  center: [-74.0020158, 40.7228022],
                  zoom: 14,
                  scrollZoom: false
                }}
              />
            </Suspense>
          </div>
          <p className="mb-2 text-subtle uppercase">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-emphasis me-2"
            />
            Museum
          </p>
          <h5>
            1.5 km <span className="text-subtle font-normal">from</span>{' '}
            Museum of Liberation War, Dhaka
          </h5>
          <hr className="my-6" />
          <p className="mb-2 text-subtle uppercase">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-emphasis me-2"
            />
            Historical monument
          </p>
          <h5>
            3.5 km <span className="text-subtle font-normal">from</span>{' '}
            Lalbagh Kella
          </h5>
        </Card.Body>
      </Card>
    </>
  );
};

export default HotelDetailsDescription;
