import { useEffect, useRef, Suspense, lazy } from 'react';
import { useWizardFormContext } from 'providers/WizardFormProvider';
import { FloatingLabel, Input, Row } from '@hummingbirdui/react';
import { AddPropertyWizardFormData } from 'data/travel-agency/addProperty';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationCrosshairs,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons';
import { Map } from 'mapbox-gl';
import PhoenixLoader from 'components/common/PhoenixLoader';

const Mapbox = lazy(() => import('components/base/MapBox'));

/** gold `+LocationForm` (mixins/travel-agency/add-property/LocationForm.pug) */
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
      <div className="input-group-icon">
        <FontAwesomeIcon
          icon={faLocationDot}
          className="text-default text-md form-control-icon-start"
        />
        <FontAwesomeIcon
          icon={faLocationCrosshairs}
          className="text-primary text-md form-control-icon-end"
        />
        <div className="form-floating mb-4">
          <Input
            type="text"
            name="address"
            id="wizard-search-address"
            placeholder="Search address..."
            onChange={onChange}
          />
          <label
            className="form-label text-subtle"
            htmlFor="wizard-search-address"
          >
            Search address...
          </label>
        </div>
      </div>
      <div className="mapbox-container rounded-lg border overflow-hidden mt-4 mb-10">
        <Suspense fallback={<PhoenixLoader />}>
          <Mapbox
            mapRef={mapRef}
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
      <FloatingLabel htmlFor="wizard-street" label="Apartment / Street">
        <Input
          type="text"
          name="apartment"
          id="wizard-street"
          placeholder="Apartment / Street"
          onChange={onChange}
        />
      </FloatingLabel>
      <Row className="gx-4 my-4">
        <div className="md:col-6">
          <FloatingLabel
            className="mb-4 md:mb-0"
            htmlFor="wizard-city"
            label="City"
          >
            <Input
              type="text"
              name="city"
              id="wizard-city"
              placeholder="City"
              onChange={onChange}
            />
          </FloatingLabel>
        </div>
        <div className="md:col-6">
          <FloatingLabel htmlFor="wizard-state" label="State (Optional)">
            <Input
              type="text"
              name="state"
              id="wizard-state"
              placeholder="State (Optional)"
              onChange={onChange}
            />
          </FloatingLabel>
        </div>
      </Row>
      <Row className="g-4">
        <div className="md:col-6">
          <FloatingLabel htmlFor="wizard-zip-code" label="Zip Code">
            <Input
              type="text"
              name="zipCode"
              id="wizard-zip-code"
              placeholder="Zip Code"
              onChange={onChange}
            />
          </FloatingLabel>
        </div>
        <div className="md:col-6">
          <FloatingLabel htmlFor="wizard-country" label="Country / Region">
            <Input
              type="text"
              name="country"
              id="wizard-country"
              placeholder="Country / Region"
              onChange={onChange}
            />
          </FloatingLabel>
        </div>
      </Row>
      <div className="flex items-center gap-4 mt-10">
        <h4>Show your specific location</h4>
        <div className="form-check form-switch">
          <input
            className="form-check-input mt-1"
            id="locationSwitchCheckChecked"
            type="checkbox"
            name="locationSwitchChecked"
            defaultChecked
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
};

export default LocationForm;
