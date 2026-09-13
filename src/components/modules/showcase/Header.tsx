import bg24 from 'assets/img/bg/bg-24.png';
import { Col, Row } from '@hummingbirdui/react';

/** `mixins/showcase/Header.pug` */
const Header = () => {
  return (
    <section className="py-0">
      <div
        className="bg-holder bg-center! bg-auto!"
        style={{ backgroundImage: `url(${bg24})` }}
      />

      <div className="2xl:container relative">
        <Row className="flex-center">
          <Col
            xs={12}
            sm={9}
            xl={7}
            className="px-6 2xl:px-10 text-center pt-18"
          >
            <h1 className="display-3 font-extrabold leading-sm text-highlight mb-6">
              Multiple Demos for You
            </h1>
            <p className="mb-18">
              6 predefined layout options to cater the modern web application
              needs. The Flexible layout with easily customizable and
              ready-to-use UI components to help you design modern web apps
              faster.
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Header;
