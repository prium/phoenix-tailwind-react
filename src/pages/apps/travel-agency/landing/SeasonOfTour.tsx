import React, { FC, HTMLAttributes } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import bgLeft27 from 'assets/img/bg/bg-left-27.png';
import bgRight27 from 'assets/img/bg/bg-right-27.png';
import gallery35 from 'assets/img/gallery/35.png';
import gallery36 from 'assets/img/gallery/36.png';
import gallery37 from 'assets/img/gallery/37.png';
import gallery38 from 'assets/img/gallery/38.png';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface ImageZoomHoverCard extends HTMLAttributes<HTMLDivElement> {
  src: string;
  title: string;
  subTitle: string;
  imgClass?: string;
}

const ImageZoomHoverCard: FC<ImageZoomHoverCard> = ({
  src,
  title,
  subTitle,
  imgClass = 'h-100',
  ...rest
}: ImageZoomHoverCard) => {
  return (
    <div className="img-zoom-hover relative h-full rounded-lg overflow-hidden">
      <Link to="#!">
        <img
          className={`w-full object-cover ${imgClass}`}
          src={src}
          alt=""
          {...rest}
        />
      </Link>
      <div className="backdrop-faded">
        <Link to="#!" className="font-bold text-lg text-white streched-link">
          {title}
        </Link>
        <p className="mb-0 text-white text-md">{subTitle}</p>
      </div>
    </div>
  );
};

const SeasonOfTour = () => {
  return (
    <section className="pt-10 md:pt-18 pb-18">
      <div className="container-medium">
        <div
          className="bg-holder hidden xl:block bg-left"
          style={{
            backgroundImage: `url(${bgLeft27})`,
            backgroundSize: 'auto'
          }}
        />
        <div
          className="bg-holder hidden xl:block bg-right"
          style={{
            backgroundImage: `url(${bgRight27})`,
            backgroundSize: 'auto'
          }}
        />
        <Row className="g-4 relative">
          <Col lg={6}>
            <Row className="g-4">
              <Col md={7}>
                <h4 className="font-semibold mb-4">Season of </h4>
                <h2 className="text-3xl font-semibold mb-4 md:mb-6">
                  Tour &{' '}
                  <span className="text-primary-light font-bold">Travel</span>
                </h2>
                <p className="mb-4 md:mb-0 text-subtle">
                  This is the perfect season for tours and travels. At Phoenix,
                  you can easily select the best travel option for your next
                  vacation
                  <span className="hidden lg:inline-block xl:hidden">
                    ...
                  </span>
                  <span className="lg:hidden xl:inline">
                    This will help you with the pricing that you’ll need, the
                    accommodation facilities, food and beverages, and water
                    rides.
                  </span>
                </p>
              </Col>

              <Col xs={6} md={5}>
                <ImageZoomHoverCard
                  src={gallery35}
                  title="New Zealand"
                  subTitle="17 Hotels"
                />
              </Col>
              <Col xs={6} md={5}>
                <ImageZoomHoverCard
                  src={gallery36}
                  title="London"
                  subTitle="17 Hotels"
                />
              </Col>
              <Col md={7}>
                <ImageZoomHoverCard
                  src={gallery37}
                  title="Maui"
                  subTitle="14 Hotels"
                  imgClass="h-md-100"
                />
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <div className="flex flex-col gap-4 h-full">
              <ImageZoomHoverCard
                src={gallery38}
                title="Bali, Indonesia"
                subTitle="51 Hotels"
                imgClass="h-lg-100"
                style={{ height: 220 }}
              />
              <Button variant="primary" className="w-full py-4 text-base">
                Explore more
                <FontAwesomeIcon
                  className="ms-2"
                  icon={faChevronRight}
                  transform="down-2"
                />
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default SeasonOfTour;
