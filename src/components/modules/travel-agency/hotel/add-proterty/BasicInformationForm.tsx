import { useWizardFormContext } from 'providers/WizardFormProvider';
import { useState } from 'react';
import {
  FloatingLabel,
  Input,
  Row,
  Select,
  Textarea
} from '@hummingbirdui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faStar } from '@fortawesome/free-solid-svg-icons';
import { AddPropertyWizardFormData } from 'data/travel-agency/addProperty';

/** gold `+BasicInformationForm` (mixins/travel-agency/add-property/BasicInformationForm.pug) */
const BasicInformationForm = () => {
  const methods = useWizardFormContext<AddPropertyWizardFormData>();
  const { formData, onChange } = methods;
  const [isPropertyChain, setIsPropertyChain] = useState(false);
  const [isChannelManagement, setIsChannelManagement] = useState(true);

  return (
    <>
      <h3 className="mb-10">Basic information</h3>
      <h4 className="mb-6">Property Information</h4>
      <div className="form-floating">
        <Input
          type="text"
          name="propertyName"
          id="wizard-name"
          placeholder="Property Name"
          defaultValue={formData?.propertyName ?? 'With help text'}
          onChange={onChange}
        />
        <label className="form-label" htmlFor="wizard-name">
          Property Name
        </label>
        <h5 className="text-end text-soft font-semibold mt-2">
          <span className="text-primary">15 </span>/ 60
        </h5>
      </div>
      <div className="form-floating my-4">
        <Textarea
          className="h-40.5"
          placeholder="Description"
          name="propertyInfo"
          id="wizard-des"
          onChange={onChange}
        />
        <label className="form-label" htmlFor="wizard-des">
          DESCRIPTION
        </label>
        <h5 className="text-end text-soft font-semibold mt-2">
          <span className="text-primary">0 </span>/ 360
        </h5>
      </div>
      <Row className="g-4">
        <div className="md:col-8 lg:col-12 xl:col-8">
          <FloatingLabel htmlFor="property-type" label="Property Type">
            <Select id="property-type" name="propertyType" onChange={onChange}>
              <option value="1">Hotel</option>
              <option value="1">Flight</option>
              <option value="2">Trip</option>
            </Select>
          </FloatingLabel>
        </div>
        <div className="md:col-4 lg:col-12 xl:col-4">
          <div className="input-group-icon">
            <div className="form-floating">
              <Select
                className="form-control"
                name="propertyRating"
                id="rating-type"
                onChange={onChange}
              >
                <option value="5">5 star</option>
                <option value="4">4 star</option>
                <option value="3">3 star</option>
                <option value="2">2 star</option>
                <option value="1">1 star</option>
              </Select>
              <label
                htmlFor="rating-type"
                className="text-subtle form-label translate-x-11.5 rtl:-translate-x-11.5"
              >
                Rating
              </label>
            </div>
            <FontAwesomeIcon
              icon={faStar}
              className="text-sm text-warning form-control-icon-start"
            />
          </div>
        </div>
      </Row>
      <h4 className="mt-10 mb-4">Contact Information</h4>
      <Row className="g-4">
        <div className="md:col-6">
          <FloatingLabel htmlFor="wizard-email" label="Email Address">
            <Input
              type="email"
              name="contactEmail"
              id="wizard-email"
              className="input-spin-none"
              placeholder="Email Address"
              onChange={onChange}
            />
          </FloatingLabel>
        </div>
        <div className="md:col-6">
          <FloatingLabel htmlFor="wizard-phone" label="Phone number">
            <Input
              type="number"
              name="contactNumber"
              id="wizard-phone"
              className="input-spin-none"
              placeholder="Phone number"
              onChange={onChange}
            />
          </FloatingLabel>
        </div>
      </Row>
      <h4 className="mt-10 mb-4">Is it part of a hotel / property chain?</h4>
      <Row className="items-center g-4">
        <div className="sm:col-auto flex">
          <div className="form-check form-check-inline me-6 sm:me-13 mb-0">
            <input
              className="form-check-input"
              id="no1"
              type="radio"
              name="CheckIsHotelRadio"
              value="no"
              checked={!isPropertyChain}
              onChange={() => setIsPropertyChain(false)}
            />
            <label className="form-check-label" htmlFor="no1">
              No
            </label>
          </div>
          <div className="form-check form-check-inline me-0 mb-0">
            <input
              className="form-check-input"
              id="yes1"
              type="radio"
              name="CheckIsHotelRadio"
              value="yes"
              checked={isPropertyChain}
              onChange={() => setIsPropertyChain(true)}
            />
            <label className="form-check-label" htmlFor="yes1">
              Yes
            </label>
          </div>
        </div>
        <div className="sm:col-auto flex-1">
          <FloatingLabel
            htmlFor="wizard-company"
            label="Name of Company, Group or Chain"
          >
            <Input
              type="text"
              name="propertyChain"
              id="wizard-company"
              placeholder="Name of Company, Group or Chain"
              defaultValue="With help text"
              disabled={!isPropertyChain}
              onChange={onChange}
            />
          </FloatingLabel>
        </div>
      </Row>
      <h4 className="mt-10 mb-4">Do you use a Channel Management Systems?</h4>
      <Row className="items-center g-4">
        <div className="sm:col-auto flex">
          <div className="form-check form-check-inline me-6 sm:me-13 mb-0">
            <input
              className="form-check-input"
              id="no2"
              type="radio"
              name="CheckUseRadio"
              value="no"
              checked={!isChannelManagement}
              onChange={() => setIsChannelManagement(false)}
            />
            <label className="form-check-label" htmlFor="no2">
              No
            </label>
          </div>
          <div className="form-check form-check-inline me-0 mb-0">
            <input
              className="form-check-input"
              id="yes2"
              type="radio"
              name="CheckUseRadio"
              value="yes"
              checked={isChannelManagement}
              onChange={() => setIsChannelManagement(true)}
            />
            <label className="form-check-label" htmlFor="yes2">
              Yes
            </label>
          </div>
        </div>
        <div className="sm:col-auto flex-1">
          <div className="form-floating">
            <Input
              type="text"
              name="channelManagement"
              id="wizard-cms"
              placeholder="CMS Provider name"
              disabled={!isChannelManagement}
              onChange={onChange}
            />
            <label className="form-label" htmlFor="wizard-cms">
              CMS Provider name
            </label>
            <FontAwesomeIcon
              icon={faSearch}
              transform="down-2"
              className="absolute text-soft text-md end-0 top-0 mt-4 me-4"
            />
          </div>
        </div>
      </Row>
    </>
  );
};

export default BasicInformationForm;
