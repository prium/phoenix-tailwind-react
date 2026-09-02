import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Button from 'components/base/Button';
import { Feature } from 'data/landing/alternate-landing-data';
import { Col, Row } from 'react-bootstrap';

interface FeatureSectionProps {
  feature: Feature;
  isLast: boolean;
}

const FeatureSection = ({ feature, isLast }: FeatureSectionProps) => {
  return (
    <Row
      className={classNames('flex-between-center xl:px-20', {
        'mb-18 md:mb-16': !isLast
      })}
    >
      <Col
        xs={{ order: 1 }}
        md={{ span: 6, order: 0 }}
        className="text-center md:text-start"
      >
        <h4 className="mb-4">{feature.title}</h4>
        <p className="mb-8">{feature.description}</p>
        <Button
          variant="link"
          endIcon={<FontAwesomeIcon icon={faAngleRight} />}
          className="me-2 p-0 text-md"
        >
          Check Demo
        </Button>
      </Col>
      <Col md={5} className="mb-8 md:mb-0 text-center">
        <img
          src={feature.lightImg}
          alt=""
          className="w-3/4 md:w-full dark:hidden"
        />
        <img
          src={feature.darkImg}
          alt=""
          className="w-3/4 md:w-full hidden dark:block"
        />
      </Col>
    </Row>
  );
};

export default FeatureSection;
