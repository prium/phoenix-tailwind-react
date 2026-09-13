import { faCheck, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn, Col, Row } from '@hummingbirdui/react';
import PhoenixSlider from 'components/forms/PhoenixSlider';
import { Fragment, useState } from 'react';
import { homepageOffcanvasAmenitiesItems } from 'data/travel-agency/customer/hotel';
import { Link } from 'react-router';
import GenerateStar from 'components/common/GenerateStar';
import InputGroupCounter from 'components/common/InputGroupCounter';

const counters = [
  { id: 'private-bathrooms', title: 'Number of Private Bathrooms' },
  { id: 'bedrooms', title: 'Number of Bedrooms' },
  { id: 'beds', title: 'Number of Beds' }
];

/** Body of `+HotelFilterOffcanvas` in mixins/travel-agency/hotel/HotelFilterOffcanvas.pug */
const HomepageFilterOffcanvasContent = () => {
  const [range, setRange] = useState([20, 150]);
  return (
    <>
      <h4 className="text-highlight mb-6">Price Range</h4>
      <Row className="g-2">
        <Col xs={6}>
          <div className="input-group-icon">
            <input
              type="text"
              placeholder="Minimum amount: $245"
              className="form-control"
            />
            <FontAwesomeIcon
              icon={faDollarSign}
              className="form-control-icon-start text-subtle text-md"
            />
          </div>
        </Col>
        <Col xs={6}>
          <div className="input-group-icon">
            <input
              type="text"
              placeholder="Maximum amount: $245"
              className="form-control"
            />
            <FontAwesomeIcon
              icon={faDollarSign}
              className="form-control-icon-start text-subtle text-md"
            />
          </div>
        </Col>
      </Row>
      <PhoenixSlider
        options={{ range: { min: 0, max: 250 }, start: range, connect: true }}
        onChange={val => setRange(val.map(Number))}
        className="noUi-primary-lighter noUi-slider-large noUi-handle-primary noUi-handle-circle ps-8 pe-4 mt-4"
      />
      <hr className="my-8" />
      <h4 className="mb-6 text-highlight">Amenities</h4>
      {homepageOffcanvasAmenitiesItems.map(amenity => (
        <Fragment key={amenity.id}>
          <p className={cn('text-subtle', amenity.className)}>
            {amenity.title}
          </p>
          <Row className="g-4">
            {[
              amenity.checkboxItems.slice(
                0,
                Math.ceil(amenity.checkboxItems.length / 2)
              ),
              amenity.checkboxItems.slice(
                Math.ceil(amenity.checkboxItems.length / 2)
              )
            ].map((columnItems, columnIndex) => (
              <Col xs={6} key={columnIndex}>
                {columnItems.map(item => (
                  <div className="form-check" key={item.id}>
                    <input
                      type="checkbox"
                      id={item.id}
                      value={item.id}
                      className="form-check-input"
                    />
                    <label
                      htmlFor={item.id}
                      className="form-check-label text-base text-highlight font-normal"
                    >
                      {item.label}
                    </label>
                  </div>
                ))}
              </Col>
            ))}
          </Row>
        </Fragment>
      ))}
      <Link to="#!" className="font-bold text-md mt-4 inline-block">
        Show more items
      </Link>
      <hr className="my-8" />
      {counters.map((counter, index) => (
        <Fragment key={counter.id}>
          <h4 className={cn('mb-6 text-highlight', { 'mt-8': index > 0 })}>
            {counter.title}
          </h4>
          <InputGroupCounter
            id={counter.id}
            inputGap="gap-2 w-70 sm:w-1/2"
            buttonClasses="px-4 rounded-md"
            iconClasses=""
          />
        </Fragment>
      ))}
      <hr className="my-8" />
      <h4 className="mb-6">Rating</h4>
      {[5, 4, 3, 2, 1].map((stars, index) => (
        <Fragment key={stars}>
          <input
            type="radio"
            className="rating-radio btn-check"
            name="ratingOption"
            defaultChecked={index === 0}
            id={`option${index + 1}`}
          />
          <label
            htmlFor={`option${index + 1}`}
            className={cn('btn w-full flex items-center gap-1', {
              'mb-2': index < 4
            })}
          >
            <GenerateStar filledStars={stars} />
            {stars < 5 && (
              <span className="text-default ms-1 text-base font-normal">
                and above
              </span>
            )}
            <FontAwesomeIcon
              icon={faCheck}
              className="ms-auto text-primary check-icon"
            />
          </label>
        </Fragment>
      ))}
    </>
  );
};

export default HomepageFilterOffcanvasContent;
