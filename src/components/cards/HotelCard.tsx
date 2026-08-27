import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Badge from 'components/base/Badge';
import { hotelInterFace } from 'data/travel-agency/customer/hotel';
import { currencyFormat } from 'helpers/utils';
import { Link } from 'react-router';

const HotelCard = ({ hotelInfo }: { hotelInfo: hotelInterFace }) => {
  const { name, location, img, price, rating } = hotelInfo;
  return (
    <div className="hover-actions-trigger mx-auto rounded-lg overflow-hidden">
      <img src={img} alt="" height={220} className="img-fluid" />
      <div className="hover-actions top-0 end-0 mt-6 me-6 z-5">
        <button className="btn btn-wish">
          <FontAwesomeIcon icon={faHeart} transform="down-1" />
        </button>
      </div>
      <div className="backdrop-faded backdrop-secondary-dark h-full flex flex-col justify-end">
        <Link
          className="stretched-link text-lg text-white font-bold"
          to="/apps/travel-agency/hotel/customer/hotel-details"
        >
          {name}
        </Link>
        <p className="mb-2 text-secondary-lighter">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
          {location}
        </p>
        <div className="flex items-center gap-4">
          <Badge variant="phoenix" bg="warning" className="text-base font-normal">
            <FontAwesomeIcon
              icon={faStar}
              className="text-warning-emphasis me-1 text-md"
              transform="up-1"
            />
            {rating}
          </Badge>
          <h4 className="mb-0 text-white font-bold whitespace-nowrap">
            {currencyFormat(parseFloat(price), {
              minimumFractionDigits: 2
            })}
            <span className="text-secondary-lighter text-base font-normal">
              {' '}
              / night
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
