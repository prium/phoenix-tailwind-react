import React, { Fragment, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import {
  faDollarSign,
  faMagnifyingGlass,
  faRotate
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhoenixReactRange from 'components/forms/PhoenixReactRange';
import { homepageFilterCheckboxItems } from 'data/travel-agency/customer/trip';
import Button from 'components/base/Button';
import classNames from 'classnames';

const TripHomepageFilterOffcanvasContent = () => {
  const [range, setRange] = useState([110, 200]);
  return (
    <>
      <div className="px-6 pt-6">
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
          classNames="phoenix-react-range-large mt-3 ps-5 pe-5"
        />
        <hr className="my-8" />
        <div className="lg:hidden">
          <h4 className="mb-6 text-highlight">Category</h4>
          <Row className="g-2">
            {homepageFilterCheckboxItems.categories.map((category, index) => (
              <Col key={category.id} xs={6}>
                <Form.Check className="mb-0 px-0">
                  <Form.Check.Input
                    type="checkbox"
                    name="trip-type"
                    id={category.id}
                    className="btn-check trip-filter-checkbox"
                    defaultChecked={index === 0}
                  />
                  <Form.Check.Label
                    htmlFor={category.id}
                    className="btn btn-phoenix-secondary whitespace-nowrap font-bold px-4 w-full"
                  >
                    {category.label}
                  </Form.Check.Label>
                </Form.Check>
              </Col>
            ))}
          </Row>
          <hr className="my-8" />
        </div>
        <h4 className="mb-6 text-highlight">Duration</h4>
        <Row className="gx-4">
          {homepageFilterCheckboxItems.durations.map(duration => (
            <Col xs={6} key={duration.id}>
              <Form.Check className={classNames(duration.className)}>
                <Form.Check.Input id={duration.id} type="checkbox" />
                <Form.Check.Label
                  htmlFor={duration.id}
                  className="text-base text-highlight font-normal"
                >
                  {duration.label}
                </Form.Check.Label>
              </Form.Check>
            </Col>
          ))}
        </Row>
        <hr className="my-8" />
        <h4 className="mb-6 text-highlight">Time</h4>
        <Row className="g-2">
          {homepageFilterCheckboxItems.times.map(time => (
            <Col key={time.id} xs={4}>
              <Form.Check.Input
                type="checkbox"
                name="trip-type"
                id={time.id}
                className="btn-check flight-filter-checkbox"
              />
              <Form.Check.Label
                htmlFor={time.id}
                className="btn btn-phoenix-secondary font-bold whitespace-nowrap px-0 w-full"
              >
                {time.label}
              </Form.Check.Label>
            </Col>
          ))}
        </Row>
        <hr className="my-8" />
        <div>
          <h4 className="mb-6 text-highlight">Travel Style</h4>
          <Row className="gx-4">
            {homepageFilterCheckboxItems.travelStyles.map(travelStyle => (
              <Col key={travelStyle.id} xs={6}>
                <Form.Check className={classNames(travelStyle.className)}>
                  <Form.Check.Input id={travelStyle.id} type="checkbox" />
                  <Form.Check.Label
                    htmlFor={travelStyle.id}
                    className="text-base text-highlight font-normal"
                  >
                    {travelStyle.label}
                  </Form.Check.Label>
                </Form.Check>
              </Col>
            ))}
          </Row>
          <Button variant="link" className="text-md mt-4 inline-block p-0">
            Show more items
          </Button>
        </div>
        <hr className="my-8" />
        <div>
          <h4 className="mb-6">Tags</h4>
          {homepageFilterCheckboxItems.tags.map(tag => (
            <Fragment key={tag.id}>
              <h5 className="font-normal my-4 text-soft">
                {tag.title}
              </h5>
              <Row className="gx-4">
                {tag.children.map(itm => (
                  <Col key={itm.id} xs={6}>
                    <Form.Check>
                      <Form.Check.Input id={itm.id} type="checkbox" />
                      <Form.Check.Label
                        htmlFor={itm.id}
                        className="text-base text-highlight font-normal"
                      >
                        {itm.label}
                      </Form.Check.Label>
                    </Form.Check>
                  </Col>
                ))}
              </Row>
            </Fragment>
          ))}
          <Button variant="link" className="text-md mt-4 inline-block p-0">
            Less items
          </Button>
        </div>
      </div>
      <div className="mt-8 p-6 border-t border-subtle flex gap-2 bg-soft sticky bottom-0">
        <Button variant="phoenix-primary" className="m-0 whitespace-nowrap" size="lg">
          <FontAwesomeIcon icon={faRotate} className="me-2 text-md" />
          Reset
        </Button>
        <Button
          variant="primary"
          className="m-0 whitespace-nowrap flex-1"
          type="submit"
          size="lg"
          startIcon={
            <FontAwesomeIcon icon={faMagnifyingGlass} className="me-2 text-md" />
          }
        >
          Update result
        </Button>
      </div>
    </>
  );
};

export default TripHomepageFilterOffcanvasContent;
