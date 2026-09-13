import { faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bgLeft29 from 'assets/img/bg/bg-left-29.png';
import { Card, Col, Row } from '@hummingbirdui/react';
import { Link } from 'react-router';
import FeatherIcon from 'feather-icons-react';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { hotelInterFace, hotelsData } from 'data/travel-agency/landing';

const HotelDetails = (data: hotelInterFace) => {
  const { image, rating, stay, name, located, price } = data;
  return (
    <Card className="card-img-shift border-0 mx-auto">
      <div className="rounded-lg overflow-hidden w-full relative z-5">
        <img src={image} alt="" className="h-62.5 w-full" />
        <button className="btn btn-wish absolute top-0 end-0 mt-4 me-4">
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
      <Card.Body className="p-0">
        <div className="card-content bg-red-500">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
            <div>
              <span
                className={`badge px-1 me-2 badge-phoenix-${data.status.type}`}
              >
                {data.status.label}
              </span>
              <span className={`badge px-1 badge-phoenix-${data.package.type}`}>
                {data.package.label}
              </span>
            </div>
            <h6>
              <FontAwesomeIcon icon={faStar} className="text-warning me-1" />
              {rating} ({stay}k stay)
            </h6>
          </div>
          <Link
            to="#!"
            className="font-bold text-lg text-emphasis mb-2 text-primary-hover"
          >
            {name}
          </Link>
          <Link
            to="#!"
            className="font-semibold text-subtle mb-4 block text-base"
          >
            <FeatherIcon icon="map-pin" size={16} className="me-1" />
            {located}
          </Link>
          <h6 className="fe-semibold text-subtle flex items-center gap-1 mb-6">
            From{' '}
            <span className="font-black text-lg text-highlight">${price}</span>/
            per night
          </h6>
          <button className="btn btn-primary px-8">Book Now</button>
        </div>
      </Card.Body>
    </Card>
  );
};

const BestHotel = () => {
  return (
    <section className="py-0">
      <div
        className="bg-holder hidden xl:block bg-auto! bg-position-[-15%]!"
        style={{ backgroundImage: `url(${bgLeft29})` }}
      />
      <div className="container-medium relative">
        <h3 className="mb-2 text-emphasis text-center xl:text-start">
          The best of our hotel
        </h3>
        <div className="xl:flex justify-between mb-8 text-center">
          <p className="mb-0 text-subtle">
            This list will help you get insights into how much you’ll need to
            spend to afford accommodation.
          </p>
          <button className="btn btn-link p-0 text-base">
            View all
            <FontAwesomeIcon
              icon={faChevronRight}
              transform="shrink-3"
              className="ms-2"
            />
          </button>
        </div>
        <Row className="g-0 justify-center">
          <Col sm={11} md={8} lg={6} xl={12}>
            <Row className="gy-8 xl:gx-12 justify-between pe-6">
              {hotelsData.map((data, index) => (
                <Col xl={4} key={index}>
                  <HotelDetails {...data} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default BestHotel;
