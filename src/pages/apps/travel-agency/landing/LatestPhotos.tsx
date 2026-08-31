import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import gallery51 from 'assets/img/gallery/51.png';
import gallery52 from 'assets/img/gallery/52.png';
import gallery53 from 'assets/img/gallery/53.png';
import gallery54 from 'assets/img/gallery/54.png';
import gallery55 from 'assets/img/gallery/55.png';
import gallery56 from 'assets/img/gallery/56.png';
import { Col, Row } from '@hummingbirdui/react';
import { Link } from 'react-router';
interface photos {
  img: string;
  location: string;
}
const photos: photos[] = [
  {
    img: gallery51,
    location: 'Bali Indonesia'
  },
  {
    img: gallery52,
    location: 'Barcelona'
  },
  {
    img: gallery53,
    location: 'Bali Indonesia'
  },
  {
    img: gallery54,
    location: 'Sydney'
  },
  {
    img: gallery55,
    location: 'Great Barrier Reef'
  },
  {
    img: gallery56,
    location: 'Grand Canyon'
  }
];

const LatestPhotos = () => {
  return (
    <section className="pb-12 pt-0">
      <div className="container-medium">
        <div className="text-center mb-8">
          <h3 className="mb-2 text-emphasis">Latest photos from tourists</h3>
          <p className="mb-0 text-subtle">
            See how our tourists enjoyed their trip from images captured by them
            with Team Phoenix!
          </p>
        </div>
        <Row className="g-4">
          {photos.map((item, index) => (
            <Col md={6} xl={4} key={index}>
              <div className="img-zoom-hover rounded-lg overflow-hidden relative">
                <Link to="#!">
                  <img
                    className="latest-img w-full object-cover"
                    src={item.img}
                    alt=""
                  />
                </Link>
                <div className="backdrop-faded">
                  <Link
                    to="#!"
                    className="font-semibold mb-0 text-gray-100 stretched-link"
                  >
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="text-gray-100 me-2"
                    />
                    {item.location}
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default LatestPhotos;
