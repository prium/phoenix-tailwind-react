import { Fragment } from 'react';
import {
  faArrowsRotate,
  faDollarSign,
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NouiSlider from 'components/base/NouiSlider';
import { homepageFilterCheckboxItems } from 'data/travel-agency/customer/trip';
import { Link } from 'react-router';

interface CheckItem {
  id: string;
  label: string;
}

/** gold stacks these 2×2: first column gets items 0 & 2, second 1 & 3 */
const twoColumns = (items: CheckItem[]) => [
  [items[0], items[2]],
  [items[1], items[3]]
];

const FormCheck = ({
  item,
  className
}: {
  item: CheckItem;
  className: string;
}) => (
  <div className={`form-check ${className}`}>
    <input
      className="form-check-input"
      id={item.id}
      type="checkbox"
      value={item.id}
    />
    <label
      className="form-check-label text-base text-highlight font-normal"
      htmlFor={item.id}
    >
      {item.label}
    </label>
  </div>
);

/** `+TripFilterOffcanvas` body in mixins/travel-agency/trip/TripFilterOffcanvas.pug */
const TripHomepageFilterOffcanvasContent = () => {
  return (
    <>
      <h4 className="text-highlight mb-6">Price Range</h4>
      <div className="row g-2">
        <div className="col-6">
          <div className="input-group-icon">
            <input
              className="form-control"
              type="text"
              placeholder="Minimum amount: $245"
            />
            <FontAwesomeIcon
              icon={faDollarSign}
              className="form-control-icon-start text-subtle text-md"
            />
          </div>
        </div>
        <div className="col-6">
          <div className="input-group-icon">
            <input
              className="form-control"
              type="text"
              placeholder="Maximum amount: $245"
            />
            <FontAwesomeIcon
              icon={faDollarSign}
              className="form-control-icon-start text-subtle text-md"
            />
          </div>
        </div>
      </div>
      <NouiSlider
        className="noUi-primary-lighter noUi-slider-large noUi-handle-primary noUi-handle-circle ps-8 pe-4 mt-4"
        min={0}
        max={250}
        defaultValues={[20, 150]}
      />
      <hr className="my-8" />
      <div className="lg:hidden">
        <h4 className="mb-6 text-highlight">Category</h4>
        <div className="row g-2">
          {homepageFilterCheckboxItems.categories.map((category, index) => (
            <div className="col-6" key={category.id}>
              <input
                className="btn-check trip-filter-checkbox"
                type="checkbox"
                name="trip-type"
                id={`${category.id}-offcanvas`}
                defaultChecked={index === 0}
              />
              <label
                className="btn btn-phoenix-secondary text-nowrap px-4 w-full"
                htmlFor={`${category.id}-offcanvas`}
              >
                {category.label}
              </label>
            </div>
          ))}
        </div>
        <hr className="my-8" />
      </div>
      <h4 className="mb-6 text-highlight">Duration</h4>
      <div className="row g-4">
        {twoColumns(homepageFilterCheckboxItems.durations).map(
          (column, colIndex) => (
            <div className="col-6" key={colIndex}>
              {column.map((item, index) => (
                <FormCheck
                  key={item.id}
                  item={item}
                  className={index === 0 ? 'mb-1.5' : 'mb-0'}
                />
              ))}
            </div>
          )
        )}
      </div>
      <hr className="my-8" />
      <h4 className="mb-6 text-highlight">Time</h4>
      <div className="row g-2">
        {homepageFilterCheckboxItems.times.map(time => (
          <div className="col-4" key={time.id}>
            <input
              className="btn-check flight-filter-checkbox"
              type="checkbox"
              name="trip-time"
              id={time.id}
            />
            <label
              className="btn btn-phoenix-secondary text-center text-nowrap w-full px-0"
              htmlFor={time.id}
            >
              {time.label}
            </label>
          </div>
        ))}
      </div>
      <hr className="my-8" />
      <h4 className="mb-6 text-highlight">Travel Style</h4>
      <div className="row g-4">
        {twoColumns(homepageFilterCheckboxItems.travelStyles).map(
          (column, colIndex) => (
            <div className="col-6" key={colIndex}>
              {column.map((item, index) => (
                <FormCheck
                  key={item.id}
                  item={item}
                  className={index === 0 ? 'mb-1.5' : 'mb-0'}
                />
              ))}
            </div>
          )
        )}
      </div>
      <Link to="#!" className="font-bold text-md mt-4 inline-block">
        Show more items
      </Link>
      <hr className="my-8" />
      <h4 className="mb-6">Tags</h4>
      {homepageFilterCheckboxItems.tags.map(tag => (
        <Fragment key={tag.id}>
          <h5 className="font-normal my-4 text-soft">{tag.title}</h5>
          <div className="row gx-4">
            {tag.children.map(item => (
              <div className="col-6" key={item.id}>
                <FormCheck item={item} className="mb-1.5" />
              </div>
            ))}
          </div>
        </Fragment>
      ))}
      <Link to="#!" className="font-bold text-md mt-4 inline-block">
        Less items
      </Link>
    </>
  );
};

/** gold: sibling of `.offcanvas-body` — `.p-6.border-t.border-subtle.flex.gap-2` */
export const TripFilterOffcanvasFooter = () => (
  <div className="p-6 border-t border-subtle flex gap-2">
    <button type="button" className="btn btn-lg btn-phoenix-primary">
      <FontAwesomeIcon icon={faArrowsRotate} className="me-2 text-md" />
      Reset
    </button>
    <button type="submit" className="btn btn-lg btn-primary flex-1">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="me-2 text-md" />
      Update result
    </button>
  </div>
);

export default TripHomepageFilterOffcanvasContent;
