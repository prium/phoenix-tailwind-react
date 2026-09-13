import bestInMarketBg from 'assets/img/e-commerce/best-in-market-bg.png';
import product from 'assets/img/e-commerce/5.png';
import { Col, Row } from '@hummingbirdui/react';
import { Link } from 'react-router';

const EcomBestInMarketBanner = () => {
  return (
    <div className="best-in-market-banner flex h-full px-6 sm:px-12 py-8 md:px-20 rounded-lg overflow-hidden">
      <div
        className="bg-holder -z-1! banner-bg"
        style={{
          backgroundImage: `url(${bestInMarketBg})`,
          backgroundPosition: 'bottom left'
        }}
      />
      <Row className="relative items-center sm:w-full">
        <Col xs={8}>
          <div className="banner-text">
            <h2 className="text-white font-extrabold sm:text-3xl mb-8">
              MI 11 Pro <br />{' '}
              <span className="text-lg sm:text-xl">Best in the market</span>
            </h2>
            <Link
              to="#!"
              className="btn btn-lg btn-warning rounded-full banner-button"
            >
              Buy Now
            </Link>
          </div>
        </Col>
        <Col xs={4}>
          <img src={product} alt="" className="w-full sm:w-3/4" />
        </Col>
      </Row>
    </div>
  );
};

export default EcomBestInMarketBanner;
