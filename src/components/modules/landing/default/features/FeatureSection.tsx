import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { Feature } from 'data/landing/default-landing-data';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';

interface FeatureSectionProps {
  feature: Feature;
  orderReverse?: boolean;
}

const FeatureSection = ({ feature, orderReverse }: FeatureSectionProps) => {
  const { lightImage, darkImage, label, title, details, link } = feature;
  return (
    <Row className="items-center justify-between text-center lg:text-start mb-10 lg:mb-2">
      <Col
        lg={5}
        className={classNames({
          'lg:order-1': orderReverse
        })}
      >
        <img
          className="feature-image mb-16 lg:mb-0 dark:hidden"
          src={lightImage}
          alt=""
        />
        <img
          className="feature-image mb-16 lg:mb-0 hidden dark:block"
          src={darkImage}
          alt=""
        />
      </Col>
      <Col lg={6}>
        <h6 className="text-primary mb-2 tracking-[0.165em]">{label}</h6>
        <h3 className="font-black mb-4">{title}</h3>
        <p className="mb-6 md:px-12 lg:px-0">{details}</p>
        <Link to={link} className="me-2 p-0 text-md font-bold">
          Check Demo
          <FontAwesomeIcon icon={faAngleRight} className="ms-2" />
        </Link>
      </Col>
    </Row>
  );
};

export default FeatureSection;
