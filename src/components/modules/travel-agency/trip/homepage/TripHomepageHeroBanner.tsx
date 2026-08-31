import React, { Fragment, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import Button from 'components/base/Button';
import bgIllustrations from 'assets/img/bg/46.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { homepageFilterCheckboxItems } from 'data/travel-agency/customer/trip';
import TripHomepageFilterOffcanvas from './TripHomepageFilterOffcanvas';

const TripHomepageHeroBanner = () => {
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  return (
    <>
      <section className="p-0">
        <div
          className="bg-holder overlay bg-opacity-50"
          style={{
            backgroundImage: `url(${bgIllustrations})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <Container fluid="medium" className="relative pt-20 pb-30">
          <h2 className="text-center text-white mb-6">
            Where do you want to go?
          </h2>
          <div className="relative w-md-70 lg:w-1/2 mx-auto mb-6 lg:mb-18">
            <Form.Control
              type="text"
              placeholder="Search for a location"
              className="py-4 ps-6 pe-10 rounded-full text-base"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute top-0 end-0 mt-6 me-6 text-base text-subtle"
              transform="up-3"
            />
          </div>
          <div className="flex justify-center">
            <div className="hidden lg:flex gap-2">
              {homepageFilterCheckboxItems.categories.map((category, index) => (
                <Fragment key={category.id}>
                  <Form.Check.Input
                    type="checkbox"
                    name="trip-type"
                    id={category.id}
                    className="btn-check trip-filter-checkbox"
                    defaultChecked={index === 0}
                  />
                  <Form.Check.Label
                    htmlFor={category.id}
                    className="btn btn-phoenix-secondary font-bold whitespace-nowrap px-4"
                  >
                    {category.label}
                  </Form.Check.Label>
                </Fragment>
              ))}
            </div>
            <Button
              variant="phoenix-secondary"
              className="lg:ms-auto"
              onClick={() => setIsOffCanvasOpen(true)}
            >
              <FontAwesomeIcon icon={faFilter} className="text-sm me-2" />
              Filter
            </Button>
          </div>
        </Container>
      </section>
      <TripHomepageFilterOffcanvas
        show={isOffCanvasOpen}
        onHide={() => setIsOffCanvasOpen(false)}
      />
    </>
  );
};

export default TripHomepageHeroBanner;
