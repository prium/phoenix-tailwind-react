import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Button from 'components/base/Button';
import { dropdownData } from 'data/social/dropdownData';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';

const ProfileNavigation = ({ className }: { className?: string }) => {
  return (
    <Row className={classNames(className, 'g-0')}>
      {dropdownData.slice(0, 6).map((item, index) => (
        <Col
          key={index}
          xs={6}
          className={classNames('py-2 border-subtle', {
            'border-b border-e': index === 0 || index === 2,
            'border-b': index === 1 || index === 3,
            'border-e': index === 4
          })}
        >
          <Button
            as={Link}
            to="#!"
            variant="link"
            className={classNames(
              'text-base text-muted hover-primary font-semibold flex flex-col 2xl:inline-block items-center 2xl:items-start',
              {
                'ps-2': index % 2 === 0
              }
            )}
            startIcon={
              <FontAwesomeIcon
                icon={item.icon}
                className="me-2 mb-2 2xl:mb-0"
              />
            }
          >
            {item.label}
          </Button>
        </Col>
      ))}
    </Row>
  );
};

export default ProfileNavigation;
