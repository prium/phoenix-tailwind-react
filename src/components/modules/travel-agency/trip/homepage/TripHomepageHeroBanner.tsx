import { Fragment, useState } from 'react';
import bgIllustrations from 'assets/img/bg/46.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { homepageFilterCheckboxItems } from 'data/travel-agency/customer/trip';
import TripHomepageFilterOffcanvas from './TripHomepageFilterOffcanvas';

/** `+TripSearch` in phoenix-tailwind mixins/travel-agency/trip/TripSearch.pug */
const TripHomepageHeroBanner = () => {
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  return (
    <>
      <section className="py-0">
        <div
          className="bg-holder overlay before:bg-(--color-black)/50! bg-cover! bg-center!"
          style={{ backgroundImage: `url(${bgIllustrations})` }}
        />
        <div className="container-medium relative pt-20 pb-30">
          <h2 className="text-center text-white mb-6">
            Where do you want to go?
          </h2>
          <div className="relative w-md-70 lg:w-1/2 mx-auto mb-6 lg:mb-18">
            <input
              type="text"
              placeholder="Search for a location"
              className="form-control py-4 ps-6 pe-10 bg-soft rounded-full text-base"
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
                  <input
                    type="checkbox"
                    name="trip-type"
                    id={category.id}
                    className="btn-check trip-filter-checkbox"
                    defaultChecked={index === 0}
                  />
                  <label
                    htmlFor={category.id}
                    className="btn btn-phoenix-secondary text-nowrap px-4"
                  >
                    {category.label}
                  </label>
                </Fragment>
              ))}
            </div>
            <button
              type="button"
              className="btn btn-phoenix-secondary lg:ms-auto"
              aria-controls="tripFilterOffcanvas"
              onClick={() => setIsOffCanvasOpen(true)}
            >
              <FontAwesomeIcon icon={faFilter} className="text-sm me-2" />
              Filter
            </button>
          </div>
        </div>
      </section>
      <TripHomepageFilterOffcanvas
        show={isOffCanvasOpen}
        onHide={() => setIsOffCanvasOpen(false)}
      />
    </>
  );
};

export default TripHomepageHeroBanner;
