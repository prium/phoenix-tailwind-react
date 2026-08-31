import { Fragment } from 'react';
import type {
  Facility,
  Charge
} from 'data/travel-agency/customer/hotelDetails';
import { cn, Col, Row } from '@hummingbirdui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface HotelDetailsFacilitiesProps {
  facilities: Facility[];
  charges: Charge[];
}

interface CategoryListProps {
  category: Charge;
  /** margin class on the list — gold: mb-5 except the last of each column */
  listClassName: string;
}

const CategoryLists = ({ category, listClassName }: CategoryListProps) => {
  return (
    <Fragment>
      <h5 className="mb-4">
        <FontAwesomeIcon icon={category.icon} className="text-md me-2" />
        {category.title}
      </h5>
      {category.desc && (
        <p className="mb-2 text-md text-subtle">{category.desc}</p>
      )}
      <ul className={cn('p-0 list-none', listClassName)}>
        {category.items.map((item, idx) => (
          <li key={idx} className="text-highlight">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-md text-success me-2"
            />
            {item.name}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

/** `+Facilities` in mixins/travel-agency/hotel/HotelDetailsTabContent.pug */
const HotelDetailsFacilities = ({
  facilities,
  charges
}: HotelDetailsFacilitiesProps) => {
  return (
    <>
      <h3 className="mb-8 font-bold">Facilities</h3>
      <h5 className="mb-4">Most popular</h5>
      <Row className="g-0">
        {facilities.map(facility => (
          <Col key={facility.id} sm={6} md={4}>
            <div
              className={cn(
                'flex items-center gap-2 px-6 py-4 h-full border border-subtle',
                facility.classes
              )}
            >
              <FontAwesomeIcon
                icon={facility.icon}
                className="text-md text-warning"
              />
              <h5 className="text-subtle mb-0 font-normal">{facility.title}</h5>
            </div>
          </Col>
        ))}
      </Row>
      <h6 className="text-warning uppercase font-normal my-8">
        <span className="me-2">*</span>
        ADDITIONAL CHARGES
      </h6>
      <Row className="g-4">
        <Col xs="auto" md={4}>
          {charges.slice(0, 5).map((category, index) => (
            <CategoryLists
              key={category.id}
              category={category}
              listClassName={index !== 4 ? 'mb-5' : 'sm:mb-0'}
            />
          ))}
        </Col>
        <Col xs={6} md={4}>
          {charges.slice(5, 10).map((category, index) => (
            <CategoryLists
              key={category.id}
              category={category}
              listClassName={index !== 4 ? 'mb-5' : 'sm:mb-0'}
            />
          ))}
        </Col>
        <Col xs="auto" md={4}>
          {charges.slice(10).map((category, index) => (
            <CategoryLists
              key={category.id}
              category={category}
              listClassName={index !== 4 ? 'mb-5' : 'mb-0'}
            />
          ))}
        </Col>
      </Row>
    </>
  );
};

export default HotelDetailsFacilities;
