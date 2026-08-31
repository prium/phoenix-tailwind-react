import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhoenixReactRange from 'components/forms/PhoenixReactRange';
import React, { Fragment, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { homepageOffcanvasAmenitiesItems } from 'data/travel-agency/customer/hotel';
import classNames from 'classnames';
import { Link } from 'react-router';
import Button from 'components/base/Button';
import GenerateStar from 'components/common/GenerateStar';
import InputGroupCounter from 'components/common/InputGroupCounter';

const HomepageFilterOffcanvasContent = () => {
  const [range, setRange] = useState([110, 200]);
  return (
    <>
      <h4 className="text-highlight mb-6">Price Range</h4>
      <Row className="g-2">
        <Col xs={6}>
          <div className="form-icon-container">
            <Form.Control
              type="text-"
              placeholder="Minimum amount $100"
              className="form-icon-input"
            />
            <FontAwesomeIcon
              icon={faDollarSign}
              className="text-md form-icon text-subtle"
            />
          </div>
        </Col>
        <Col xs={6}>
          <div className="form-icon-container">
            <Form.Control
              type="text-"
              placeholder="Maximum amount $245"
              className="form-icon-input"
            />
            <FontAwesomeIcon
              icon={faDollarSign}
              className="text-md form-icon text-subtle"
            />
          </div>
        </Col>
      </Row>
      <PhoenixReactRange
        min={100}
        max={245}
        values={range}
        onChange={val => setRange(val)}
        trackHeight="1.5rem"
        variant="primary-lighter"
        classNames="phoenix-react-range-large mt-3 ps-5 pe-3"
      />
      <hr className="my-8" />
      <h4 className="text-highlight mb-6">Amenities</h4>
      {homepageOffcanvasAmenitiesItems.map(amenity => (
        <Fragment key={amenity.id}>
          <p className={classNames(amenity.className, 'text-subtle')}>
            {amenity.title}
          </p>
          <Row className="g-4">
            <Col xs={6}>
              {amenity.checkboxItems
                .slice(0, Math.ceil(amenity.checkboxItems.length / 2))
                .map(item => (
                  <Form.Check key={item.id}>
                    <Form.Check.Input
                      type="checkbox"
                      id={item.id}
                      name={item.label}
                    />
                    <Form.Check.Label className="text-base text-highlight font-normal">
                      {item.label}
                    </Form.Check.Label>
                  </Form.Check>
                ))}
            </Col>
            <Col xs={6}>
              {amenity.checkboxItems
                .slice(Math.ceil(amenity.checkboxItems.length / 2))
                .map(item => (
                  <Form.Check key={item.id}>
                    <Form.Check.Input
                      type="checkbox"
                      id={item.id}
                      name={item.label}
                    />
                    <Form.Check.Label className="text-base text-highlight font-normal">
                      {item.label}
                    </Form.Check.Label>
                  </Form.Check>
                ))}
            </Col>
          </Row>
        </Fragment>
      ))}
      <Link to={'#!'} className="font-bold text-md mt-4 inline-block">
        Show more items
      </Link>
      <hr className="my-8" />
      <h4 className="mb-6 text-highlight">Number of Private Bathrooms</h4>
      <InputGroupCounter
        id="privateBathrooms"
        inputGap="gap-2 w-70 w-sm-50"
        buttonClasses="px-3 rounded"
        iconClasses=""
      />

      <h4 className="mb-6 mt-8 text-highlight">Number of Bedrooms</h4>
      <InputGroupCounter
        id="bedRooms"
        inputGap="gap-2 w-70 w-sm-50"
        buttonClasses="px-3 rounded"
        iconClasses=""
      />

      <h4 className="mb-6 mt-8 text-highlight">Number of Beds</h4>
      <InputGroupCounter
        id="beds"
        inputGap="gap-2 w-70 w-sm-50"
        buttonClasses="px-3 rounded"
        iconClasses=""
      />
      <hr className="my-8" />
      <h4 className="text-highlight mb-6">Rating</h4>
      {Array.from([5, 4, 3, 2, 1]).map((stars, index) => (
        <div key={stars}>
          <Form.Check type="radio" className="px-0">
            <Form.Check.Input
              type="radio"
              className="rating-radio btn-check"
              name="ratingOption"
              defaultValue={`${stars}-stars`}
              defaultChecked={index === 0}
              id={`option${stars}`}
            />
            <Form.Check.Label
              htmlFor={`option${stars}`}
              className="btn w-full flex items-center gap-1"
            >
              <GenerateStar filledStars={stars} />
              {stars < 5 && (
                <span className="text-default ms-1 text-base font-normal">and above</span>
              )}
            </Form.Check.Label>
          </Form.Check>
        </div>
      ))}
      <div className="mt-6 pt-6 border-t border-subtle flex gap-2">
        <Button variant="phoenix-primary" size="lg">
          Reset
        </Button>
        <Button variant="primary" size="lg" className="flex-1">
          Show 445 items
        </Button>
      </div>
    </>
  );
};

export default HomepageFilterOffcanvasContent;
