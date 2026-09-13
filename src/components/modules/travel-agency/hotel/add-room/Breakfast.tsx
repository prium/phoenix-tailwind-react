import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn, FloatingLabel, Select } from '@hummingbirdui/react';
import { useState } from 'react';
import { Link } from 'react-router';

/** gold "Breakfast" radio tabs of PricingForm.pug */
const Breakfast = () => {
  const [included, setIncluded] = useState(true);

  return (
    <>
      <h4 className="mb-2 mt-12">Breakfast</h4>
      <p className="mb-7 text-subtle">
        Do you own multiple hotels, or are you part of a property management
        company or group?
      </p>
      <div
        className="nav nav-tabs mb-2 border-0"
        id="breakfastTab"
        role="tablist"
      >
        <div className="form-check-inline me-4">
          <input
            className="form-check-input"
            type="radio"
            id="breakfast-included-tab"
            name="breakfast-radio"
            checked={included}
            onChange={() => setIncluded(true)}
          />
          <label className="form-check-label" htmlFor="breakfast-included-tab">
            Yes, it&apos;s included in the price
          </label>
        </div>
        <div className="form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            id="breakfast-not-included-tab"
            name="breakfast-radio"
            checked={!included}
            onChange={() => setIncluded(false)}
          />
          <label
            className="form-check-label"
            htmlFor="breakfast-not-included-tab"
          >
            No
          </label>
        </div>
      </div>
      <div className="tab-content">
        <div
          className={cn('tab-pane fade sm:w-119', { 'show active': included })}
          id="breakfastInCluded"
          role="tabpanel"
        >
          <h5 className="text-highlight mt-8 mb-6">
            What type of food is available for breakfast for guests?
          </h5>
          <FloatingLabel htmlFor="breakfast-type-1" label="Option 1">
            <Select name="breakfast-type-1" id="breakfast-type-1">
              <option value="1">Continental breakfast</option>
              <option value="2">Option 2</option>
              <option value="2">Option 3</option>
            </Select>
          </FloatingLabel>
          <FloatingLabel
            htmlFor="breakfast-type-2"
            label="Option 2"
            className="my-2"
          >
            <Select name="breakfast-type-2" id="breakfast-type-2">
              <option value="1">American breakfast</option>
              <option value="2">Option 2</option>
              <option value="2">Option 3</option>
            </Select>
          </FloatingLabel>
          <FloatingLabel htmlFor="breakfast-type-3" label="Option 3">
            <Select name="breakfast-type-3" id="breakfast-type-3">
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="2">Option 3</option>
            </Select>
          </FloatingLabel>
          <div className="text-center mt-6">
            <Link to="#!" className="font-bold text-md">
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              Add more
            </Link>
          </div>
        </div>
        <div
          className={cn('tab-pane', { active: !included })}
          id="breakfastNotIncluded"
          role="tabpanel"
        />
      </div>
    </>
  );
};

export default Breakfast;
