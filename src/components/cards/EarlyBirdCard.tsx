import Badge from 'components/base/Badge';
import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import illustration32 from 'assets/img/spot-illustrations/32.png';
import illustration21 from 'assets/img/spot-illustrations/21.png';
import illustration21Dark from 'assets/img/spot-illustrations/dark_21.png';
import { faAward } from '@fortawesome/free-solid-svg-icons';

const EarlyBirdCard = () => {
  return (
    <Card className="border h-full w-full overflow-hidden">
      <div
        className="bg-card bg-holder block"
        style={{
          backgroundImage: `url(${illustration32})`,
          backgroundPosition: 'top right'
        }}
      />
      <div className="dark:hidden">
        <div
          className="bg-holder hidden sm:block xl:hidden 2xl:block bg-card"
          style={{
            backgroundImage: `url(${illustration21})`,
            backgroundPosition: 'bottom right',
            backgroundSize: 'auto'
          }}
        />
      </div>
      <div className="hidden dark:block">
        <div
          className="bg-holder hidden sm:block xl:hidden 2xl:block bg-card"
          style={{
            backgroundImage: `url(${illustration21Dark})`,
            backgroundPosition: 'bottom right',
            backgroundSize: 'auto'
          }}
        />
      </div>
      <Card.Body className="px-8 relative">
        <Badge
          bg="warning"
          variant="phoenix"
          iconPosition="end"
          className="text-sm mb-6"
          iconFamily="fa"
          icon={<FontAwesomeIcon icon={faAward} className="ms-1 text-sm" />}
        >
          COMING SOON
        </Badge>
        <h3 className="mb-8">Early bird gets the warm leads!</h3>
        <p className="text-subtle font-semibold">
          Phoenix CRM Dashboard is coming to{' '}
          <br className="hidden sm:block" />
          market soon for fulfilling your every{' '}
          <br className="hidden sm:block" />
          CRM related needs.{' '}
        </p>
      </Card.Body>
      <Card.Footer className="border-0 py-0 px-8 z-1">
        <p className="text-subtle font-semibold">
          Follow{' '}
          <a href="https://themewagon.com/" target="_blank" rel="noreferrer">
            ThemeWagon{' '}
          </a>
          at <br className="hidden 2xl:block" />
          Bootstrap Marketplace for updates.
        </p>
      </Card.Footer>
    </Card>
  );
};

export default EarlyBirdCard;
