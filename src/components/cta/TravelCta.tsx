import { Col, Input, Row } from '@hummingbirdui/react';
import bgLeft32 from 'assets/img/bg/bg-left-32.png';
import bgRight32 from 'assets/img/bg/bg-right-32.png';
// gold 40.png / dark_40.png (the repo's own 40.png is the Coming Soon art used
// by pages/ComingSoon.tsx, so the gold files live under cta-*)
import spotIllustration40 from 'assets/img/spot-illustrations/cta-40.png';
import spotIllustrationDark40 from 'assets/img/spot-illustrations/cta-dark_40.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

/** `+Cta` in phoenix-tailwind mixins/travel-agency/landing/Cta.pug */
const TravelCta = () => {
  return (
    <section className="pb-18 pt-4">
      <div
        className="bg-holder hidden xl:block"
        style={{
          backgroundImage: `url(${bgLeft32})`,
          backgroundSize: '26%',
          backgroundPosition: 'left 115px'
        }}
      />
      <div
        className="bg-holder hidden xl:block"
        style={{
          backgroundImage: `url(${bgRight32})`,
          backgroundSize: '28%',
          backgroundPosition: 'right -25px'
        }}
      />
      <div className="container-medium relative">
        <Row className="g-0 justify-center">
          <Col lg={10} xl={7}>
            <div className="md:flex items-center gap-12 text-center md:text-start">
              <img
                src={spotIllustration40}
                className="mb-6 md:mb-0 dark:hidden w-65"
                alt=""
              />
              <img
                src={spotIllustrationDark40}
                className="mb-6 md:mb-0 hidden dark:block w-65"
                alt=""
              />
              <div className="flex-1">
                <h3 className="mb-0">Get Updates &amp; More</h3>
                <p className="mb-6 text-subtle">
                  Subscribe to our newsletter to stay updated.
                </p>
                <form className="flex justify-center">
                  <Input
                    type="email"
                    className="me-4"
                    id="ctaEmail1"
                    placeholder="Email"
                    aria-describedby="ctaEmail1"
                  />
                  <button
                    className="btn btn-primary flex items-center"
                    type="submit"
                  >
                    Subscribe
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="ms-2 text-md"
                    />
                  </button>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default TravelCta;
