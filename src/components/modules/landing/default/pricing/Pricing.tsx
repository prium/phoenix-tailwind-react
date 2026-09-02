import { pricingItems } from 'data/landing/pricingData';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import PricingItem from './PricingItem';
import classNames from 'classnames';
import bgLeft15 from 'assets/img/bg/bg-left-15.png';
import bgRight15 from 'assets/img/bg/bg-right-15.png';

const Pricing = () => {
  return (
    <section className="lg:pt-0 xl:pt-14">
      <div>
        <div
          className="bg-holder hidden md:block"
          style={{
            backgroundImage: `url(${bgLeft15})`,
            backgroundPosition: 'left',
            backgroundSize: 'auto'
          }}
        />
        <div
          className="bg-holder hidden md:block"
          style={{
            backgroundImage: `url(${bgRight15})`,
            backgroundPosition: 'right',
            backgroundSize: 'auto'
          }}
        />
      </div>

      <div className="container-small relative lg:px-12 2xl:px-4">
        <Row>
          <Col xs={12} className="mb-6 text-center sm:text-start">
            <h4 className="text-primary font-black mb-4">Pricing</h4>
            <h2>Choose the best deal for you</h2>
          </Col>
          <Col md={6} className="text-center sm:text-start">
            <p>
              Entice your customers with {import.meta.env.VITE_TITLE} admin
              dashboard. Show your best deal in this section to help customers
              choose from your best offers and place them all in one place with
              this efficient template. If you are availing more than one offer
              to your customers, let them compare among them and search for what
              they need to get. Show offer details here and entice them to buy.
            </p>
          </Col>
          <Col md={6} className="text-center sm:text-start">
            <p>
              offer to your customers, let them compare among them and search
              for what they need to get. Show offer details here and entice them
              to buy.
            </p>
          </Col>
        </Row>
        <Row className="pt-16 g-4 xl:g-0 mb-6 md:mb-14">
          {pricingItems.slice(0, 3).map((item, index) => (
            <Col key={item.id} md={6} xl={3}>
              <>
                <Card
                  className={classNames('h-full', {
                    'border border-2 border-primary mt-14 md:mt-0': item.popular,
                    'xl:rounded-e-none rounded-s-md': index === 0,
                    'rounded-t-none xl:rounded-none': index === 1,
                    'rounded-s-md xl:rounded-s-none mt-14 md:mt-0': index === 2
                  })}
                >
                  {item.popular && (
                    <div className="absolute flex flex-center bg-primary-subtle rounded-t-md py-1 end-0 start-0 badge-pricing">
                      <p className="text-primary-dark mb-0">Most popular</p>
                    </div>
                  )}
                  <Card.Body className="px-10">
                    <PricingItem pricing={item} />
                  </Card.Body>
                </Card>
              </>
            </Col>
          ))}

          <Col xs={12} md={6} xl={3} className="xl:ps-4">
            <Card className="mt-8 md:mt-0">
              <Card.Body className="px-10">
                <PricingItem pricing={pricingItems[3]} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="text-center">
          <p>
            For Enterprise Solution with Managed SMTP, Custom API setup,
            Dedicated Support, and more - <a href="#!">Contact us</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
