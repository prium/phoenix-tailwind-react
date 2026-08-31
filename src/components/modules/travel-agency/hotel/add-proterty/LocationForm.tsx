import { useEffect, useRef, Suspense, lazy } from 'react';
import { useWizardFormContext } from 'providers/WizardFormProvider';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { AddPropertyWizardFormData } from 'data/travel-agency/addProperty';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationCrosshairs,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons';
import { Map } from 'mapbox-gl';
import PhoenixLoader from 'components/common/PhoenixLoader';

const Mapbox = lazy(() => import('components/base/MapBox'));

const LocationForm = ({ tabEventKey }: { tabEventKey: number }) => {
  const mapRef = useRef<Map | null>(null);
  const methods = useWizardFormContext<AddPropertyWizardFormData>();
  const { onChange } = methods;

  useEffect(() => {
    if (tabEventKey === 2) {
      mapRef.current?.resize();
    }
  }, [tabEventKey]);

  return (
    <>
      <h3 className="mb-10">Location</h3>
      <div className="form-icon-container mb-4">
        <Form.Floating>
          <Form.Control
            id="LacationAddress"
            name="address"
            type="text"
            placeholder="Search Address..."
            className="form-icon-input"
          />
          <label
            htmlFor="LacationAddress"
            className="form-icon-label text-subtle"
          >
            Search Address...
          </label>
        </Form.Floating>
        <FontAwesomeIcon
          icon={faLocationDot}
          className="text-default text-sm form-icon "
        />
        <FontAwesomeIcon
          icon={faLocationCrosshairs}
          className="absolute text-primary text-md end-0 top-0 mt-4 me-4"
          transform="down-2"
        />
      </div>
      <div className="mt-4 mb-10">
        <Suspense fallback={<PhoenixLoader />}>
          <Mapbox
            mapRef={mapRef}
            className="rounded-lg border overflow-hidden"
            options={{
              attributionControl: false,
              center: [-74.0020158, 40.7228022],
              zoom: 14,
              scrollZoom: false
            }}
            style={{ height: '250px', width: '100%' }}
          />
        </Suspense>
      </div>

      <FloatingLabel
        className="mb-4"
        controlId="street"
        label="Apartment /Street"
      >
        <Form.Control
          type="text"
          name="apartment"
          placeholder="Apartment /Street"
          onChange={onChange}
        />
      </FloatingLabel>
      <Row className="g-4">
        <Col md={6}>
          <FloatingLabel controlId="lacationCity" label="City">
            <Form.Control
              type="text"
              name="city"
              placeholder="City"
              onChange={onChange}
            />
          </FloatingLabel>
        </Col>
        <Col md={6}>
          <FloatingLabel controlId="lacationState" label="State (optional)">
            <Form.Control
              type="text"
              name="state"
              placeholder="State (optional)"
              onChange={onChange}
            />
          </FloatingLabel>
        </Col>

        <Col md={6}>
          <FloatingLabel controlId="lacationZipCode" label="Zip Code">
            <Form.Control
              type="text"
              name="zipCode"
              placeholder="Zip Code"
              onChange={onChange}
            />
          </FloatingLabel>
        </Col>
        <Col md={6}>
          <FloatingLabel controlId="lacationCountry" label="Country /Region">
            <Form.Control
              type="text"
              name="country"
              placeholder="Country /Region"
              onChange={onChange}
            />
          </FloatingLabel>
        </Col>
      </Row>
      <div className="flex items-center gap-4 mt-10">
        <h4>Show your specific location</h4>
        <Form.Check
          inline
          name="locationSwitchChecked"
          type="switch"
          id="locationSwitchChecked"
          onChange={onChange}
          defaultChecked={true}
        />
      </div>
    </>
  );
};

export default LocationForm;
