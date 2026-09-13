import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row, cn } from '@hummingbirdui/react';
import { dropdownData } from 'data/social/dropdownData';

/** `+ProfileNavigation` in mixins/social/Feed.pug */
const ProfileNavigation = ({ className }: { className?: string }) => {
  return (
    <Row className={cn(className, 'g-0')}>
      {dropdownData.slice(0, 6).map((item, index) => (
        <Col
          key={item.label}
          xs={6}
          className={cn('py-2 border-subtle', {
            'border-b border-e': index === 0 || index === 2,
            'border-b': index === 1 || index === 3,
            'border-e': index === 4
          })}
        >
          <a
            href="#!"
            className={cn(
              'btn btn-link text-base text-muted text-primary-hover font-semibold flex flex-col 2xl:inline-block',
              { 'ps-2': index % 2 === 0 }
            )}
          >
            <FontAwesomeIcon icon={item.icon} className="me-2 mb-2 2xl:mb-0" />
            {item.label}
          </a>
        </Col>
      ))}
    </Row>
  );
};

export default ProfileNavigation;
